import { FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";
import fssaiLogo from "@/assets/FSSAI-Logo.webp.asset.json";
import agmarkLogo from "@/assets/agmark-vector-logo.webp.asset.json";

const certifications = [
  {
    image: fssaiLogo.url,
    imageAlt: "FSSAI Logo",
    title: "FSSAI Certified",
    badge: "License No. 10012013000260",
  },
  {
    image: agmarkLogo.url,
    imageAlt: "Agmark Logo",
    title: "Agmark Grade A",
    badge: "Government of India",
  },
  {
    icon: FileCheck,
    title: "Lab Tested Every Batch",
    badge: "In-House Quality Control",
  },
];

const QualitySection = () => {
  return (
    <section id="quality" className="py-24 md:py-36 relative overflow-hidden bg-cream/30">
      {/* Soft decorative glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.img
            src="/lovable-uploads/28b73be5-c0c9-4635-a301-cfa2d2c218e9.png"
            alt="Double Hathi Logo"
            className="w-24 h-24 md:w-28 md:h-28 object-contain mx-auto mb-6 drop-shadow-sm"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Trusted Quality
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5 text-foreground">
            Certifications That <span className="text-primary">Speak for Us</span>
          </h2>
        </FadeIn>

        {/* Certification cards */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {certifications.map((cert, index) => (
            <StaggerItem key={index} className="h-full">
              <HoverScale className="h-full">
                <div className="h-full flex flex-col group bg-background rounded-2xl p-7 md:p-9 border border-border/60 shadow-card hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  {/* Shimmer sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />

                  {/* Badge-style icon or image */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mb-6 shadow-soft shrink-0"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.imageAlt}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <cert.icon className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
                    )}
                  </motion.div>

                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    {cert.title}
                  </h3>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-[3px] w-12 rounded-full bg-primary/30 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                </div>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Footer note */}
        <FadeIn delay={0.3} className="mt-14 md:mt-18 text-center">
          <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Complete certification documents are available for verified distribution partners on request.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default QualitySection;
