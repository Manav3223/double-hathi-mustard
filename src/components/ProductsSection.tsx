import { useState } from "react";
import { Link } from "react-router-dom";
import { products, WHATSAPP_SALES_NUMBER } from "@/data/products";
import { Button } from "@/components/ui/button";
import { MessageCircle, Minus, Plus, Heart, Droplets, Wind, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const benefitTags = [
  { icon: Heart, label: "Heart Healthy" },
  { icon: Droplets, label: "100% Pure" },
  { icon: Wind, label: "Strong Aroma" },
];

const ProductsSection = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>(() =>
    products.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );

  const updateQuantity = (productId: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta),
    }));
  };

  const handleBuyNow = (
    productId: number,
    productName: string,
    size: string,
    price: string
  ) => {
    const qty = quantities[productId] || 1;
    const message = encodeURIComponent(
      `Hello! I would like to order:\n\n🛒 *${productName}*\n📦 Size: ${size}\n🔢 Quantity: ${qty}\n💰 Price: ${price} x ${qty}\n\nPlease confirm availability and delivery details.`
    );
    window.open(
      `https://wa.me/${WHATSAPP_SALES_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="products" className="py-24 md:py-36 bg-background overflow-hidden relative">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--secondary)) 0%, transparent 50%)`
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4 border border-primary/30 rounded-full px-5 py-1.5 bg-primary/5">
            Our Premium Range
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-5 leading-tight">
            Crafted with Tradition,
            <br />
            <span className="text-primary">Packed with Purity</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Every drop of Double Hathi mustard oil is cold-pressed from the finest mustard seeds,
            preserving its natural aroma, nutrients and golden richness.
          </p>
        </FadeIn>

        {/* Benefit Pills */}
        <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 md:gap-5 mb-14">
          {benefitTags.map((tag, i) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 shadow-sm"
            >
              <tag.icon size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{tag.label}</span>
            </motion.div>
          ))}
        </FadeIn>

        {/* Products Grid */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6"
        >
          {products.map((product) => (
            <StaggerItem key={product.id} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group h-full bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 border border-border hover:border-primary/40 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-b from-muted/40 to-card aspect-square flex items-center justify-center">
                  {/* Badge */}
                  {product.badge && (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute top-3 left-3 z-10 text-[11px] font-bold py-1 px-3 rounded-full bg-primary text-primary-foreground shadow-md uppercase tracking-wider"
                    >
                      {product.badge}
                    </motion.span>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.img
                    src={product.image}
                    alt={`${product.name} - ${product.size}`}
                    className="w-full h-full object-contain p-5 relative z-[1]"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />

                  {/* Quick view link */}
                  <Link
                    to={`/products/${product.id}`}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-foreground bg-primary/90 backdrop-blur-sm rounded-full px-4 py-1.5">
                      View Details <ChevronRight size={12} />
                    </span>
                  </Link>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <Link to={`/products/${product.id}`} className="group/title">
                    <h3 className="font-display font-semibold text-foreground text-base leading-snug group-hover/title:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-primary font-semibold text-sm mt-1">
                    {product.size}
                  </p>

                  {/* Mini benefits */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["Pure", "Cold-Pressed", "Natural"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground bg-muted/60 rounded px-2 py-0.5 border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Spacer to push actions to bottom */}
                  <div className="mt-auto pt-4">
                    {/* Quantity selector */}
                    <div className="flex items-center justify-center">
                      <div className="flex items-center border border-border rounded-lg bg-background/80">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="p-2 hover:bg-muted transition-colors rounded-l-lg active:scale-95"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-semibold min-w-[2.5rem] text-center">
                          {quantities[product.id]}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="p-2 hover:bg-muted transition-colors rounded-r-lg active:scale-95"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Buy button */}
                    <motion.div whileTap={{ scale: 0.97 }} className="mt-3">
                      <Button
                        size="sm"
                        className="w-full gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold shadow-md hover:shadow-lg transition-all rounded-xl"
                        onClick={() =>
                          handleBuyNow(
                            product.id,
                            product.name,
                            product.size,
                            product.price
                          )
                        }
                      >
                        <MessageCircle size={16} />
                        Order on WhatsApp
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.5} className="text-center mt-16">
          <Link to="/products">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="lg" className="shadow-md gap-2 text-base">
                Explore All Products
                <ChevronRight size={18} />
              </Button>
            </motion.div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProductsSection;
