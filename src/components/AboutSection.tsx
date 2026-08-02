import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-wrapper";

const timelineData = [
  {
    year: "1989",
    label: "Foundation",
    name: "Late Mr. Hazari Lal Goyal",
    suffix: "(Mahangaya Wale)",
    description:
      "Founded Double Hathi with a clear belief that purity should never be compromised, laying the foundation for authentic Kachi Ghani mustard oil.",
  },
  {
    year: "2006",
    label: "Second Generation",
    name: "Late Mr. Baijnath Goyal",
    suffix: "",
    description:
      "Expanded the business while upholding the same standards of quality, building lasting relationships with farmers, distributors and households.",
  },
  {
    year: "Present",
    label: "Third Generation",
    name: "Mr. Ashish Goyal",
    suffix: "",
    description:
      "Continues the same foundation with a focus on growth, consistency and modern practices — while purity, strength and trust remain unchanged.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[42%_1fr] gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Heritage image — replace with a genuine Double Hathi photograph */}
          <FadeIn className="order-2 lg:order-1 lg:sticky lg:top-28">
            <figure className="rounded-xl overflow-hidden border border-border bg-muted">
              <div className="aspect-[4/5] w-full flex flex-col items-center justify-center gap-3 text-center px-6">
                <img
                  src="/placeholder.svg"
                  alt="Placeholder for a historical Double Hathi / Aditya Oil Industry photograph"
                  loading="lazy"
                  className="w-20 h-20 opacity-40"
                />
                <p className="text-muted-foreground text-xs tracking-widest uppercase">
                  Heritage photograph
                </p>
                <p className="text-muted-foreground/80 text-xs max-w-[22rem]">
                  Reserved space for an original Double Hathi archive image —
                  founder portrait, early facility, traditional Kachi Ghani
                  machinery or original packaging.
                </p>
              </div>
            </figure>
          </FadeIn>

          {/* Story + timeline */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <span className="text-primary font-semibold text-xs uppercase tracking-[0.25em]">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 leading-tight">
                A Legacy of <span className="text-primary">Purity & Trust</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-5 max-w-2xl">
                For more than three decades, Double Hathi has carried forward a
                family tradition of mustard oil craftsmanship, combining
                generations of experience with an uncompromising focus on
                quality.
              </p>
            </FadeIn>

            {/* Vertical timeline */}
            <div className="relative mt-10 md:mt-12 pl-8 md:pl-10">
              <div className="absolute left-[5px] md:left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/40 to-transparent" />
              <div className="space-y-8 md:space-y-10">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="absolute -left-8 md:-left-10 top-2 w-[11px] h-[11px] rounded-full bg-primary ring-4 ring-cream" />
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p className="font-display text-2xl md:text-3xl font-bold text-primary leading-none">
                        {item.year}
                      </p>
                      <span className="text-muted-foreground text-[11px] tracking-[0.18em] uppercase">
                        {item.label}
                      </span>
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-foreground mt-2">
                      {item.name}
                      {item.suffix && (
                        <span className="text-muted-foreground font-normal text-sm ml-2">
                          {item.suffix}
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-1.5 max-w-xl">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Closing statement */}
            <FadeIn delay={0.15} className="mt-10 md:mt-12 border-t border-border pt-8">
              <p className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug">
                Three Generations.
                <br />
                <span className="text-primary">One Commitment to Quality.</span>
              </p>
              <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-xl">
                Building lasting relationships with trade partners through
                consistency, quality and trust.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Credibility signal */}
        <FadeIn delay={0.2} className="max-w-6xl mx-auto mt-12 md:mt-16">
          <div className="border-t border-border pt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-muted-foreground text-[11px] md:text-xs tracking-[0.2em] uppercase">
            <span>Established 1989</span>
            <span className="text-primary/60">•</span>
            <span>Three Generations</span>
            <span className="text-primary/60">•</span>
            <span>Built for the Long Term</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
