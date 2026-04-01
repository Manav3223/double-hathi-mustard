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
    <section className="relative py-20 md:py-28 bg-foreground overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block text-primary font-semibold tracking-[0.2em] uppercase text-sm">
            Make the Switch
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
            Switch to Pure Mustard Oil{" "}
            <span className="text-primary">Today</span>
          </h2>
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join thousands of families who trust Double Hathi for authentic Kachi Ghani mustard oil — no chemicals, no adulteration, just pure goodness.
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
                onClick={handleOrder}
              >
                Order Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="lg"
                className="font-semibold min-w-[180px] border-cream/20 text-cream hover:bg-cream/10 hover:text-cream"
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
