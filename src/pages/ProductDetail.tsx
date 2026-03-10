import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products, WHATSAPP_SALES_NUMBER, Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { MessageCircle, Minus, Plus, ArrowLeft, Check, Package, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Product Not Found</h1>
          <Link to="/products">
            <Button className="mt-6">View All Products</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleBuyNow = () => {
    const message = encodeURIComponent(
      `Hello! I would like to order:\n\n🛒 *${product.name}*\n📦 Size: ${product.size}\n🔢 Quantity: ${quantity}\n💰 Price: ${product.price} x ${quantity}\n\nPlease confirm availability and delivery details.`
    );
    window.open(`https://wa.me/${WHATSAPP_SALES_NUMBER}?text=${message}`, "_blank");
  };

  // Other products for suggestion
  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.size}</span>
          </div>

          {/* Product Detail */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <FadeIn>
              <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
                {product.badge && (
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full mb-4 shadow-md">
                    {product.badge}
                  </span>
                )}
                <motion.img
                  src={product.image}
                  alt={`${product.name} - ${product.size}`}
                  className="w-full h-auto max-h-[500px] object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </FadeIn>

            {/* Info */}
            <FadeIn delay={0.2}>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {product.name}
                </h1>
                <p className="text-primary font-semibold text-xl mt-2">{product.size}</p>

                <p className="text-foreground/80 text-base leading-relaxed mt-6">{product.description}</p>

                {/* Benefits */}
                <div className="mt-8">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Product Info Cards */}
                <div className="grid grid-cols-3 gap-3 mt-8">
                  <div className="bg-card rounded-xl p-4 border border-border text-center">
                    <Package className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Ingredients</p>
                    <p className="text-xs font-semibold text-foreground mt-1">100% Mustard</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border text-center">
                    <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Shelf Life</p>
                    <p className="text-xs font-semibold text-foreground mt-1">{product.shelfLife}</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border text-center">
                    <ShieldCheck className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Storage</p>
                    <p className="text-xs font-semibold text-foreground mt-1">Cool & Dry</p>
                  </div>
                </div>

                {/* Quantity + Buy */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg bg-muted/30">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-3 hover:bg-muted transition-colors rounded-l-lg active:scale-95"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-5 text-base font-semibold min-w-[3rem] text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-3 hover:bg-muted transition-colors rounded-r-lg active:scale-95"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button
                      size="lg"
                      className="w-full gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold shadow-md hover:shadow-lg transition-all text-base"
                      onClick={handleBuyNow}
                    >
                      <MessageCircle size={18} />
                      Buy Now on WhatsApp
                    </Button>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Other Products */}
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherProducts.map((p) => (
                <Link key={p.id} to={`/products/${p.id}`} className="group">
                  <div className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square rounded-lg bg-muted/30 flex items-center justify-center overflow-hidden mb-3">
                      <img
                        src={p.image}
                        alt={`${p.name} - ${p.size}`}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="font-display font-semibold text-foreground text-sm leading-tight">{p.name}</p>
                    <p className="text-muted-foreground text-xs mt-1">{p.size}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
