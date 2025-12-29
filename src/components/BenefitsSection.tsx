import { Heart, Sparkles, Shield, Leaf, Flame, Droplet } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Heart Healthy",
    description: "Rich in monounsaturated fatty acids that promote cardiovascular health and reduce bad cholesterol.",
  },
  {
    icon: Sparkles,
    title: "Glowing Skin",
    description: "Natural vitamin E content nourishes skin, providing a natural glow and reducing signs of aging.",
  },
  {
    icon: Shield,
    title: "Antimicrobial",
    description: "Natural antibacterial properties help fight infections and boost your body's natural immunity.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure cold-pressed oil with no chemicals, preservatives, or artificial additives.",
  },
  {
    icon: Flame,
    title: "High Smoke Point",
    description: "Perfect for Indian cooking methods like deep frying, tempering, and making pickles.",
  },
  {
    icon: Droplet,
    title: "Rich in Omega-3",
    description: "Essential fatty acids that support brain function, reduce inflammation, and improve overall health.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mustard/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mustard/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-mustard-light font-medium text-sm uppercase tracking-widest">
            Health Benefits
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Nature's Gift of
            <span className="text-mustard-light"> Wellness</span>
          </h2>
          <p className="text-secondary-foreground/80">
            Mustard oil has been used in Indian households for centuries, 
            not just for cooking but for its remarkable health benefits.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-secondary-foreground/10 hover:border-mustard/50 transition-all duration-300 animate-fade-up hover:bg-secondary-foreground/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-mustard/20 flex items-center justify-center mb-4 group-hover:bg-mustard/30 transition-colors">
                <benefit.icon className="w-7 h-7 text-mustard-light" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">
                {benefit.title}
              </h3>
              <p className="text-secondary-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
