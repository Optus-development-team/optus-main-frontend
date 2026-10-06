"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Párrafo que se «enciende» palabra a palabra según avanza el scroll. Las palabras entre
 * *asteriscos* se resaltan. Solo se actualiza una variable CSS (--progress) por fotograma.
 */
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const element = useRef<HTMLParagraphElement>(null);
  const words = text.split(/\s+/).filter(Boolean);

  useEffect(() => {
    const node = element.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.style.setProperty("--progress", "1");
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      // 0 cuando el párrafo asoma por abajo; 1 cuando su final pasa el centro de la pantalla.
      const progress = (viewport * 0.92 - rect.top) / (rect.height + viewport * 0.42);
      node.style.setProperty("--progress", Math.min(Math.max(progress, 0), 1).toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <p
      ref={element}
      className={`scroll-words ${className}`}
      style={{ "--words": words.length } as CSSProperties}
    >
      {words.map((word, index) => {
        const strong = word.startsWith("*");
        const clean = word.replaceAll("*", "");
        return (
          <span key={index} data-strong={strong || undefined} style={{ "--index": index } as CSSProperties}>
            {clean}{" "}
          </span>
        );
      })}
    </p>
  );
}
