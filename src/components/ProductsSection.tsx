import { useState } from "react";
import { Link } from "react-router-dom";
import { products, WHATSAPP_SALES_NUMBER } from "@/data/products";
import { Button } from "@/components/ui/button";
import { MessageCircle, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";



const ProductsSection = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>(() =>
  products.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );

  const updateQuantity = (productId: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta)
    }));
  };

  const handleBuyNow = (
  productId: number,
  productName: string,
  size: string,
  price: string) =>
  {
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
    <section id="products" className="py-24 md:py-36 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-5">
            Pure Goodness in
            <span className="text-primary"> Every Drop</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Choose from our range of premium Kachi Ghani mustard oil, available in
            sizes perfect for every household need.
          </p>
        </FadeIn>

        {/* Products Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          
          {products.map((product) =>
          <StaggerItem key={product.id} className="h-full">
              <HoverScale scale={1.02} className="h-full">
                <div className="group h-full bg-background rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50 flex flex-col">
                  {/* Badge */}
                  {product.badge &&
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block text-xs font-bold py-1.5 rounded-full mb-4 shadow-md text-secondary-foreground bg-primary px-[12px] mx-[153px] mr-[153px] pl-[12px]">
                  
                      {product.badge}
                    </motion.span>
                }

                  {/* Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl bg-cream/50 aspect-square flex items-center justify-center">
                    <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }} />
                  
                  </div>

                  {/* Info */}
                  <div className="mt-auto">
                    <h3 className="font-display font-semibold text-foreground text-lg leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 font-medium">
                      {product.size}
                    </p>

                    <div className="flex items-center justify-end mt-4">
                      <div className="flex items-center gap-1">
                        <div className="flex items-center border border-border rounded-lg bg-muted/30">
                          <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="p-2 hover:bg-muted transition-colors rounded-l-lg active:scale-95"
                          aria-label="Decrease quantity">
                          
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-semibold min-w-[2.5rem] text-center">
                            {quantities[product.id]}
                          </span>
                          <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="p-2 hover:bg-muted transition-colors rounded-r-lg active:scale-95"
                          aria-label="Increase quantity">
                          
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Button
                      size="sm"
                      className="w-full mt-4 gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold shadow-md hover:shadow-lg transition-all"
                      onClick={() =>
                      handleBuyNow(
                        product.id,
                        product.name,
                        product.size,
                        product.price
                      )
                      }>
                      
                        <MessageCircle size={16} />
                        Buy Now
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </HoverScale>
            </StaggerItem>
          )}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.5} className="text-center mt-14">
          <Link to="/products">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="default" size="lg" className="shadow-lg">
                View All Products
              </Button>
            </motion.div>
          </Link>
        </FadeIn>
      </div>
    </section>);

};

export default ProductsSection;