import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-wrapper";
import mustardOilPouch from "@/assets/mustard-oil-1l-pouch.png";
import { WHATSAPP_SALES_NUMBER } from "@/data/products";

const highlights = [
  "Cold pressed from premium mustard seeds",
  "Rich golden color with natural pungency",
  "No preservatives or artificial additives",
  "FSSAI certified — safe for daily use",
];

const ProductHighlight = () => {
  const handleOrder = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to order Double Hathi Pure Mustard Oil (1L Pouch). Please share availability and price."
    );
    window.open(`https://wa.me/${WHATSAPP_SALES_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 md:py-28 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/5 absolute" />
              <motion.img
                src={mustardOilPouch}
                alt="Double Hathi Pure Mustard Oil 1L Pouch"
                className="relative z-10 w-56 md:w-72 object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.15}>
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
              Our Bestseller
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Double Hathi Pure Kachi Ghani Mustard Oil
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              The same oil your grandmother trusted. Extracted the traditional way
              to preserve every drop of nutrition and flavour.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleOrder}
                className="gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold shadow-md"
                size="lg"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </Button>
              <a href="#products">
                <Button variant="outline" size="lg">
                  View All Sizes
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
