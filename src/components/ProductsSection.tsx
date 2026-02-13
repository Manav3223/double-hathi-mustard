import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductsSection = () => {
  const navigate = useNavigate();
  const displayedProducts = products.slice(0, 3);

  return (
    <section id="products" className="py-24 md:py-36 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
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

        <StaggerContainer
          staggerDelay={0.1}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {displayedProducts.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.5} className="text-center mt-14">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="default"
              size="lg"
              className="shadow-lg"
              onClick={() => navigate("/products")}
            >
              View All Products
            </Button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProductsSection;
