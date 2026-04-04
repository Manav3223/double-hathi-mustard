import { Sprout, Sparkles, Droplets, Filter, Package } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const steps = [
  {
    icon: Sprout,
    step: "01",
    title: "Seed Selection",
    description: "High-quality mustard seeds sourced from trusted farms across India's finest growing regions.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Cleaning & Grading",
    description: "Seeds are meticulously cleaned and graded to remove all impurities before processing.",
  },
  {
    icon: Droplets,
    step: "03",
    title: "Kachi Ghani Extraction",
    description: "Slow cold-press method retains every drop of nutrition, aroma, and authentic flavor.",
  },
  {
    icon: Filter,
    step: "04",
    title: "Natural Filtration",
    description: "Oil is naturally filtered without any chemicals — preserving purity at every stage.",
  },
  {
    icon: Package,
    step: "05",
    title: "Hygienic Packaging",
    description: "Packed in clean, sealed environments meeting the highest safety and quality standards.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-36 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-mustard rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-5 text-foreground">
            From Seed to{" "}
            <span className="text-primary">Purity</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Crafted using traditional Kachi Ghani methods with modern hygiene —
            every drop is a promise of quality.
          </p>
        </FadeIn>

        {/* Steps — Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <StaggerContainer staggerDelay={0.15} className="relative">
            {/* Connecting line */}
            <div className="absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <StaggerItem key={index} className="relative">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Icon circle */}
                    <motion.div
                      className="relative w-[120px] h-[120px] rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/60 transition-colors duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/10"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-md">
                        {step.step}
                      </div>
                      <step.icon className="w-10 h-10 text-primary group-hover:text-primary transition-colors" />
                    </motion.div>

                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed px-2">
                      {step.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

        {/* Steps — Mobile/Tablet vertical timeline */}
        <div className="lg:hidden">
          <StaggerContainer staggerDelay={0.12} className="relative pl-8 md:pl-12">
            {/* Vertical line */}
            <div className="absolute left-[18px] md:left-[26px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40" />

            <div className="space-y-10">
              {steps.map((step, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative flex items-start gap-5 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-8 md:-left-12 top-1 w-9 h-9 md:w-11 md:h-11 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/70 transition-colors shadow-md z-10">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-card rounded-2xl p-5 md:p-6 border border-border group-hover:border-primary/30 transition-colors shadow-sm group-hover:shadow-md">
                      <span className="text-primary/60 text-xs font-bold tracking-widest">
                        STEP {step.step}
                      </span>
                      <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
