import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { WHATSAPP_SALES_NUMBER } from "@/data/products";

const FinalCTA = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const message = "Hi, I'd like to explore a distribution partnership with Double Hathi Kachi Ghani Mustard Oil.";
    window.open(`https://wa.me/${WHATSAPP_SALES_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="relative py-20 md:py-28 bg-foreground overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Partner With Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
            Grow With a Brand{" "}
            <span className="text-primary">Trusted Since 1989</span>
          </h2>
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join our growing network of distributors, wholesalers and stockists across India. Premium Kachi Ghani mustard oil with a legacy of purity and strong margins.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="default"
                size="lg"
                className="font-semibold shadow-lg gap-2 min-w-[180px]"
                onClick={() => navigate("/dealer-inquiry")}
              >
                <Handshake className="w-4 h-4" />
                Become a Distributor
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="lg"
                className="font-semibold min-w-[180px] border-cream/20 text-cream hover:bg-cream/10 hover:text-cream"
                onClick={handleWhatsApp}
              >
                Chat on WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTA;
