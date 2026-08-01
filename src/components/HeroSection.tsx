import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import pouch1L from "@/assets/mustard-oil-1l-pouch.png";
import jar5L from "@/assets/mustard-oil-5l-jar.jpg";
import bottle500 from "@/assets/mustard-oil-500ml-pouch.png";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const trustItems = ["35+ Years Legacy", "Kachi Ghani", "Lab Tested", "FSSAI & AGMARK"];

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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
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

        {/* Overlays — heritage green/gold, stronger left-side contrast for copy */}
        <div className="absolute inset-0 bg-amber-400/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-foreground/70 to-foreground/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-transparent to-foreground/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
          {/* Copy column */}
          <div className="order-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              <span className="h-px w-8 bg-mustard/70" />
              <span className="text-mustard text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
                Trusted Since 1989
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold leading-[1.05] mb-5">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-mustard-light text-shadow-hero">
                Pure Kachi Ghani
              </span>
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-cream text-shadow-soft">
                Mustard Oil
              </span>
            </motion.h1>

            {/* Product image — mobile order between headline and copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:hidden my-8">
              <ProductStack />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base md:text-lg text-cream/90 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Authentic Kachi Ghani mustard oil crafted with traditional methods and generations of expertise.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-sm md:text-base font-display italic text-mustard/90 mb-9">
              “Sehat Ka Mazboot Saathi – Shuddh Kachi Ghani”
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a href="/dealer-inquiry">
                <Button variant="hero" size="xl" className="w-full sm:w-auto min-w-[200px]">
                  Become a Distributor
                </Button>
              </a>
              <a href="#products">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto min-w-[180px]">
                  Explore Our Range
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Product column (desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="hidden lg:block order-2">
            <ProductStack />
          </motion.div>
        </div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 md:mt-16 pt-6 border-t border-cream/15">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 text-center">
            {trustItems.map((item) =>
            <li key={item} className="text-cream/85 text-sm md:text-base font-medium tracking-wide">
                {item}
              </li>
            )}
          </ul>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream/50 hover:text-cream transition-colors">
        <ArrowDown size={26} strokeWidth={1.5} />
      </motion.a>
    </section>);

};

const ProductStack = () => (
  <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[460px] mx-auto">
    {/* Depth: secondary pack behind */}
    <img
      src={bottle500}
      alt="Double Hathi 500ml Kachi Ghani mustard oil pouch"
      loading="lazy"
      className="absolute left-0 bottom-0 w-[42%] object-contain opacity-70 -rotate-6 drop-shadow-[0_18px_24px_rgba(0,0,0,0.45)]" />
    <img
      src={jar5L}
      alt="Double Hathi 5 litre mustard oil jar"
      loading="lazy"
      className="absolute right-0 bottom-0 w-[40%] object-contain opacity-60 rotate-3 rounded-lg drop-shadow-[0_18px_24px_rgba(0,0,0,0.45)]" />
    {/* Primary: 1L pouch */}
    <img
      src={pouch1L}
      alt="Double Hathi 1 litre Pure Kachi Ghani mustard oil pouch"
      className="relative z-10 w-full object-contain drop-shadow-[0_28px_36px_rgba(0,0,0,0.5)]" />
    {/* Natural ground shadow */}
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-5 rounded-[50%] bg-foreground/50 blur-md" />
  </div>
);

export default HeroSection;