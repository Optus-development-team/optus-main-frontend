"use client";

import { useEffect, useRef } from "react";

/**
 * Lienzo WebGL de la portada. three.js se descarga aparte, cuando la página ya es visible;
 * mientras tanto (y si el navegador no tiene WebGL) queda la marca en 2D que va debajo.
 */
export function HeroCanvas({ className = "" }: { className?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dispose: (() => void) | undefined;
    let cancelled = false;
    import("./scene")
      .then(({ mountHeroScene }) => {
        if (cancelled || !container.current) return;
        dispose = mountHeroScene(container.current);
      })
      .catch(() => {
        // Sin WebGL la portada se queda con la versión estática.
      });
    return () => {
      cancelled = true;
      dispose?.();
    };
  }, []);

  return <div ref={container} className={`hero-canvas ${className}`} aria-hidden="true" />;
}
