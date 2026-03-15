import kachiGhaniProcess from "@/assets/kachi-ghani-process-3.png";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";
const AboutSection = () => {
  const features = [{
    title: "Cold Pressed / Wood Pressed",
    desc: "Wood pressed. Traditional Kachi Ghani extraction"
  }, {
    title: "Commitment to Purity",
    desc: "Strict quality checks ensure every batch meets high standards."
  }, {
    title: "Trusted by Millions of Families",
    desc: "Used daily in kitchens across generations."
  }, {
    title: "FSSAI Certified",
    desc: "Quality assured. Safe for everyday cooking"
  }, {
    title: "No Chemicals",
    desc: "No additives. No preservatives"
  }, {
    title: "Family Owned",
    desc: "Family owned. Crafting pure mustard oil since 1989"
  }];
  return <section id="about" className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <FadeIn direction="left" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.img src={kachiGhaniProcess} alt="Traditional Kachi Ghani oil extraction process" className="w-full h-[400px] lg:h-[550px] object-cover" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.6
            }} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.8,
            x: 20
          }} whileInView={{
            opacity: 1,
            scale: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="absolute -bottom-6 -right-4 md:-right-8 bg-primary rounded-2xl p-6 md:p-8 shadow-2xl">
              <p className="text-primary-foreground font-display text-4xl md:text-5xl font-bold">
                35+
              </p>
              <p className="text-primary-foreground/80 text-sm md:text-base mt-1">
                Years of Trust
              </p>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-3xl -z-10" />
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.2}>
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
              Our Heritage
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-8 leading-tight text-left">
              A Legacy of
              <span className="text-primary block mt-1 text-justify">Purity & Trust</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Since 1989, Double Hathi has been synonymous with pure, authentic
                Kachi Ghani mustard oil. Our journey began with a simple vision – to
                bring the traditional goodness of cold-pressed oil to every Indian
                household.
              </p>
              <p>
                The name "Double Hathi" (Double Elephant) symbolizes{" "}
                <strong className="text-foreground font-semibold">
                  strength, purity, and endurance
                </strong>{" "}
                – values that have guided us for over three decades.
              </p>
              <p>Our Kachi Ghani method uses traditional wooden presses that extract oil at low temperatures, preserving all natural nutrients, aroma, and the distinctive pungent flavor.</p>
            </div>

            {/* Features Grid */}
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {features.map((feature, index) => <StaggerItem key={index} className="h-full">
                  <HoverScale scale={1.02} className="h-full">
                    <div className="rounded-xl p-4 md:p-5 border border-border bg-secondary hover:border-primary/50 transition-colors duration-300 h-full flex flex-col items-center justify-center">
                      <h4 className="text-center font-bold text-lg md:text-xl text-mustard-light">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-sm text-secondary-foreground/80 text-center">
                        {feature.desc}
                      </p>
                    </div>
                  </HoverScale>
                </StaggerItem>)}
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>;
};
export default AboutSection;