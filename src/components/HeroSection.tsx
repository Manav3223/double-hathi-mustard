import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => setShowVideo(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setShowVideo(true);
    }
  }, [isMobile]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Fallback Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 1 }}
          animate={{ scale: 1, opacity: videoLoaded && !videoError ? 0 : 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        <AnimatePresence>
          {!videoLoaded && !videoError && showVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-foreground/60 backdrop-blur-sm rounded-full px-4 py-2"
            >
              <div className="w-3 h-3 border-2 border-mustard border-t-transparent rounded-full animate-spin" />
              <span className="text-cream/80 text-xs font-medium">Loading video…</span>
            </motion.div>
          )}
        </AnimatePresence>

        {showVideo && !videoError && (
          <motion.video
            ref={videoRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: videoLoaded ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onEnded={(e) => { e.currentTarget.currentTime = 0; e.currentTarget.play(); }}
            onError={() => setVideoError(true)}
          >
            <source src={heroVideo} type="video/mp4" />
          </motion.video>
        )}

        {/* Premium warm overlays */}
        <div className="absolute inset-0 bg-amber-900/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-foreground/55 to-foreground/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 via-transparent to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Heritage Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-cream/8 backdrop-blur-md border border-cream/15 rounded-full px-6 py-3 mb-8 my-[15px]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" />
            <span className="text-cream/90 text-sm font-semibold tracking-[0.15em] uppercase">
              Crafting Purity Since 1989
            </span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" />
          </motion.div>

          {/* Main Heading — Premium FMCG style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
          >
            <span className="text-shadow-hero text-shimmer inline-block text-[#e8c66a]">
              Double Hathi
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block mt-3 text-cream text-shadow-soft font-accent font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic tracking-wide"
            >
              Pure Kachi Ghani
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 font-semibold text-primary text-shadow-hero tracking-wider uppercase"
            >
              Mustard Oil
            </motion.span>

            {/* Heritage accent divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex items-center justify-center gap-3 mt-8 mb-3"
            >
              <span className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="w-3 h-3 rounded-full border border-primary/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="block text-sm sm:text-base md:text-xl mt-4 font-accent font-medium text-mustard-light italic tracking-wide max-w-[95vw]"
            >
              "Sehat ka Mazboot Saathi — Shuddh Kachi Ghani"
            </motion.span>
          </motion.h1>

          {/* Subtitle — Elevated copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-base md:text-lg lg:text-xl text-cream/80 max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed text-shadow-soft px-2"
          >
            Three decades of uncompromising purity. Traditional wood-pressed extraction
            meets modern hygiene standards — delivering the authentic taste millions of
            Indian families trust every day.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a href="#products" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
              <span className="absolute inset-0 rounded-xl bg-primary/30 blur-xl animate-pulse-glow" />
              <Button variant="hero" size="xl" className="relative min-w-[180px] shadow-2xl">
                Explore Products
              </Button>
            </motion.a>
            <motion.a href="#about" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero-outline" size="xl" className="min-w-[180px]">
                Our Story
              </Button>
            </motion.a>
          </motion.div>

          {/* Heritage Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="grid grid-cols-3 gap-3 md:gap-8 mt-12 md:mt-20 max-w-3xl mx-auto"
          >
            {[
              { value: "35+", label: "Years of Heritage" },
              { value: "100%", label: "Pure & Natural" },
              { value: "2.5M+", label: "Families Trust Us" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 md:p-6 rounded-2xl bg-cream/5 backdrop-blur-md border border-cream/10 transition-all duration-300"
              >
                <p className="text-3xl md:text-5xl font-display font-bold text-primary drop-shadow-lg text-shadow-hero">
                  {stat.value}
                </p>
                <p className="text-cream/70 text-xs md:text-sm mt-2 font-medium uppercase tracking-wider">
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
            className="text-cream/50 hover:text-cream transition-colors block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={28} strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
