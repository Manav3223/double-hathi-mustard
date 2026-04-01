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

  const particleSizes = [2, 3, 1.5, 4, 2.5, 3.5, 1, 2, 3, 5];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Fallback Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 1 }}
          animate={{ scale: 1, opacity: videoLoaded && !videoError ? 0 : 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }} />


        <AnimatePresence>
          {!videoLoaded && !videoError && showVideo &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-foreground/60 backdrop-blur-sm rounded-full px-4 py-2">

              <div className="w-3 h-3 border-2 border-mustard border-t-transparent rounded-full animate-spin" />
              <span className="text-cream/80 text-xs font-medium">Loading video…</span>
            </motion.div>
          }
        </AnimatePresence>

        {showVideo && !videoError &&
        <motion.video
          ref={videoRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onEnded={(e) => {
            const video = e.currentTarget;
            video.currentTime = 0;
            video.play();
          }}
          onError={() => setVideoError(true)}>

            <source src={heroVideo} type="video/mp4" />
          </motion.video>
        }

        {/* Overlays - reduced amber, stronger gradient for contrast */}
        <div className="absolute inset-0 bg-amber-400/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-yellow-400/15 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/50 to-foreground/85" />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particleSizes.map((size, i) =>
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size * 4,
            height: size * 4,
            background: `radial-gradient(circle, hsl(42 85% 55% / 0.6) 0%, hsl(42 85% 45% / 0) 70%)`,
            boxShadow: `0 0 ${size * 6}px hsl(42 85% 50% / 0.3)`
          }}
          initial={{ x: Math.random() * 100 + "%", y: "110%", opacity: 0.4 }}
          animate={{ y: "-10%", opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: 7 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear"
          }} />

        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-md border border-cream/20 rounded-full px-5 py-2.5 mb-8 my-[15px]">

            <span className="w-2.5 h-2.5 rounded-full bg-mustard animate-pulse shadow-[0_0_10px_hsl(var(--mustard))]" />
            <span className="text-cream/90 text-sm font-medium tracking-wide">Trusted Since 1989</span>
          </motion.div>

          {/* Main Heading with text shadows and shimmer */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">

            <span className="text-shadow-hero text-shimmer inline-block text-[#f0d175]">
              Double Hathi
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block mt-2 text-mustard-light text-shadow-hero">

              Pure Kachi Ghani
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-4 font-normal text-cream text-shadow-soft">

              Mustard Oil
            </motion.span>

            {/* Decorative accent lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex items-center justify-center gap-3 mt-6 mb-2">

              <span className="h-px w-16 bg-gradient-to-r from-transparent to-mustard" />
              <span className="w-2 h-2 rounded-full bg-mustard shadow-[0_0_8px_hsl(var(--mustard))]" />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-mustard" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="block text-sm sm:text-lg md:text-2xl mt-4 font-bold text-mustard bg-mustard/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 inline-block border border-mustard/20 max-w-[95vw]">

              "Sehat ka Mazboot Saathi - Shuddh Kachi Ghani"
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg md:text-xl lg:text-2xl text-cream/85 max-w-2xl mx-auto mb-12 font-light leading-relaxed text-shadow-soft">

            Experience the authentic taste and purity of Kachi Ghani mustard oil,
            crafted with traditional methods passed down through generations.
          </motion.p>

          {/* CTA Buttons with pulsing glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">

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

          {/* Stats with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-20 max-w-3xl mx-auto">

            {[
            { value: "35+", label: "Years Legacy" },
            { value: "100%", label: "Pure & Natural" },
            { value: "2.5M+", label: "Happy Families" }].
            map((stat, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(42 85% 45% / 0.25)" }}
              className={`text-center p-4 md:p-6 rounded-2xl bg-cream/8 backdrop-blur-md border border-cream/15 transition-all duration-300 ${
              index === 1 ? "border-x border-cream/25" : ""}`
              }>

                <p className="text-3xl md:text-5xl font-display font-bold text-mustard-light drop-shadow-lg text-shadow-hero">
                  {stat.value}
                </p>
                <p className="text-cream/75 text-sm md:text-base mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">

          <motion.a
            href="#about"
            className="text-cream/60 hover:text-cream transition-colors block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>

            <ArrowDown size={32} strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;