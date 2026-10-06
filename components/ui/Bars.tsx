import type { CSSProperties } from "react";

/**
 * Fondo de barras verticales de luz (estático, en 2D): columnas de azul con distinta
 * luminosidad que «respiran» muy despacio. Los valores salen de una fórmula fija.
 */
export function Bars({ count = 36, className = "" }: { count?: number; className?: string }) {
  return (
    <div aria-hidden="true" className={`bars ${className}`}>
      {Array.from({ length: count }, (_, index) => {
        const wave = Math.sin(index * 1.7) * 0.5 + Math.sin(index * 0.43 + 1.3) * 0.5;
        const light = Math.round((wave * 0.5 + 0.5) * 100);
        return (
          <span
            key={index}
            style={
              {
                "--light": `${light}%`,
                "--grow": 1 + ((index * 7) % 5) * 0.6,
                "--delay": `${-((index * 37) % 90) / 10}s`,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
