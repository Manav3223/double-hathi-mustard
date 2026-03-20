import { Droplet, Wind, FlaskConical, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const reasons = [
  {
    icon: Droplet,
    title: "Cold Pressed Extraction",
    description: "Oil is extracted at low temperature using wooden presses. No heat treatment, no refining. Nutrients stay intact.",
  },
  {
    icon: Wind,
    title: "Strong Natural Aroma",
    description: "You can smell the difference. Our oil has the sharp, pungent aroma that real Kachi Ghani oil is known for.",
  },
  {
    icon: FlaskConical,
    title: "No Chemicals or Mixing",
    description: "Zero additives. Zero blending with cheaper oils. What you get is 100% pure mustard oil — nothing else.",
  },
  {
    icon: BarChart3,
    title: "Consistent Quality Batches",
    description: "Every batch goes through strict quality checks. Same purity, same taste, same trust — every single time.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-14">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Why Double Hathi
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">
            What Makes Our Oil Different
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            No marketing gimmicks. Just real quality you can see, smell, and taste.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <div className="h-full bg-card rounded-2xl p-7 border border-border hover:border-primary/30 transition-colors duration-300">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5"
                  whileHover={{ rotate: 5 }}
                >
                  <reason.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseSection;
