import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sunita Sharma",
    location: "Delhi",
    text: "We have been using Double Hathi oil for over 15 years. The taste and purity are unmatched. It reminds me of the oil my grandmother used to use.",
    rating: 5,
  },
  {
    name: "Rajesh Gupta",
    location: "Lucknow",
    text: "The authentic aroma of Kachi Ghani oil is what makes our parathas special. My whole family loves the rich flavor Double Hathi brings to our food.",
    rating: 5,
  },
  {
    name: "Meera Patel",
    location: "Ahmedabad",
    text: "I tried many brands but always came back to Double Hathi. It's pure, healthy, and the quality has remained consistent for decades.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Loved by
            <span className="text-primary"> Families</span>
          </h2>
          <p className="text-muted-foreground">
            Generations of Indian households trust Double Hathi for their daily cooking needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-card animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
