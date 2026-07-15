import { Sprout, Sparkles, Droplets, Filter, Package, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import step1Asset from "@/assets/process-step-1.webp.asset.json";
import step2Img from "@/assets/process-step-2.jpg";
import step3Img from "@/assets/process-step-3.jpg";
import step4Img from "@/assets/process-step-4.jpg";
import step5Img from "@/assets/process-step-5.jpg";

const steps = [
  {
    icon: Sprout,
    step: "01",
    title: "Seed Selection",
    description: "Premium mustard seeds sourced from India's finest growing regions.",
    image: step1Asset.url,
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Cleaning & Grading",
    description: "Every seed meticulously cleaned and graded for absolute purity.",
    image: step2Img,
  },
  {
    icon: Droplets,
    step: "03",
    title: "Kachi Ghani Extraction",
    description: "Slow cold-press retaining every nutrient, aroma, and flavor.",
    image: step3Img,
  },
  {
    icon: Filter,
    step: "04",
    title: "Natural Filtration",
    description: "Chemical-free filtration preserving nature's goodness intact.",
    image: step4Img,
  },
  {
    icon: Package,
    step: "05",
    title: "Hygienic Packaging",
    description: "Sealed in clean environments meeting highest safety standards.",
    image: step5Img,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-36 relative overflow-hidden bg-card">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.06]" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
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

        {/* Steps with connecting line */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical connecting line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                    index > 0 ? "md:mt-20" : ""
                  }`}
                >
                  {/* Timeline dot — desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-card">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Image side */}
                  <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative rounded-2xl overflow-hidden shadow-xl group"
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        width={640}
                        height={512}
                        className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                      {/* Step number overlay */}
                      <span className="absolute top-4 left-4 font-display text-5xl font-bold text-white/20 select-none">
                        {step.step}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content side */}
                  <div className={`mt-5 md:mt-0 ${isEven ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8 md:text-right"}`}>
                    {/* Mobile icon + number */}
                    <div className={`flex items-center gap-3 mb-3 md:hidden`}>
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
                        <Icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="font-display text-sm font-bold text-primary tracking-widest">
                        STEP {step.step}
                      </span>
                    </div>

                    {/* Desktop step label */}
                    <span className={`hidden md:inline-block font-display text-sm font-bold text-primary tracking-widest mb-2`}>
                      STEP {step.step}
                    </span>

                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust line */}
        <FadeIn delay={0.4} className="mt-16 md:mt-24">
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
