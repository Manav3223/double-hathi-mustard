import { Heart, Sparkles, Shield, Leaf, Flame, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";

const benefits = [
  {
    icon: Heart,
    title: "Supports Heart Health",
    description:
      "Rich in monounsaturated fatty acids that promote cardiovascular health and reduce bad cholesterol.",
  },
  {
    icon: Sparkles,
    title: "Glowing Skin",
    description:
      "Natural vitamin E content nourishes skin, providing a natural glow and reducing signs of aging.",
  },
  {
    icon: Shield,
    title: "Naturally Antimicrobial",
    description:
      "Natural antibacterial properties help fight infections and boost your body's natural immunity.",
  },
  {
    icon: Leaf,
    title: "Aids Healthy Digestion",
    description:
      "Natural compounds in mustard oil help stimulate digestive enzymes and improve metabolism.",
  },
  {
    icon: Flame,
    title: "High Smoke Point",
    description:
      "Perfect for Indian cooking methods like deep frying, tempering, and making pickles.",
  },
  {
    icon: Droplet,
    title: "Rich in Omega-3 & Good Fats",
    description:
      "Essential fatty acids that support brain function, reduce inflammation, and improve overall health.",
  },
];

const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="py-24 md:py-36 bg-secondary text-secondary-foreground relative overflow-hidden"
    >
      {/* Enhanced Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-mustard/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-mustard/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-mustard-light font-semibold uppercase tracking-[0.2em] text-sm">
            Health Benefits
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5">
            Nature's Gift of
            <span className="text-mustard-light"> Wellness</span>
          </h2>
          <p className="text-secondary-foreground/80 text-lg leading-relaxed">
            Mustard oil has been used in Indian households for centuries, not just
            for cooking but for its remarkable health benefits.
          </p>
        </FadeIn>

        {/* Benefits Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <HoverScale>
                <div className="h-full group bg-secondary-foreground/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-secondary-foreground/10 hover:border-mustard/50 transition-all duration-500 hover:bg-secondary-foreground/10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-mustard/20 mb-5 group-hover:bg-mustard/30 transition-colors flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <benefit.icon className="w-8 h-8 text-mustard-light" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-foreground/70 leading-relaxed text-base">
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
