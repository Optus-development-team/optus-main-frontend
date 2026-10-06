"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Effect = "up" | "wipe" | "fade" | "scale";

/**
 * Hace aparecer su contenido cuando entra en pantalla. La animación está en globals.css
 * ([data-reveal]); aquí solo se marca el momento. Sin JavaScript el contenido se ve igual.
 */
export function Reveal({
  children,
  effect = "up",
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  effect?: Effect;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span" | "section" | "article" | "p";
}) {
  // La etiqueta cambia, pero para la referencia basta tratarla como un <div>.
  const Tag = as as "div";
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = element.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.dataset.in = "true";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={element}
      data-reveal={effect}
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
