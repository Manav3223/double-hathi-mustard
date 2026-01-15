import { Button } from "@/components/ui/button";
import mustardOilBottle from "@/assets/mustard-oil-bottle.jpg";
import mustardOilPouch from "@/assets/mustard-oil-pouch.png";
import mustardOil200ml from "@/assets/mustard-oil-200ml.png";
import mustardOil500ml from "@/assets/mustard-oil-500ml.png";
import mustardOil15lTin from "@/assets/mustard-oil-15l-tin.png";
import { MessageCircle } from "lucide-react";

const WHATSAPP_SALES_NUMBER = "917976708272";

const products = [
  {
    id: 1,
    name: "Double Hathi Pure Mustard Oil",
    size: "1 Litre Pouch",
    price: "₹210",
    image: mustardOilPouch,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Double Hathi Pure Mustard Oil",
    size: "200ml",
    price: "₹50",
    image: mustardOil200ml,
    badge: null,
  },
  {
    id: 3,
    name: "Double Hathi Pure Mustard Oil",
    size: "500ml",
    price: "₹120",
    image: mustardOil500ml,
    badge: null,
  },
  {
    id: 4,
    name: "Double Hathi Pure Mustard Oil",
    size: "5 Litre (Tin)",
    price: "₹980",
    image: mustardOilBottle,
    badge: null,
  },
  {
    id: 5,
    name: "Double Hathi Pure Mustard Oil",
    size: "15 Litre (Tin)",
    price: "₹2,550",
    image: mustardOil15lTin,
    badge: "Family Pack",
  },
];

const ProductsSection = () => {
  const handleBuyNow = (productName: string, size: string, price: string) => {
    const message = encodeURIComponent(
      `Hello! I would like to order:\n\n🛒 *${productName}*\n📦 Size: ${size}\n💰 Price: ${price}\n\nPlease confirm availability and delivery details.`
    );
    window.open(`https://wa.me/${WHATSAPP_SALES_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Pure Goodness in
            <span className="text-primary"> Every Drop</span>
          </h2>
          <p className="text-muted-foreground">
            Choose from our range of premium Kachi Ghani mustard oil, 
            available in sizes perfect for every household need.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-background rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-up border border-border hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {product.badge && (
                <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {product.badge}
                </span>
              )}

              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl bg-cream/50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{product.size}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <p className="text-2xl font-display font-bold text-primary">
                    {product.price}
                  </p>
                  <Button 
                    size="sm" 
                    className="gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                    onClick={() => handleBuyNow(product.name, product.size, product.price)}
                  >
                    <MessageCircle size={16} />
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
