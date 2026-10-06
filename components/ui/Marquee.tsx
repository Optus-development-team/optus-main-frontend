import type { CSSProperties, ReactNode } from "react";

/** Cinta de texto que corre sin fin. El contenido se duplica para que el bucle no tenga corte. */
export function Marquee({
  children,
  duration = 38,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`marquee ${className}`} style={{ "--marquee-duration": `${duration}s` } as CSSProperties}>
      <div className="marquee-track" data-reverse={reverse || undefined}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
