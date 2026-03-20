import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

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
            onError={() => setVideoError(true)}
          >
            <source src={heroVideo} type="video/mp4" />
          </motion.video>
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-md border border-cream/20 rounded-full px-5 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-mustard animate-pulse" />
            <span className="text-cream/90 text-sm font-medium tracking-wide">Trusted Since 1989</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-cream"
          >
            Pure Kachi Ghani Mustard Oil{" "}
            <span className="text-mustard-light">You Can Trust</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Cold-pressed from handpicked mustard seeds. No chemicals, no mixing.
            Just the strong aroma and rich taste your family deserves.
          </motion.p>

          {/* Urgency line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-mustard text-sm md:text-base font-semibold mb-8 tracking-wide"
          >
            ⏳ Limited supply from fresh seasonal extraction
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/dealer-inquiry">
              <Button variant="hero" size="xl" className="min-w-[200px] shadow-2xl">
                Become a Dealer
              </Button>
            </Link>
            <a href="#products">
              <Button variant="hero-outline" size="xl" className="min-w-[200px]">
                Order Now
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-14 max-w-2xl mx-auto"
          >
            {[
              { value: "35+", label: "Years Legacy" },
              { value: "100%", label: "Pure & Natural" },
              { value: "2.5M+", label: "Happy Families" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-3 md:p-5 rounded-xl bg-cream/5 backdrop-blur-sm border border-cream/10"
              >
                <p className="text-2xl md:text-4xl font-display font-bold text-mustard-light">
                  {stat.value}
                </p>
                <p className="text-cream/60 text-xs md:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#trust"
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
