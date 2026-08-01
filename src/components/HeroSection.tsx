import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import pouch1L from "@/assets/hero-pouch-1l.png";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const trustItems = ["35+ Years Legacy", "Traditional Kachi Ghani", "Lab Tested", "FSSAI & AGMARK"];

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
    <section id="home" className="relative min-h-[88vh] lg:min-h-[86vh] flex items-center overflow-hidden">
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

        {/* Overlays — cinematic heritage green/gold atmosphere */}
        <div className="absolute inset-0 bg-amber-400/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/75 to-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/75 via-transparent to-foreground/90" />
        {/* Warm golden light pooling toward the right where the pack sits */}
        <div className="absolute right-0 bottom-0 w-[55%] h-[75%] bg-[radial-gradient(ellipse_at_70%_75%,hsl(var(--mustard)/0.28),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="grid lg:grid-cols-[1.55fr_0.45fr] gap-8 lg:gap-6 items-end">
          {/* Copy column */}
          <div className="order-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 lg:pb-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="h-px w-8 bg-mustard/70" />
              <span className="text-mustard text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
                Trusted Since 1989
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold leading-[1.08] mb-4">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-mustard-light text-shadow-hero">
                Pure Kachi Ghani
              </span>
              <span className="block mt-1.5 text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] font-normal text-cream/95 text-shadow-soft">
                Mustard Oil
              </span>
            </motion.h1>

            {/* Product image — mobile order between headline and copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:hidden my-7">
              <ProductStack />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm md:text-base text-cream/90 leading-relaxed mb-5 max-w-lg mx-auto lg:mx-0">
              Authentic Kachi Ghani mustard oil crafted with traditional methods and generations of expertise.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-xs md:text-sm font-display italic tracking-wide text-mustard/80 mb-7">
              “Sehat Ka Mazboot Saathi – Shuddh Kachi Ghani”
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <a href="/dealer-inquiry">
                <Button variant="hero" size="lg" className="w-full sm:w-auto min-w-[180px]">
                  Become a Distributor
                </Button>
              </a>
              <a href="#products">
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto min-w-[160px]">
                  Explore Our Range
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Product (desktop) — subtle, lower-right, integrated into the scene */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block order-2 self-end">
            <ProductStack />
          </motion.div>
        </div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 md:mt-10 pt-5 border-t border-cream/15">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 text-center">
            {trustItems.map((item) =>
            <li key={item} className="text-cream/80 text-xs md:text-sm font-medium tracking-[0.08em] uppercase">
                {item}
              </li>
            )}
          </ul>
        </motion.div>
      </div>
    </section>);

};

const ProductStack = () => (
  <div className="relative w-full max-w-[190px] sm:max-w-[210px] lg:max-w-none mx-auto">
    {/* Warm halo so the pack sits inside the scene */}
    <div className="absolute inset-x-[-25%] bottom-[-12%] top-[10%] bg-[radial-gradient(ellipse_at_center,hsl(var(--mustard)/0.22),transparent_70%)] blur-xl" />
    {/* Primary: 1L pouch only */}
    <img
      src={pouch1L}
      alt="Double Hathi 1 litre Pure Kachi Ghani mustard oil pouch"
      className="relative z-10 w-full object-contain drop-shadow-[0_22px_30px_rgba(0,0,0,0.6)]" />
    {/* Natural ground shadow */}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[70%] h-3 rounded-[50%] bg-foreground/55 blur-md" />
  </div>
);

export default HeroSection;