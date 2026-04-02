import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const cookingUses = [
  { emoji: "🍳", title: "Deep Frying", description: "High smoke point makes it perfect for crispy pakoras & puris" },
  { emoji: "🥘", title: "Tadka & Tempering", description: "Adds signature pungent aroma to dals and curries" },
  { emoji: "🫙", title: "Pickling (Achaar)", description: "The traditional choice for long-lasting, flavorful pickles" },
  { emoji: "🥗", title: "Salad Dressing", description: "Raw drizzle adds a sharp, earthy kick to fresh salads" },
  { emoji: "💆", title: "Body & Hair Massage", description: "Warm oil massage for strong bones, joints & shiny hair" },
  { emoji: "🫕", title: "Everyday Cooking", description: "Enhances taste of sabzis, parathas & all home-cooked meals" },
];

const CookingUses = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-14 md:mb-18">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Versatile & Essential
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
            How Families Use It Daily
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            From kitchen staple to wellness ritual — Double Hathi fits every need.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7 max-w-4xl mx-auto">
          {cookingUses.map((use, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 30px -8px hsl(var(--primary) / 0.15)" }}
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
