import { Shield, Leaf, Award, Heart, Clock, ThumbsUp } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "100% Pure & Natural",
      description: "No additives, preservatives, or chemicals. Just pure mustard oil extracted the traditional way."
    },
    {
      icon: Leaf,
      title: "Kachi Ghani Process",
      description: "Cold-pressed extraction preserves all natural nutrients, aroma, and authentic taste."
    },
    {
      icon: Award,
      title: "FSSAI Certified",
      description: "Government certified for quality and safety standards you can trust."
    },
    {
      icon: Heart,
      title: "Heart Healthy",
      description: "Rich in Omega-3 fatty acids and low in saturated fats for cardiovascular wellness."
    },
    {
      icon: Clock,
      title: "35+ Years Legacy",
      description: "Trusted by generations of Indian families since 1989 for authentic taste."
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "Thousands of happy customers across India trust Double Hathi for their daily cooking."
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            The Double Hathi Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Why Choose Double Hathi?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover what makes Double Hathi the preferred choice for health-conscious families across India.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
