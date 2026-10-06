import { Marquee } from "@/components/ui/Marquee";

/** Cinta negra con los hitos, como las franjas de texto de las referencias. */
export function Ticker({ items }: { items: string[] }) {
  return (
    <div className="border-y border-paper/15 bg-ink py-3 text-paper">
      <Marquee duration={46}>
        {items.map((item) => (
          <span key={item} className="label flex items-center gap-6 pr-6 text-[0.8rem]">
            {item}
            <span className="ticker-dot" aria-hidden="true" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
