import { Button } from "@/components/ui/button";
import heroPour from "@/assets/hero-pour.jpg";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroPour}
          alt="Pure golden mustard oil pouring"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-foreground/65" />
        {/* Warm amber tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/80" />
        <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply" />
      </div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[2, 3, 1.5, 4, 2.5, 3.5].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size * 4,
              height: size * 4,
              background: `radial-gradient(circle, hsl(var(--mustard) / 0.5) 0%, transparent 70%)`,
              boxShadow: `0 0 ${size * 6}px hsl(var(--mustard) / 0.25)`,
            }}
            initial={{ x: `${15 + i * 15}%`, y: "110%", opacity: 0.3 }}
            animate={{ y: "-10%", opacity: [0.15, 0.5, 0.15] }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear",
            }}
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-md border border-cream/20 rounded-full px-5 py-2.5 mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-mustard animate-pulse shadow-[0_0_10px_hsl(var(--mustard))]" />
            <span className="text-cream/90 text-sm font-medium tracking-wide">
              Trusted Since 1989
            </span>
          </motion.div>

          {/* Main Heading — bold and large */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]"
          >
            <span className="text-shimmer inline-block text-[#f0d175] text-shadow-hero">
              Double Hathi
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="block mt-2 text-mustard-light text-shadow-hero"
            >
              Pure Kachi Ghani
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 font-normal text-cream text-shadow-soft"
            >
              Mustard Oil
            </motion.span>
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-3 mt-6 mb-4"
          >
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-mustard" />
            <span className="w-2 h-2 rounded-full bg-mustard shadow-[0_0_8px_hsl(var(--mustard))]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-mustard" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-sm sm:text-lg md:text-xl font-bold text-mustard bg-mustard/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 inline-block border border-mustard/20"
          >
            "Sehat ka Mazboot Saathi — Shuddh Kachi Ghani"
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-base md:text-lg lg:text-xl text-cream/80 max-w-2xl mx-auto mt-6 mb-10 font-light leading-relaxed text-shadow-soft"
          >
            Experience the authentic taste and purity of Kachi Ghani mustard oil,
            crafted with traditional methods passed down through generations.
          </motion.p>

          {/* Two CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative"
            >
              <span className="absolute inset-0 rounded-xl bg-mustard/40 blur-xl animate-pulse-glow" />
              <Button variant="hero" size="xl" className="relative min-w-[200px] shadow-2xl text-base">
                Shop Now
              </Button>
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button variant="hero-outline" size="xl" className="min-w-[200px] text-base">
                Our Story
              </Button>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="grid grid-cols-3 gap-3 md:gap-8 mt-14 md:mt-20 max-w-3xl mx-auto"
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
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 md:p-6 rounded-2xl bg-cream/8 backdrop-blur-md border border-cream/15"
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
          transition={{ duration: 0.6, delay: 2 }}
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
