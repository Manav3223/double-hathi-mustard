import { Heart, Sparkles, Shield, Leaf, Flame, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const benefits = [
  {
    icon: Heart,
    title: "Good for Your Heart",
    description: "Contains monounsaturated fats that help lower bad cholesterol when used as your main cooking oil.",
  },
  {
    icon: Sparkles,
    title: "Better Skin & Hair",
    description: "Natural vitamin E nourishes skin and strengthens hair. Families have used it for oil massage for generations.",
  },
  {
    icon: Shield,
    title: "Fights Infections Naturally",
    description: "Mustard oil has natural antibacterial properties. It's been used in home remedies across India for decades.",
  },
  {
    icon: Leaf,
    title: "Helps with Digestion",
    description: "Stimulates bile and digestive juices. A spoon of mustard oil in your meal can help improve metabolism.",
  },
  {
    icon: Flame,
    title: "Ideal for Indian Cooking",
    description: "High smoke point makes it perfect for deep frying, tadka, pickling, and all traditional cooking methods.",
  },
  {
    icon: Droplet,
    title: "Rich in Omega-3",
    description: "Essential fatty acids your body needs. Supports brain function and reduces inflammation over time.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-mustard-light font-semibold uppercase tracking-[0.2em] text-sm">
            Health Benefits
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Why Families Choose <span className="text-mustard-light">Mustard Oil</span>
          </h2>
          <p className="text-secondary-foreground/75 text-base leading-relaxed">
            Used in Indian kitchens for centuries — not just for taste, but for real health benefits you can feel.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <StaggerItem key={index} className="h-full">
              <div className="h-full flex flex-col group bg-secondary-foreground/5 rounded-xl p-6 border border-secondary-foreground/10 hover:border-mustard/40 transition-colors duration-300">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-mustard/15 mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 10 }}
                >
                  <benefit.icon className="w-6 h-6 text-mustard-light" />
                </motion.div>
                <h3 className="font-display font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-secondary-foreground/65 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default BenefitsSection;
