import type { ComponentType, SVGProps } from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import type { SocialIcon } from "@/lib/site";

export const socialIcons: Record<SocialIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

export { FaWhatsapp as WhatsappIcon };

type IconProps = SVGProps<SVGSVGElement>;
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": true } as const;

/** Flecha en diagonal: enlaces que salen del sitio o avanzan. */
export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base} strokeLinecap="square" {...props}>
      <path d="M6 18 18 6M8 6h10v10" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...base} strokeLinecap="square" {...props}>
      <path d="M12 4v16M5 13l7 7 7-7" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg {...base} strokeLinecap="square" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} strokeLinecap="square" {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
