#!/usr/bin/env node
/**
 * Genera components/brand/paths.ts a partir de los vectores y tipografías de assets/.
 *
 *   npm run brand
 *
 * El logotipo de Optus es la marca (assets/logos/optus_logo_vec.svg) más el título «OPTUS»
 * en Varela Round en mayúsculas. Varela Round solo existe en peso Regular, así que el
 * grosor se iguala al de los trazos de la marca con geometría:
 *
 *   - trazo de la marca: 46,25 u (mediana del eje medio del contorno, viewBox de 392,37 u de alto)
 *   - asta de Varela Round: 90 u sobre 698 u de altura de mayúscula (em de 1000)
 *
 * Para una altura de mayúscula `cap` (en unidades de la marca) se resuelven la escala `s`
 * del tipo y el contorno extra `e` que engrosa las letras:
 *
 *   s · 90  + e = 46,25      (asta = trazo de la marca)
 *   s · 698 + e = cap        (altura visible de la mayúscula)
 *
 * Las letras se exportan como contornos, de modo que el logotipo no depende de que la
 * tipografía cargue en el navegador.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import opentype from "opentype.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const asset = (...parts) => join(root, "assets", ...parts);
const round = (n, digits = 1) => Number(n.toFixed(digits));

/** Primer <path> de un SVG de Inkscape y la traslación de su grupo. */
function readMark(file) {
  const svg = readFileSync(file, "utf8");
  const [, , , width, height] = svg.match(/viewBox="([\d.-]+) ([\d.-]+) ([\d.-]+) ([\d.-]+)"/);
  const [, tx, ty] = svg.match(/transform="translate\(([\d.-]+),([\d.-]+)\)"/);
  const d = svg.match(/<path[^>]*?\sd="([^"]+)"/s)[1].replace(/\s+/g, " ").trim();
  return { width: Number(width), height: Number(height), tx: Number(tx), ty: Number(ty), d };
}

/** Texto → un único trazado, con el origen en la esquina superior izquierda de su caja. */
function outline(fontFile, text, { scale, extra = 0 }) {
  const font = opentype.loadSync(fontFile);
  const k = scale * (1000 / font.unitsPerEm);
  const glyphs = font.stringToGlyphs(text);
  const commands = [];
  let pen = 0;
  let left = Infinity;
  let right = -Infinity;
  let top = Infinity;
  let bottom = -Infinity;
  glyphs.forEach((glyph, index) => {
    // Caja del glifo en unidades de la fuente, con la Y hacia arriba.
    const box = glyph.getBoundingBox();
    left = Math.min(left, pen + box.x1 * k - extra / 2);
    right = Math.max(right, pen + box.x2 * k + extra / 2);
    top = Math.min(top, -box.y2 * k - extra / 2);
    bottom = Math.max(bottom, -box.y1 * k + extra / 2);
    for (const c of glyph.getPath(0, 0, font.unitsPerEm).commands) {
      const point = (x, y) => [pen + x * k, y * k];
      if (c.type === "Z") commands.push({ type: "Z" });
      else if (c.type === "M" || c.type === "L") commands.push({ type: c.type, p: [point(c.x, c.y)] });
      else if (c.type === "Q") commands.push({ type: "Q", p: [point(c.x1, c.y1), point(c.x, c.y)] });
      else commands.push({ type: "C", p: [point(c.x1, c.y1), point(c.x2, c.y2), point(c.x, c.y)] });
    }
    const next = glyphs[index + 1];
    const kerning = next ? font.getKerningValue(glyph, next) : 0;
    // El contorno extra come espacio entre letras: se devuelve al avance.
    pen += (glyph.advanceWidth + kerning) * k + extra;
  });
  const d = commands
    .map((c) =>
      c.type === "Z"
        ? "Z"
        : c.type + c.p.map(([x, y]) => `${round(x - left)} ${round(y - top)}`).join(" "),
    )
    .join("");
  return {
    width: round(right - left),
    height: round(bottom - top),
    baseline: round(-top),
    d,
    stroke: round(extra, 2),
  };
}

// ── Optus ────────────────────────────────────────────────────────────────────────────
const MARK_STROKE = 46.25;
const VARELA = { stem: 90, cap: 698 };
/** Altura de la mayúscula respecto a la marca en el logotipo horizontal. */
const CAP_RATIO = 0.66;

const optus = readMark(asset("logos", "optus_logo_vec.svg"));
const cap = CAP_RATIO * optus.height;
const scale = (cap - MARK_STROKE) / (VARELA.cap - VARELA.stem);
const extra = MARK_STROKE - scale * VARELA.stem;
const wordmark = outline(asset("fonts", "Varela_Round", "VarelaRound-Regular.ttf"), "OPTUS", {
  scale,
  extra,
});

// ── Optipagos (marca + «optipagos» en Baumans) y Optimype («optimype» en Lilita One) ──
const optipagos = readMark(asset("logos", "optipago_logo_vec.svg"));
const optipagosWord = outline(asset("fonts", "Baumans", "Baumans-Regular.ttf"), "optipagos", {
  scale: 0.2,
});
const optimypeWord = outline(asset("fonts", "Lilita_One", "LilitaOne-Regular.ttf"), "optimype", {
  scale: 0.2,
});

const mark = (m) =>
  `{\n  width: ${m.width},\n  height: ${m.height},\n  transform: "translate(${m.tx} ${m.ty})",\n  d: "${m.d}",\n}`;
const word = (w) =>
  `{\n  width: ${w.width},\n  height: ${w.height},\n  baseline: ${w.baseline},\n  stroke: ${w.stroke},\n  d: "${w.d}",\n}`;

writeFileSync(
  join(root, "components", "brand", "paths.ts"),
  `// Generado por scripts/build-brand.mjs — no editar a mano (npm run brand).

/** Marca de Optus. */
export const OPTUS_MARK = ${mark(optus)} as const;

/**
 * «OPTUS» en Varela Round, en las mismas unidades que la marca. \`stroke\` es el contorno
 * que iguala el asta de la letra (${round(scale * VARELA.stem, 2)} u) al trazo de la marca (${MARK_STROKE} u).
 */
export const OPTUS_WORDMARK = ${word(wordmark)} as const;

/** Mascota de Optipagos: el pajarito con sombrero. */
export const OPTIPAGOS_MARK = ${mark(optipagos)} as const;

/** «optipagos» en Baumans. */
export const OPTIPAGOS_WORDMARK = ${word(optipagosWord)} as const;

/** «optimype» en Lilita One, la tipografía de marca que usa hoy su sitio. */
export const OPTIMYPE_WORDMARK = ${word(optimypeWord)} as const;
`,
);
console.log(
  `OPTUS: escala ${scale.toFixed(4)}, contorno extra ${extra.toFixed(2)} u → asta ${(scale * VARELA.stem + extra).toFixed(2)} u (marca ${MARK_STROKE} u)`,
);
