import type { SVGProps } from "react";
import {
  OPTIMYPE_WORDMARK,
  OPTIPAGOS_MARK,
  OPTIPAGOS_WORDMARK,
  OPTUS_MARK,
  OPTUS_WORDMARK,
} from "./paths";

/**
 * Marcas de Optus y de sus productos. Todo se pinta con `currentColor`.
 *
 * Los trazados largos se declaran una sola vez en <BrandSprite /> (en el layout) y cada
 * logo los referencia con <use>, para no repetirlos en el HTML.
 */
const WORDMARK_GAP = OPTUS_MARK.height * 0.28;
const LOCKUP = {
  width: OPTUS_MARK.width + WORDMARK_GAP + OPTUS_WORDMARK.width,
  height: OPTUS_MARK.height,
};

export function BrandSprite() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <symbol id="optus-mark" viewBox={`0 0 ${OPTUS_MARK.width} ${OPTUS_MARK.height}`}>
          <path transform={OPTUS_MARK.transform} d={OPTUS_MARK.d} />
        </symbol>
        {/* El contorno iguala el grosor de la letra al trazo de la marca (ver scripts/build-brand.mjs). */}
        <symbol id="optus-wordmark" viewBox={`0 0 ${OPTUS_WORDMARK.width} ${OPTUS_WORDMARK.height}`}>
          <path
            d={OPTUS_WORDMARK.d}
            stroke="currentColor"
            strokeWidth={OPTUS_WORDMARK.stroke}
            strokeLinejoin="round"
          />
        </symbol>
      </defs>
    </svg>
  );
}

/** La marca sola. */
export function OptusMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={`0 0 ${OPTUS_MARK.width} ${OPTUS_MARK.height}`}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <use href="#optus-mark" />
    </svg>
  );
}

/** «OPTUS» en Varela Round, con el grosor igualado al de la marca. */
export function OptusWordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={`0 0 ${OPTUS_WORDMARK.width} ${OPTUS_WORDMARK.height}`}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <use href="#optus-wordmark" />
    </svg>
  );
}

/** Logotipo horizontal: marca + «OPTUS». */
export function OptusLogo({ title = "Optus", ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox={`0 0 ${LOCKUP.width} ${LOCKUP.height}`}
      fill="currentColor"
      role="img"
      aria-label={title}
      {...props}
    >
      <use href="#optus-mark" width={OPTUS_MARK.width} height={OPTUS_MARK.height} />
      <use
        href="#optus-wordmark"
        x={OPTUS_MARK.width + WORDMARK_GAP}
        y={(OPTUS_MARK.height - OPTUS_WORDMARK.height) / 2}
        width={OPTUS_WORDMARK.width}
        height={OPTUS_WORDMARK.height}
      />
    </svg>
  );
}

/** Mascota de Optipagos: el pajarito con sombrero. */
export function OptipagosMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={`0 0 ${OPTIPAGOS_MARK.width} ${OPTIPAGOS_MARK.height}`}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path transform={OPTIPAGOS_MARK.transform} d={OPTIPAGOS_MARK.d} />
    </svg>
  );
}

/** «optipagos» en Baumans. */
export function OptipagosWordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={`0 0 ${OPTIPAGOS_WORDMARK.width} ${OPTIPAGOS_WORDMARK.height}`}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d={OPTIPAGOS_WORDMARK.d} />
    </svg>
  );
}

/** «optimype» en Lilita One, la tipografía de marca de su sitio actual. */
export function OptimypeWordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={`0 0 ${OPTIMYPE_WORDMARK.width} ${OPTIMYPE_WORDMARK.height}`}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d={OPTIMYPE_WORDMARK.d} />
    </svg>
  );
}
