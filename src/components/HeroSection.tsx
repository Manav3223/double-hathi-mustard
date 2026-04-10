import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

import heroImg1 from "@/assets/hero-carousel-1.jpg";
import heroImg2 from "@/assets/hero-carousel-2.jpg";
import heroImg3 from "@/assets/hero-carousel-3.jpg";
import heroImg4 from "@/assets/hero-carousel-4.jpg";

const slides = [heroImg1, heroImg2, heroImg3, heroImg4];
const INTERVAL = 6000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.5 }, scale: { duration: 12, ease: "linear" } }}
          >
            <img
              src={slides[current]}
              alt=""
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          </motion.div>
        </AnimatePresence>

        {/* Light warm overlays — keeps images visible */}
        <div className="absolute inset-0 bg-amber-100/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/65" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-mustard" : "w-2 bg-cream/40 hover:bg-cream/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-md border border-cream/20 rounded-full px-5 py-2.5 mb-8 my-[15px]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-mustard animate-pulse shadow-[0_0_10px_hsl(var(--mustard))]" />
            <span className="text-cream/90 text-sm font-medium tracking-wide">Trusted Since 1989</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-shadow-hero text-shimmer inline-block text-[#f0d175]">
              Double Hathi
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block mt-2 text-mustard-light text-shadow-hero"
            >
              Pure Kachi Ghani
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-4 font-normal text-cream text-shadow-soft"
            >
              Mustard Oil
            </motion.span>

            {/* Decorative accent lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex items-center justify-center gap-3 mt-6 mb-2"
            >
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-mustard" />
              <span className="w-2 h-2 rounded-full bg-mustard shadow-[0_0_8px_hsl(var(--mustard))]" />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-mustard" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="block text-sm sm:text-lg md:text-2xl mt-4 font-bold text-mustard bg-mustard/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 inline-block border border-mustard/20 max-w-[95vw]"
            >
              "Sehat ka Mazboot Saathi - Shuddh Kachi Ghani"
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-base md:text-xl lg:text-2xl text-cream/85 max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed text-shadow-soft px-2"
          >
            Experience the authentic taste and purity of Kachi Ghani mustard oil,
            crafted with traditional methods passed down through generations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a href="#products" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
              <span className="absolute inset-0 rounded-xl bg-mustard/40 blur-xl animate-pulse-glow" />
              <Button variant="hero" size="xl" className="relative min-w-[180px] shadow-2xl">
                Shop Now
              </Button>
            </motion.a>
            <motion.a href="#benefits" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero-outline" size="xl" className="min-w-[180px]">
                Learn More
              </Button>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="grid grid-cols-3 gap-3 md:gap-8 mt-12 md:mt-20 max-w-3xl mx-auto"
          >
            {[
              { value: "35+", label: "Years Legacy" },
              { value: "100%", label: "Pure & Natural" },
              { value: "2.5M+", label: "Happy Families" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(42 85% 45% / 0.25)" }}
                className={`text-center p-4 md:p-6 rounded-2xl bg-cream/8 backdrop-blur-md border border-cream/15 transition-all duration-300 ${
                  index === 1 ? "border-x border-cream/25" : ""
                }`}
              >
                <p className="text-3xl md:text-5xl font-display font-bold text-mustard-light drop-shadow-lg text-shadow-hero">
                  {stat.value}
                </p>
                <p className="text-cream/75 text-sm md:text-base mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="text-cream/60 hover:text-cream transition-colors block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={32} strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
