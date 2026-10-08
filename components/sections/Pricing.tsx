import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/i18n/dictionaries";

export function Pricing({ dict, id }: { dict: Dictionary; id: string }) {
  const { pricing } = dict;

  return (
    <section id={id} className="grain relative scroll-mt-20 border-t border-paper/10 bg-ink text-paper">
      <div className="shell py-24 md:py-36">
        <div className="grid gap-8 md:grid-cols-[12rem_1fr]">
          <p className="section-label">
            <span>[ + ]</span>
            {pricing.label}
          </p>
          <div>
            <Reveal effect="wipe">
              <h2 className="display section-title">
                {pricing.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg leading-snug text-paper/75 md:text-xl">{pricing.lead}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:mt-20">
          {pricing.items.map((item, index) => (
            <Reveal
              key={item.title}
              effect="scale"
              delay={index * 90}
              className="relative flex flex-col justify-between border border-paper/15 bg-coal p-7 transition-colors hover:border-paper/40 md:p-8"
            >
              <div>
                <span className="label text-blue-bright">0{index + 1} / 03</span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">{item.description}</p>
              </div>
              <div className="mt-8 border-t border-paper/10 pt-6">
                <span className="label opacity-60">Tarifa</span>
                <p className="display mt-1 text-3xl text-sun">{item.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
