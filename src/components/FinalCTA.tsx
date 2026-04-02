import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { WHATSAPP_SALES_NUMBER } from "@/data/products";

const FinalCTA = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    const message = "Hi, I'd like to order Double Hathi Pure Kachi Ghani Mustard Oil. Please share the details.";
    window.open(`https://wa.me/${WHATSAPP_SALES_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      {/* Warm heritage glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block text-primary font-bold tracking-[0.25em] uppercase text-xs">
            Join the Movement
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
            Make the Switch to{" "}
            <span className="text-primary">Pure Mustard Oil</span>
          </h2>
          <p className="text-secondary-foreground/65 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-accent italic text-xl">
            Join millions of families who refuse to compromise on purity.
            Double Hathi — where every drop is a promise of authenticity.
          </p>

          <div className="heritage-divider max-w-xs mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="default" size="lg" className="font-semibold shadow-lg gap-2 min-w-[180px]" onClick={handleOrder}>
                Order Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="lg"
                className="font-semibold min-w-[180px] border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
                onClick={() => navigate("/dealer-inquiry")}
              >
                Become a Dealer
              </Button>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTA;
