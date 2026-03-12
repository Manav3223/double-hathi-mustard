import { Utensils, Leaf, Award, FlaskConical, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Utensils,
      title: "Consistent Taste & Aroma",
      description:
        "Traditional Kachchi Ghani extraction preserves the natural flavor and aroma of mustard seeds.",
    },
    {
      icon: Leaf,
      title: "Traditional Kachchi Ghani Process",
      description:
        "Cold-pressed extraction preserves all natural nutrients, aroma, and authentic taste.",
    },
    {
      icon: Award,
      title: "FSSAI Certified Quality",
      description:
        "Government certified for quality and safety standards you can trust.",
    },
    {
      icon: Heart,
      title: "Strict Purity Testing",
      description:
        "Each batch undergoes quality checks to ensure purity, authenticity, and consistent taste.",
    },
    {
      icon: Clock,
      title: "35+ Years Legacy",
      description:
        "Trusted by generations of Indian families since 1989 for authentic taste.",
    },
    {
      icon: ThumbsUp,
      title: "Trusted by Millions of Families",
      description:
        "Millions of happy customers across India trust Double Hathi for their daily cooking.",
    },
  ];

  return (
    <section id="why-choose" className="py-24 md:py-36 bg-cream/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            The Double Hathi Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5 text-foreground">
            Why Choose Double Hathi?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Discover what makes Double Hathi the preferred choice for
            health-conscious families across India.
          </p>
        </FadeIn>

        {/* Reasons Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <HoverScale>
                <div className="h-full bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-primary/30">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <reason.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
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
