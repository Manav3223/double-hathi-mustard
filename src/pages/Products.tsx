import { useState } from "react";
import { Link } from "react-router-dom";
import { products, WHATSAPP_SALES_NUMBER } from "@/data/products";
import { Button } from "@/components/ui/button";
import { MessageCircle, Minus, Plus, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Products = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>(() =>
    products.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );

  const updateQuantity = (productId: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta),
    }));
  };

  const handleBuyNow = (productId: number, productName: string, size: string, price: string) => {
    const qty = quantities[productId] || 1;
    const message = encodeURIComponent(
      `Hello! I would like to order:\n\n🛒 *${productName}*\n📦 Size: ${size}\n🔢 Quantity: ${qty}\n💰 Price: ${price} x ${qty}\n\nPlease confirm availability and delivery details.`
    );
    window.open(`https://wa.me/${WHATSAPP_SALES_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
              Our Products
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-5">
              Pure Kachi Ghani
              <span className="text-primary"> Mustard Oil</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Available in a range of sizes to suit every household. Click on any product to learn more.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <HoverScale scale={1.02}>
                  <div className="group h-full bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50">
                    {product.badge && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full mb-4 shadow-md"
                      >
                        {product.badge}
                      </motion.span>
                    )}

                    {/* Clickable image area */}
                    <Link to={`/products/${product.id}`}>
                      <div className="relative mb-6 overflow-hidden rounded-xl bg-muted/30 aspect-square flex items-center justify-center cursor-pointer">
                        <motion.img
                          src={product.image}
                          alt={`${product.name} - ${product.size}`}
                          className="w-full h-full object-contain p-4"
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      </div>
                    </Link>

                    <div>
                      <Link to={`/products/${product.id}`} className="hover:text-primary transition-colors">
                        <h2 className="font-display font-semibold text-foreground text-lg leading-tight">
                          {product.name}
                        </h2>
                      </Link>
                      <p className="text-muted-foreground text-sm mt-1 font-medium">{product.size}</p>
                      <p className="text-foreground/70 text-sm mt-3 line-clamp-2">{product.description}</p>

                      <Link to={`/products/${product.id}`}>
                        <Button variant="outline" size="sm" className="w-full mt-4 text-primary border-primary/30 hover:bg-primary/10">
                          View Details
                        </Button>
                      </Link>

                      <div className="flex items-center justify-end mt-4">
                        <div className="flex items-center border border-border rounded-lg bg-muted/30">
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

                      <motion.div whileTap={{ scale: 0.98 }}>
                        <Button
                          size="sm"
                          className="w-full mt-4 gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold shadow-md hover:shadow-lg transition-all"
                          onClick={() => handleBuyNow(product.id, product.name, product.size, product.price)}
                        >
                          <MessageCircle size={16} />
                          Buy Now
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;
