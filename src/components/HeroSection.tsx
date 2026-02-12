import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Skeleton } from "@/components/ui/skeleton";
const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  // On mobile, delay video load to prioritize content rendering
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => setShowVideo(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setShowVideo(true);
    }
  }, [isMobile]);
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Fallback Image */}
      <div className="absolute inset-0">
        {/* Fallback Image (shows while video loads or on error) */}
        <motion.div initial={{
        scale: 1.1,
        opacity: 1
      }} animate={{
        scale: 1,
        opacity: videoLoaded && !videoError ? 0 : 1
      }} transition={{
        duration: 1.5,
        ease: "easeOut"
      }} className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroBg})`
      }} />

        {/* Loading Indicator */}
        <AnimatePresence>
          {!videoLoaded && !videoError && showVideo && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-foreground/60 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 border-2 border-mustard border-t-transparent rounded-full animate-spin" />
              <span className="text-cream/80 text-xs font-medium">Loading video…</span>
            </motion.div>}
        </AnimatePresence>

        {/* Video Background - conditionally rendered */}
        {showVideo && !videoError && <motion.video ref={videoRef} initial={{
        opacity: 0
      }} animate={{
        opacity: videoLoaded ? 1 : 0
      }} transition={{
        duration: 1.5
      }} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload={isMobile ? "metadata" : "auto"} onLoadedData={() => setVideoLoaded(true)} onError={() => setVideoError(true)}>
            <source src={heroVideo} type="video/mp4" />
          </motion.video>}

        {/* Yellow Tint Overlay for Mustard Oil Color */}
        <div className="absolute inset-0 bg-amber-400/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-yellow-400/25 mix-blend-overlay" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-mustard/30 rounded-full" initial={{
        x: Math.random() * 100 + "%",
        y: "100%",
        opacity: 0.3
      }} animate={{
        y: "-100%",
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        delay: i * 1.5,
        ease: "linear"
      }} />)}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-md border border-cream/20 rounded-full px-5 py-2.5 mb-8 my-[15px]">
            <span className="w-2.5 h-2.5 rounded-full bg-mustard animate-pulse shadow-[0_0_10px_hsl(var(--mustard))]" />
            <span className="text-cream/90 text-sm font-medium tracking-wide">
              Trusted Since 1989
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.3
        }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-mustard-light leading-tight">
            Double Hathi
            <motion.span initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="block mt-2 text-mustard-light">
              Pure Kachi Ghani
            </motion.span>
            <motion.span initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-4 font-normal text-cream/90">
              Mustard Oil
            </motion.span>
            <motion.span initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.9
          }} className="block text-lg sm:text-xl md:text-2xl mt-6 font-bold text-mustard bg-mustard/10 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
              "Sehat ka Mazboot Saathi - Shuddh Kachi Ghani"
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 1
        }} className="text-lg md:text-xl lg:text-2xl text-cream/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Experience the authentic taste and purity of Kachi Ghani mustard oil,
            crafted with traditional methods passed down through generations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 1.1
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a href="#products" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <Button variant="hero" size="xl" className="min-w-[180px] shadow-2xl">
                Shop Now
              </Button>
            </motion.a>
            <motion.a href="#benefits" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <Button variant="hero-outline" size="xl" className="min-w-[180px]">
                Learn More
              </Button>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 1.3
        }} className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-20 max-w-3xl mx-auto">
            {[{
            value: "35+",
            label: "Years Legacy"
          }, {
            value: "100%",
            label: "Pure & Natural"
          }, {
            value: "2.5M+",
            label: "Happy Families"
          }].map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 1.4 + index * 0.1
          }} className={`text-center p-4 md:p-6 rounded-2xl bg-cream/5 backdrop-blur-sm ${index === 1 ? "border-x border-cream/20" : ""}`}>
                <p className="text-3xl md:text-5xl font-display font-bold text-mustard-light drop-shadow-lg">
                  {stat.value}
                </p>
                <p className="text-cream/70 text-sm md:text-base mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>)}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 1.8
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.a href="#about" className="text-cream/60 hover:text-cream transition-colors block" animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
            <ArrowDown size={32} strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;