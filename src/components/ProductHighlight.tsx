import { Check, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { products, WHATSAPP_SALES_NUMBER } from "@/data/products";
import { FadeIn } from "@/components/ui/motion-wrapper";

const ProductHighlight = () => {
  const bestseller = products.find((p) => p.badge === "Best Seller")!;

  const handleBuyNow = () => {
    const message = `Hi, I'm interested in ordering Double Hathi Pure Mustard Oil - ${bestseller.size}. Please share the details.`;
    window.open(
      `https://wa.me/${WHATSAPP_SALES_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden texture-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-12 md:mb-16">
          <span className="text-primary font-bold tracking-[0.25em] uppercase text-xs">
            Our Flagship Product
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
            The Family Favourite
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            India's most-loved Kachi Ghani format — pure, pungent, and crafted for everyday excellence.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/3 rounded-2xl" />
            <img
              src={bestseller.image}
              alt={`${bestseller.name} - ${bestseller.size}`}
              className="relative z-10 w-64 md:w-80 h-auto object-contain drop-shadow-2xl"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-bold shadow-lg"
            >
              <Star className="w-4 h-4 fill-current" />
              Best Seller
            </motion.div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {bestseller.name}
              </h3>
              <p className="text-primary font-semibold text-lg mt-1">
                {bestseller.size}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {bestseller.description}
            </p>

            <ul className="space-y-3">
              {bestseller.benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                  </span>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="default"
                size="lg"
                className="mt-2 font-semibold shadow-md gap-2"
                onClick={handleBuyNow}
              >
                <ShoppingBag className="w-5 h-5" />
                Order on WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
