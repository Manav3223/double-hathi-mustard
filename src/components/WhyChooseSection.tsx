import { Shield, Leaf, Award, Heart, Clock, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Uncompromising Purity",
      description: "No additives, no preservatives, no shortcuts. Every batch undergoes strict quality control before it reaches your kitchen.",
    },
    {
      icon: Leaf,
      title: "Traditional Kachi Ghani",
      description: "Cold-pressed using heritage wooden presses that preserve the oil's natural aroma, nutrients, and authentic pungent character.",
    },
    {
      icon: Award,
      title: "FSSAI Certified Quality",
      description: "Government-certified facility with modern hygiene standards ensuring every drop meets the highest food safety benchmarks.",
    },
    {
      icon: Heart,
      title: "Heart-Healthy Choice",
      description: "Naturally rich in Omega-3 fatty acids and MUFA — the good fats that support cardiovascular wellness every day.",
    },
    {
      icon: Clock,
      title: "35+ Years of Trust",
      description: "Three decades of consistent quality has made Double Hathi the preferred choice for millions of Indian households.",
    },
    {
      icon: ThumbsUp,
      title: "Large-Scale Distribution",
      description: "From our state-of-the-art facility in Bharatpur to homes across India — reliable supply you can count on.",
    },
  ];

  return (
    <section id="why-choose" className="py-24 md:py-36 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-[0.25em] uppercase text-xs">
            The Double Hathi Difference
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-4 mb-5 text-foreground md:text-5xl">
            Why India Chooses{" "}
            <span className="text-primary">Double Hathi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Where heritage meets hygiene — discover what sets us apart in the world of premium edible oils.
          </p>
          <div className="heritage-divider max-w-xs mx-auto mt-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
          </div>
        </FadeIn>

        {/* Reasons Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <HoverScale>
                <div className="h-full bg-background rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-500 group border border-transparent hover:border-primary/25">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <reason.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {reason.description}
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

export default WhyChooseSection;
