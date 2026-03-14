import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sunita Sharma",
    location: "Patna, Bihar",
    text: "We have been using Double Hathi oil for over 15 years. The taste and purity are unmatched. It reminds me of the oil my grandmother used to use.",
    rating: 5,
  },
  {
    name: "Rajesh Gupta",
    location: "Kolkata, West Bengal",
    text: "The authentic aroma of Kachi Ghani oil is what makes our parathas special. My whole family loves the rich flavor Double Hathi brings to our food.",
    rating: 5,
  },
  {
    name: "Meera Patel",
    location: "Raipur, Chhattisgarh",
    text: "I tried many brands but always came back to Double Hathi. It's pure, healthy, and the quality has remained consistent for decades.",
    rating: 5,
  },
  {
    name: "Amit Kumar Singh",
    location: "Ranchi, Jharkhand",
    text: "Double Hathi mustard oil has a rich golden color and perfect pungency. Our family has trusted this brand for three generations now.",
    rating: 5,
  },
  {
    name: "Priya Das",
    location: "Bhubaneswar, Odisha",
    text: "The achar I make with Double Hathi oil lasts the entire year without losing its taste. No other oil comes close to this quality.",
    rating: 5,
  },
  {
    name: "Ravi Shankar Mishra",
    location: "Muzaffarpur, Bihar",
    text: "In our village, every household uses Double Hathi. The oil is so pure that you can smell the mustard seeds in it. Truly Kachi Ghani!",
    rating: 5,
  },
  {
    name: "Ananya Chatterjee",
    location: "Howrah, West Bengal",
    text: "Bengali cooking without good mustard oil is incomplete. Double Hathi gives our fish curry and shorshe ilish the perfect authentic flavor.",
    rating: 5,
  },
  {
    name: "Deepak Sahu",
    location: "Bilaspur, Chhattisgarh",
    text: "I switched to Double Hathi two years ago on a friend's recommendation. The purity and freshness of this oil is unbeatable.",
    rating: 5,
  },
  {
    name: "Mamta Oraon",
    location: "Jamshedpur, Jharkhand",
    text: "We use Double Hathi for everything — cooking, massaging babies, even home remedies. It's a part of our daily life and we trust it completely.",
    rating: 5,
  },
  {
    name: "Suresh Pradhan",
    location: "Cuttack, Odisha",
    text: "The quality of Double Hathi mustard oil is exceptional. My wife insists on using only this brand for our family's meals. Pure and natural!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    // Calculate active index based on scroll position
    const cardWidth = 360 + 24; // min-w + gap
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, testimonials.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 370, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const scrollToIndex = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 360 + 24;
    el.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-5">
            Loved by
            <span className="text-primary"> Families</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Generations of Indian households trust Double Hathi for their daily cooking needs.
          </p>
        </FadeIn>

        {/* Scrollable container */}
        <div className="relative">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="min-w-[calc(100vw-4rem)] sm:min-w-[300px] md:min-w-[360px] snap-start flex-shrink-0"
              >
                <div className="h-full relative rounded-2xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all duration-500 bg-background">
                  <div className="absolute -top-4 left-8">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Quote className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex gap-1 mb-5 pt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-8 text-base italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center shadow-md">
                      <span className="text-primary-foreground font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-primary scale-125 shadow-glow"
                  : "bg-border hover:bg-primary/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
