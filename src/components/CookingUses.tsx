import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const cookingUses = [
  { emoji: "🍳", title: "Deep Frying", description: "High smoke point for perfectly crispy pakoras, puris & kachoris" },
  { emoji: "🥘", title: "Tadka & Tempering", description: "The signature pungent aroma that defines authentic Indian dals" },
  { emoji: "🫙", title: "Pickling (Achaar)", description: "The gold standard for long-lasting, flavour-rich traditional pickles" },
  { emoji: "🥗", title: "Salad Dressing", description: "A raw drizzle adds bold, earthy character to fresh preparations" },
  { emoji: "💆", title: "Wellness Massage", description: "Warm oil therapy for strong bones, supple joints & lustrous hair" },
  { emoji: "🫕", title: "Everyday Cooking", description: "Elevates sabzis, parathas & every home-cooked meal effortlessly" },
];

const CookingUses = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden texture-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-14 md:mb-18">
          <span className="text-primary font-bold tracking-[0.25em] uppercase text-xs">
            Versatile & Essential
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
            A Kitchen Essential for{" "}
            <span className="text-primary">Every Meal</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            From daily cooking to age-old wellness rituals — one oil, countless possibilities.
          </p>
          <div className="heritage-divider max-w-xs mx-auto mt-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7 max-w-4xl mx-auto">
          {cookingUses.map((use, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 30px -8px hsl(var(--primary) / 0.12)" }}
                className="h-full bg-card rounded-2xl p-6 md:p-8 text-center border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <span className="text-4xl md:text-5xl block mb-4">{use.emoji}</span>
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                  {use.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {use.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CookingUses;
