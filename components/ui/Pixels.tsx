import type { CSSProperties } from "react";

/**
 * Composiciones estáticas de cuadrados, el motivo que une las referencias de assets/inspo.
 * Cada fila es un texto: "#" tinta, "o" papel, "b" azul, "y" amarillo y "." vacío.
 */
const tones: Record<string, string> = {
  "#": "var(--color-ink)",
  o: "var(--color-paper)",
  b: "var(--color-blue)",
  y: "var(--color-sun)",
};

export function Pixels({
  rows,
  size = "1rem",
  className = "",
}: {
  rows: string[];
  /** Lado de cada cuadrado (cualquier longitud CSS). */
  size?: string;
  className?: string;
}) {
  const columns = Math.max(...rows.map((row) => row.length));
  return (
    <div
      aria-hidden="true"
      className={`pixels ${className}`}
      style={{ "--pixel": size, gridTemplateColumns: `repeat(${columns}, var(--pixel))` } as CSSProperties}
    >
      {rows.flatMap((row, y) =>
        Array.from(row.padEnd(columns, "."), (cell, x) => (
          <span key={`${y}-${x}`} style={tones[cell] ? { background: tones[cell] } : undefined} />
        )),
      )}
    </div>
  );
}

/**
 * Borde escalonado entre dos secciones: una fila de cuadrados del color de la sección
 * siguiente que «muerde» la actual.
 */
export function PixelEdge({
  color,
  flip = false,
  className = "",
}: {
  /** Color de los cuadrados (el de la sección vecina). */
  color: string;
  flip?: boolean;
  className?: string;
}) {
  // Alturas en cuadrados (0–3) de cada columna: un patrón fijo, no aleatorio.
  const heights = [1, 3, 2, 0, 1, 2, 0, 0, 3, 1, 0, 2, 1, 0, 0, 1, 3, 0, 2, 1, 0, 0, 2, 3, 1, 0, 1, 2, 0, 3, 1, 0];
  return (
    <div
      aria-hidden="true"
      className={`pixel-edge ${className}`}
      data-flip={flip || undefined}
      style={{ "--edge": color } as CSSProperties}
    >
      {heights.map((height, index) => (
        <span key={index} style={{ "--h": height } as CSSProperties} />
      ))}
    </div>
  );
}
