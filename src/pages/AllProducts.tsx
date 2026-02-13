import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const AllProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 lg:pt-28">
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
                Our Products
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-5">
                Pure Goodness in
                <span className="text-primary"> Every Drop</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Choose from our range of premium Kachi Ghani mustard oil, available in
                sizes perfect for every household need.
              </p>
            </FadeIn>

            <StaggerContainer
              staggerDelay={0.1}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {products.map((product) => (
                <StaggerItem key={product.id}>
                  <ProductCard product={product} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AllProducts;
