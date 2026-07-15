import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { useState, useEffect } from "react";

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
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const current = testimonials[active];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % total), 6000);
    return () => clearInterval(id);
  }, [paused, total]);

  const go = (dir: 1 | -1) => setActive((i) => (i + dir + total) % total);

  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden bg-[hsl(var(--background))]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Warm stage backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />
        <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[520px] h-[520px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <FadeIn className="max-w-3xl mb-14 md:mb-20">
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-[0.28em]">
            — Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 leading-[1.05]">
            Trusted at the tables of
            <span className="text-primary italic"> Indian families.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-5 max-w-xl">
            Three generations of loyal households — real voices from real kitchens.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Featured quote */}
          <div className="lg:col-span-8 relative">
            {/* Oversized decorative quote mark */}
            <div
              aria-hidden
              className="absolute -top-10 -left-2 md:-top-16 md:-left-6 font-display text-primary/15 select-none pointer-events-none"
              style={{ fontSize: "clamp(9rem, 18vw, 16rem)", lineHeight: 1 }}
            >
              “
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-1.5 mb-6">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="font-display text-2xl md:text-[2.1rem] lg:text-[2.4rem] leading-[1.35] text-foreground font-medium">
                    {current.text}
                  </blockquote>

                  <div className="mt-10 flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg ring-4 ring-background">
                      <span className="text-primary-foreground font-bold text-lg">
                        {current.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg leading-tight">
                        {current.name}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5 tracking-wide">
                        {current.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-12 flex items-center gap-5">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="ml-2 text-sm text-muted-foreground tabular-nums tracking-widest">
                <span className="text-foreground font-semibold">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="mx-2 text-muted-foreground/50">/</span>
                {String(total).padStart(2, "0")}
              </div>
              {/* Progress rail */}
              <div className="flex-1 h-px bg-border relative overflow-hidden ml-3">
                <motion.div
                  key={active + (paused ? "-p" : "")}
                  initial={{ width: "0%" }}
                  animate={{ width: paused ? "0%" : "100%" }}
                  transition={{ duration: paused ? 0 : 6, ease: "linear" }}
                  className="absolute top-0 left-0 h-full bg-primary"
                />
              </div>
            </div>
          </div>

          {/* Voice rail */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Voices from our kitchens
            </p>
            <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1 scrollbar-hide">
              {testimonials.map((t, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-full text-left flex items-center gap-4 p-3 rounded-xl transition-all duration-300 border ${
                      isActive
                        ? "border-primary/40 bg-primary/5 shadow-sm"
                        : "border-transparent hover:border-border hover:bg-secondary/40"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isActive
                          ? "bg-gold-gradient shadow-md"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      <span
                        className={`font-bold ${
                          isActive ? "text-primary-foreground" : "text-foreground/70"
                        }`}
                      >
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-sm font-semibold truncate ${
                          isActive ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {t.location}
                      </p>
                    </div>
                    {isActive && (
                      <span className="text-primary text-lg leading-none">→</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
