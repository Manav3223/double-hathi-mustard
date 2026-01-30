import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";

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
    <section className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-5">
            Loved by
            <span className="text-primary"> Families</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Generations of Indian households trust Double Hathi for their daily
            cooking needs.
          </p>
        </FadeIn>

        {/* Testimonials Grid */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <HoverScale scale={1.02}>
                <div className="h-full relative rounded-2xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all duration-500 bg-background">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Quote className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5 pt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground/80 leading-relaxed mb-8 text-base italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center shadow-md">
                      <span className="text-primary-foreground font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
