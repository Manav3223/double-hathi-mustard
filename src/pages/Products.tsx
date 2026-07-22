import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Handshake, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Products = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Shop Pure Kachi Ghani Mustard Oil | Double Hathi Products</title>
        <meta name="description" content="Browse Double Hathi's range of pure Kachi Ghani mustard oil — 200ml, 500ml, 1L, 5L and 15L packs. Cold-pressed, 100% natural, trusted since 1989." />
        <link rel="canonical" href="https://doublehathioil.lovable.app/products" />
        <meta property="og:title" content="Shop Pure Kachi Ghani Mustard Oil | Double Hathi Products" />
        <meta property="og:description" content="Browse Double Hathi's range of pure Kachi Ghani mustard oil — 200ml, 500ml, 1L, 5L and 15L packs." />
        <meta property="og:url" content="https://doublehathioil.lovable.app/products" />
      </Helmet>
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
                    </div>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Distributor CTA */}
          <FadeIn delay={0.3} className="text-center mt-16">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Button
                size="lg"
                className="shadow-md gap-2 text-base bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => navigate("/dealer-inquiry")}
              >
                <Handshake className="w-5 h-5" />
                Become a Distributor
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </FadeIn>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;
