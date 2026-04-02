import kachiGhaniProcess from "@/assets/kachi-ghani-process-3.png";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";

const AboutSection = () => {
  const features = [
    { title: "Wood Pressed", desc: "Traditional Kachi Ghani cold-press extraction" },
    { title: "Commitment to Purity", desc: "Rigorous quality checks at every stage" },
    { title: "Millions Trust Us", desc: "Chosen by families across generations" },
    { title: "FSSAI Certified", desc: "Government-approved quality & safety" },
    { title: "Zero Chemicals", desc: "No additives. No preservatives. Ever." },
    { title: "Family Legacy", desc: "Proudly family-owned since 1989" },
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-background overflow-hidden texture-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn direction="left" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <motion.img
                src={kachiGhaniProcess}
                alt="Traditional Kachi Ghani oil extraction process"
                className="w-full h-[400px] lg:h-[550px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
            </div>

            {/* Heritage Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 right-2 md:-right-6 bg-secondary rounded-2xl p-5 md:p-8 shadow-premium border border-primary/20"
            >
              <p className="text-secondary-foreground font-display text-4xl md:text-5xl font-bold">35+</p>
              <p className="text-secondary-foreground/70 text-sm md:text-base mt-1 font-medium">Years of Heritage</p>
            </motion.div>

            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.2}>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.25em]">Our Heritage</span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-8 leading-tight text-left">
              A Legacy Built on
              <span className="text-primary block mt-1">Purity & Tradition</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Since 1989, <strong className="text-foreground">Double Hathi</strong> has stood as a symbol of
                uncompromising quality in every drop of mustard oil. What began as a
                family's commitment to authentic Kachi Ghani extraction has grown into
                one of India's most trusted oil brands.
              </p>
              <p>
                The name "Double Hathi" embodies{" "}
                <strong className="text-foreground font-semibold">
                  strength, endurance, and unwavering trust
                </strong>{" "}
                — the same values that drive our production process today,
                where traditional wooden presses work alongside modern hygiene-controlled facilities.
              </p>
              <p className="font-accent text-xl italic text-primary/80">
                Every bottle carries forward a promise — pure mustard oil, extracted
                at low temperatures, preserving nature's nutrients exactly as intended.
              </p>
            </div>

            {/* Features Grid */}
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {features.map((feature, index) => (
                <StaggerItem key={index} className="h-full">
                  <HoverScale scale={1.02} className="h-full">
                    <div className="rounded-xl p-4 md:p-5 border border-border bg-card hover:border-primary/40 transition-colors duration-300 h-full flex flex-col items-center justify-center">
                      <h4 className="text-center font-bold text-base md:text-lg text-foreground">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground text-center">
                        {feature.desc}
                      </p>
                    </div>
                  </HoverScale>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
