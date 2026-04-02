import { Heart, Sparkles, Shield, Leaf, Flame, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";

const benefits = [
  {
    icon: Heart,
    title: "Supports Heart Health",
    description: "Rich in monounsaturated fatty acids that promote cardiovascular wellness and help reduce bad cholesterol levels naturally.",
  },
  {
    icon: Sparkles,
    title: "Radiant Skin & Hair",
    description: "Natural vitamin E nourishes from within, providing a healthy glow and strength — a beauty ritual trusted for generations.",
  },
  {
    icon: Shield,
    title: "Naturally Antimicrobial",
    description: "Inherent antibacterial properties help fortify your body's natural defences and support overall immunity.",
  },
  {
    icon: Leaf,
    title: "Aids Healthy Digestion",
    description: "Natural compounds stimulate digestive enzymes, supporting a healthy metabolism and better nutrient absorption.",
  },
  {
    icon: Flame,
    title: "High Smoke Point",
    description: "Engineered by nature for Indian cooking — ideal for deep frying, tadka, and high-heat preparations without losing nutrition.",
  },
  {
    icon: Droplet,
    title: "Omega-3 Rich",
    description: "Essential fatty acids that support brain function, reduce inflammation, and contribute to long-term wellness.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-36 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Warm decorative glows */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.25em] text-xs">
            Wellness Benefits
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5">
            Nature's Most Powerful{" "}
            <span className="text-primary">Kitchen Oil</span>
          </h2>
          <p className="text-secondary-foreground/75 text-lg leading-relaxed">
            For centuries, mustard oil has been the cornerstone of Indian wellness —
            from the kitchen to traditional healing practices.
          </p>
          <div className="heritage-divider max-w-xs mx-auto mt-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <StaggerItem key={index} className="h-full">
              <HoverScale className="h-full">
                <div className="h-full flex flex-col group bg-secondary-foreground/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-secondary-foreground/10 hover:border-primary/40 transition-all duration-500 hover:bg-secondary-foreground/8">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/15 mb-5 group-hover:bg-primary/25 transition-colors flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-foreground/65 leading-relaxed text-base">
                    {benefit.description}
                  </p>
                </div>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default BenefitsSection;
