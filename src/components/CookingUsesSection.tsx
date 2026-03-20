import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const uses = [
  {
    emoji: "🥘",
    title: "Daily Cooking",
    description: "The go-to oil for sabzi, dal, and everyday Indian meals.",
  },
  {
    emoji: "🍳",
    title: "Deep Frying",
    description: "High smoke point makes it perfect for crispy pakoras and puris.",
  },
  {
    emoji: "🫙",
    title: "Pickling (Achaar)",
    description: "Mustard oil is the base of every authentic Indian pickle.",
  },
  {
    emoji: "🌶️",
    title: "Tadka & Tempering",
    description: "The sharp aroma elevates every tadka and seasoning.",
  },
  {
    emoji: "💆",
    title: "Body & Hair Massage",
    description: "Warm mustard oil massage is a generations-old family tradition.",
  },
  {
    emoji: "🥗",
    title: "Salad Dressings",
    description: "A drizzle adds bold, pungent flavour to fresh salads and chutneys.",
  },
];

const CookingUsesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-14">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Everyday Uses
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">
            One Oil, Many Uses
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            From the kitchen to the medicine cabinet — mustard oil does it all.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {uses.map((use, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <span className="text-3xl shrink-0">{use.emoji}</span>
                <div>
                  <h3 className="font-display font-bold text-foreground text-base mb-1">
                    {use.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {use.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CookingUsesSection;
