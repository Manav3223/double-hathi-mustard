import { Sprout, Sparkles, Droplets, Filter, Package, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import processImage from "@/assets/process-extraction.jpg";

const steps = [
  {
    icon: Sprout,
    step: "01",
    title: "Seed Selection",
    description: "Premium mustard seeds sourced from India's finest growing regions.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Cleaning & Grading",
    description: "Every seed meticulously cleaned and graded for absolute purity.",
  },
  {
    icon: Droplets,
    step: "03",
    title: "Kachi Ghani Extraction",
    description: "Slow cold-press retaining every nutrient, aroma, and flavor.",
  },
  {
    icon: Filter,
    step: "04",
    title: "Natural Filtration",
    description: "Chemical-free filtration preserving nature's goodness intact.",
  },
  {
    icon: Package,
    step: "05",
    title: "Hygienic Packaging",
    description: "Sealed in clean environments meeting highest safety standards.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden bg-card">
      {/* Mustard field-inspired background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.06]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 1px, transparent 1px),
                              radial-gradient(circle at 80% 20%, hsl(var(--primary)) 1px, transparent 1px),
                              radial-gradient(circle at 60% 80%, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px, 80px 80px, 50px 50px',
          }}
        />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5 text-foreground">
            From Seed to{" "}
            <span className="text-primary">Purity</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Crafted using traditional Kachi Ghani methods with modern hygiene —
            every drop is a promise of quality.
          </p>
        </FadeIn>

        {/* Split layout: image left, steps right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Large image */}
          <FadeIn direction="left" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={processImage}
                alt="Traditional Kachi Ghani mustard oil extraction"
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-[400px] md:h-[560px] lg:h-[640px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              {/* Badge on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-5 border border-border">
                  <p className="font-display text-lg md:text-xl font-bold text-foreground">
                    Traditional Kachi Ghani Method
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Slow cold-pressed at low temperature to preserve every nutrient
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary/10 rounded-2xl -z-10" />
          </FadeIn>

          {/* Right — Steps */}
          <div>
            <StaggerContainer staggerDelay={0.1} className="space-y-1">
              {steps.map((step, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group flex items-start gap-5 p-4 md:p-5 rounded-2xl hover:bg-background/60 transition-colors duration-300 cursor-default"
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0 relative">
                      <span className="font-display text-4xl md:text-5xl font-bold text-primary/15 group-hover:text-primary/30 transition-colors duration-300 select-none">
                        {step.step}
                      </span>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-1">
                        {step.description}
                      </p>
                    </div>

                    {/* Connector line (except last) */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-[2.85rem] md:left-[3.1rem] bottom-0 w-[1px] h-3 bg-primary/10 hidden md:block" />
                    )}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Trust line at bottom */}
        <FadeIn delay={0.4} className="mt-16 md:mt-20">
          <div className="flex items-center justify-center gap-3 text-center">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/40" />
            <Shield className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="font-display text-lg md:text-xl text-foreground/80 italic">
              "Ensuring purity and strength in every drop"
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProcessSection;
