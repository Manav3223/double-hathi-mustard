import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const timelineData = [
  {
    year: "1989",
    label: "Founded",
    name: "Late Mr. Hazari Lal Goyal",
    suffix: "(Mahangaya Wale)",
    description:
      "Founded Double Hathi with a clear belief that purity should never be compromised. With deep knowledge of traditional oil extraction, he laid the foundation for producing authentic Kachi Ghani mustard oil that preserves natural strength, aroma, and nutrition.",
  },
  {
    year: "2006",
    label: "Expansion",
    name: "Late Mr. Baijnath Goel",
    suffix: "",
    description:
      "Expanded the business while upholding the same uncompromising standards of quality and trust. Under his leadership, Double Hathi strengthened its presence and built lasting relationships with farmers, distributors, and households.",
  },
  {
    year: "Present",
    label: "Current Leadership",
    name: "Mr. Ashish Goel",
    suffix: "",
    description:
      "Continues to build on this strong foundation with a focus on growth, consistency, and modern practices. While the scale is expanding, the core values remain unchanged — purity, strength, and trust in every drop.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
            Our Story
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 leading-tight">
            A Legacy of{" "}
            <span className="text-primary">Purity & Trust</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Double Hathi stands as a multi-generational brand — shaped by
            dedication, carried forward with responsibility, and trusted by
            families every day.
          </p>
        </FadeIn>

        {/* Horizontal Timeline — Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative flex items-center justify-center gap-0 max-w-3xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 -translate-y-1/2" />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex-1 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Dot */}
                <div className="w-5 h-5 rounded-full bg-primary border-4 border-card shadow-md z-10" />
                {/* Year */}
                <p className="font-display text-2xl font-bold text-primary mt-3">
                  {item.year}
                </p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Generation Cards */}
        <StaggerContainer staggerDelay={0.12} className="space-y-6 max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative grid md:grid-cols-[140px_1fr] gap-6 md:gap-8 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Year block — visible on mobile too */}
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary leading-none">
                    {item.year}
                  </p>
                  <span className="text-muted-foreground text-xs tracking-widest uppercase lg:hidden">
                    {item.label}
                  </span>
                  <span className="hidden lg:block text-muted-foreground text-xs tracking-widest uppercase mt-1">
                    {item.label}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.name}
                    {item.suffix && (
                      <span className="text-muted-foreground font-normal text-base ml-2">
                        {item.suffix}
                      </span>
                    )}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>

                {/* Accent line */}
                <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-primary/20 rounded-full group-hover:bg-primary/50 transition-colors duration-300 hidden md:block" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust line */}
        <FadeIn delay={0.3} className="mt-14 md:mt-18 text-center">
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-8 py-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <p className="text-muted-foreground text-sm md:text-base font-medium">
              Purity, strength, and trust — in every drop, since 1989
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
