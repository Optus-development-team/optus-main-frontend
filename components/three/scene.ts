import {
  Color,
  ExtrudeGeometry,
  Group,
  InstancedMesh,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { OPTUS_MARK } from "@/components/brand/paths";

/**
 * Escena de la portada: la marca de Optus extruida como un tubo cromado y tramado en blanco
 * y negro (como las imágenes de assets/inspo), flotando en un campo de píxeles que viajan
 * hacia la cámara. El lienzo es transparente: el azul lo pone la sección.
 */
const PAPER = "#eeefee";
const INK = "#0d0d10";
const SUN = "#dbc800";
const DEEP = "#06199a";
const SKY = "#5b78ff";

const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`;

// Cromo falso (un estudio con cielo claro, horizonte oscuro y una franja de luz) reducido
// a dos tintas con una trama ordenada de Bayer.
const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uCell;
  uniform vec3 uInk;
  uniform vec3 uPaper;
  varying vec3 vNormal;
  varying vec3 vView;

  float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
  float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
  float bayer8(vec2 a) { return bayer4(0.5 * a) * 0.25 + bayer2(a); }

  void main() {
    vec3 n = normalize(vNormal);
    vec3 v = normalize(vView);
    vec3 r = reflect(-v, n);
    float sky = smoothstep(-0.05, 0.8, r.y);
    float horizon = 1.0 - smoothstep(0.0, 0.3, abs(r.y + 0.12));
    float strip = smoothstep(0.55, 0.95, sin(r.x * 2.6 + r.y * 4.4 + uTime * 0.35) * 0.5 + 0.5);
    float bounce = smoothstep(-0.25, -0.95, r.y) * 0.4;
    float rim = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 2.4);
    float tone = clamp(sky * 0.62 + strip * 0.5 + bounce + rim * 0.5 - horizon * 0.42, 0.0, 1.0);
    float threshold = bayer8(gl_FragCoord.xy / uCell) + 1.0 / 128.0;
    gl_FragColor = vec4(mix(uInk, uPaper, step(threshold, tone)), 1.0);
    #include <colorspace_fragment>
  }
`;

type Pixel = { angle: number; radius: number; z: number; size: number; speed: number };

const FAR = -46;
const NEAR = 12;

export function mountHeroScene(container: HTMLElement): () => void {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.style.cssText = "display:block;width:100%;height:100%";
  container.appendChild(canvas);

  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.1, 120);
  camera.position.set(0, 0, 14);

  // ── La marca ─────────────────────────────────────────────────────────────────────
  const { paths } = new SVGLoader().parse(
    `<svg xmlns="http://www.w3.org/2000/svg"><path d="${OPTUS_MARK.d}"/></svg>`,
  );
  const shapes = paths.flatMap((path) => SVGLoader.createShapes(path));
  // El bisel redondea el trazo (46 u de ancho) hasta dejarlo casi tubular; bevelOffset
  // negativo conserva la silueta original.
  const geometry = new ExtrudeGeometry(shapes, {
    depth: 14,
    bevelEnabled: true,
    bevelThickness: 17,
    bevelSize: 17,
    bevelOffset: -17,
    bevelSegments: 7,
    curveSegments: 7,
  });
  geometry.center();
  geometry.rotateX(Math.PI); // el SVG tiene la Y hacia abajo
  geometry.scale(1 / OPTUS_MARK.width, 1 / OPTUS_MARK.width, 1 / OPTUS_MARK.width);

  const chrome = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uCell: { value: 2 * dpr },
      uInk: { value: new Color(INK) },
      uPaper: { value: new Color(PAPER) },
    },
  });
  const mark = new Group();
  mark.add(new Mesh(geometry, chrome));
  scene.add(mark);

  // ── El campo de píxeles ──────────────────────────────────────────────────────────
  const small = window.innerWidth < 768;
  const count = small ? 70 : 150;
  const plane = new PlaneGeometry(1, 1);
  const flat = new MeshBasicMaterial({ toneMapped: false });
  const field = new InstancedMesh(plane, flat, count);
  // Sobre todo tonos oscuros: el texto de la portada es claro y pasa por encima.
  const palette = [INK, INK, INK, DEEP, DEEP, DEEP, SKY, SUN, PAPER].map((hex) => new Color(hex));
  // Aleatorio con semilla fija: la composición es la misma en cada visita.
  let seed = 20261006;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const sizes = [0.1, 0.1, 0.16, 0.16, 0.26, 0.42];
  const pixels: Pixel[] = Array.from({ length: count }, (_, index) => {
    field.setColorAt(index, palette[Math.floor(random() * palette.length)]);
    return {
      angle: random() * Math.PI * 2,
      radius: 1.6 + random() * 7.5,
      z: MathUtils.lerp(FAR, NEAR, random()),
      size: sizes[Math.floor(random() * sizes.length)],
      speed: 1.2 + random() * 2.6,
    };
  });
  if (field.instanceColor) field.instanceColor.needsUpdate = true;
  scene.add(field);

  const dummy = new Object3D();
  const placePixels = () => {
    pixels.forEach((pixel, index) => {
      dummy.position.set(Math.cos(pixel.angle) * pixel.radius, Math.sin(pixel.angle) * pixel.radius, pixel.z);
      dummy.scale.setScalar(pixel.size);
      dummy.updateMatrix();
      field.setMatrixAt(index, dummy.matrix);
    });
    field.instanceMatrix.needsUpdate = true;
  };

  // ── Composición: la marca ocupa el hueco que deja la portada ([data-hero-stage]) ──
  const stage = container.parentElement?.querySelector<HTMLElement>("[data-hero-stage] svg") ?? null;
  const layout = { x: 0, y: 0, scale: 1 };
  const resize = () => {
    const { clientWidth: width, clientHeight: height } = container;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    const unit = (2 * camera.position.z * Math.tan(MathUtils.degToRad(camera.fov / 2))) / height;
    const frame = container.getBoundingClientRect();
    const box = stage?.getBoundingClientRect();
    if (box && box.width > 0) {
      // El SVG puede ser más alto que su dibujo: cuenta el ancho realmente pintado.
      const drawn = Math.min(box.width, box.height * (OPTUS_MARK.width / OPTUS_MARK.height));
      layout.scale = drawn * 1.06 * unit;
      layout.x = (box.left + box.width / 2 - frame.left - width / 2) * unit;
      layout.y = (height / 2 - (box.top + box.height / 2 - frame.top)) * unit;
    } else {
      layout.scale = Math.min(width * 0.46, height * 0.9) * unit;
      layout.x = 0;
      layout.y = height * 0.12 * unit;
    }
  };

  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
  const onPointer = (event: PointerEvent) => {
    pointer.targetX = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.targetY = (event.clientY / window.innerHeight) * 2 - 1;
  };

  let scroll = 0;
  let boost = 0;
  let lastScrollY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    boost = Math.min(boost + Math.abs(y - lastScrollY) * 0.012, 6);
    lastScrollY = y;
    scroll = MathUtils.clamp(y / Math.max(container.clientHeight, 1), 0, 1.2);
  };

  let frame = 0;
  let previous = performance.now();
  let elapsed = 0;
  let visible = true;

  const render = (now: number) => {
    const delta = Math.min((now - previous) / 1000, 0.05);
    previous = now;
    elapsed += delta;
    pointer.x += (pointer.targetX - pointer.x) * Math.min(delta * 4, 1);
    pointer.y += (pointer.targetY - pointer.y) * Math.min(delta * 4, 1);
    boost *= Math.exp(-delta * 2.2);

    chrome.uniforms.uTime.value = elapsed;
    mark.position.set(layout.x, layout.y + Math.sin(elapsed * 0.8) * 0.1 + scroll * 2.4, 0);
    mark.scale.setScalar(layout.scale * (1 - scroll * 0.18));
    mark.rotation.y = Math.sin(elapsed * 0.42) * 0.42 + pointer.x * 0.45 + scroll * 1.1;
    mark.rotation.x = Math.sin(elapsed * 0.31) * 0.1 + pointer.y * 0.28 - 0.06;
    mark.rotation.z = Math.sin(elapsed * 0.25) * 0.035;

    for (const pixel of pixels) {
      pixel.z += pixel.speed * (1 + boost) * delta;
      if (pixel.z > NEAR) pixel.z = FAR;
    }
    placePixels();
    renderer.render(scene, camera);
  };

  const loop = (now: number) => {
    render(now);
    frame = requestAnimationFrame(loop);
  };
  const start = () => {
    if (frame || reducedMotion || !visible || document.hidden) return;
    previous = performance.now();
    frame = requestAnimationFrame(loop);
  };
  const stop = () => {
    cancelAnimationFrame(frame);
    frame = 0;
  };

  const resizeObserver = new ResizeObserver(() => {
    resize();
    if (!frame) render(performance.now());
  });
  resizeObserver.observe(container);
  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
    else stop();
  });
  visibility.observe(container);
  const onVisibilityChange = () => (document.hidden ? stop() : start());
  document.addEventListener("visibilitychange", onVisibilityChange);
  window.addEventListener("pointermove", onPointer, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });

  resize();
  onScroll();
  render(performance.now());
  container.dataset.ready = "true";
  start();

  return () => {
    stop();
    resizeObserver.disconnect();
    visibility.disconnect();
    document.removeEventListener("visibilitychange", onVisibilityChange);
    window.removeEventListener("pointermove", onPointer);
    window.removeEventListener("scroll", onScroll);
    geometry.dispose();
    plane.dispose();
    chrome.dispose();
    flat.dispose();
    field.dispose();
    renderer.dispose();
    canvas.remove();
    delete container.dataset.ready;
  };
}
