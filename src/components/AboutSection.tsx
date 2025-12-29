import kachiGhaniProcess from "@/assets/kachi-ghani-process.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={kachiGhaniProcess}
                alt="Traditional Kachi Ghani oil extraction process"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-glow">
              <p className="text-primary-foreground font-display text-4xl font-bold">35+</p>
              <p className="text-primary-foreground/80 text-sm">Years of Trust</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Heritage</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              A Legacy of
              <span className="text-primary"> Purity & Trust</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Since 1989, Double Hathi has been synonymous with pure, authentic Kachi Ghani mustard oil. 
                Our journey began with a simple vision – to bring the traditional goodness of cold-pressed 
                oil to every Indian household.
              </p>
              <p>
                The name "Double Hathi" (Double Elephant) symbolizes <strong className="text-foreground">strength, purity, 
                and endurance</strong> – values that have guided us for over three decades. Every drop of our 
                oil carries the essence of this commitment.
              </p>
              <p>
                Our Kachi Ghani method uses traditional wooden presses that extract oil at low temperatures, 
                preserving all natural nutrients, aroma, and the distinctive pungent flavor that makes 
                mustard oil irreplaceable in Indian cooking.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { title: "Cold Pressed", desc: "Traditional Kachi Ghani method" },
                { title: "No Chemicals", desc: "Zero additives or preservatives" },
                { title: "Rich Aroma", desc: "Authentic pungent mustard taste" },
                { title: "Family Owned", desc: "Three generations of expertise" },
              ].map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-4 border border-border">
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
