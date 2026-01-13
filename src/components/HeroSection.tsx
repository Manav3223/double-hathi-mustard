import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-mustard animate-pulse" />
            <span className="text-cream/90 text-sm font-medium">Trusted Since 1989</span>
          </div>

          {/* Main Heading */}
          <h1 style={{
          animationDelay: "0.1s"
        }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up text-mustard-light">
            Double Hathi
            <span className="block text-mustard-light mt-2">Pure Kachi Ghani</span>
            <span className="block text-2xl sm:text-3xl mt-4 font-normal text-cream/80 md:text-6xl">Mustard Oil</span>
          </h1>

          {/* Subtitle */}
          <p style={{
          animationDelay: "0.2s"
        }} className="text-lg text-cream/80 max-w-2xl mx-auto mb-10 animate-fade-up font-light md:text-2xl">
            Experience the authentic taste and purity of cold-pressed mustard oil, 
            crafted with traditional methods passed down through generations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="hero" size="xl">
              Shop Now
            </Button>
            <Button variant="hero-outline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl mx-auto animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-mustard-light">35+</p>
              <p className="text-cream/70 text-sm md:text-base mt-1">Years Legacy</p>
            </div>
            <div className="text-center border-x border-cream/20">
              <p className="text-3xl md:text-4xl font-display font-bold text-mustard-light">100%</p>
              <p className="text-cream/70 text-sm md:text-base mt-1">Pure & Natural</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-mustard-light">10M+</p>
              <p className="text-cream/70 text-sm md:text-base mt-1">Happy Families</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-cream/60 hover:text-cream transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;