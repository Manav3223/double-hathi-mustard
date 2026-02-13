import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { HoverScale } from "@/components/ui/motion-wrapper";

const WHATSAPP_SALES_NUMBER = "917976708272";

export interface Product {
  id: number;
  name: string;
  size: string;
  price: string;
  image: string;
  badge: string | null;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    const message = encodeURIComponent(
      `Hello! I would like to order:\n\n🛒 *${product.name}*\n📦 Size: ${product.size}\n🔢 Quantity: ${quantity}\n\nPlease confirm availability and delivery details.`
    );
    window.open(
      `https://wa.me/${WHATSAPP_SALES_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  return (
    <HoverScale scale={1.02}>
      <div className="group h-full bg-background rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50">
        {product.badge && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full mb-4 shadow-md"
          >
            {product.badge}
          </motion.span>
        )}

        <div className="relative mb-6 overflow-hidden rounded-xl bg-cream/50 aspect-square flex items-center justify-center">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        <div>
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
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 hover:bg-muted transition-colors rounded-l-lg active:scale-95"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-3 text-sm font-semibold min-w-[2.5rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 hover:bg-muted transition-colors rounded-r-lg active:scale-95"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
          <motion.div whileTap={{ scale: 0.98 }}>
            <Button
              size="sm"
              className="w-full mt-4 gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold shadow-md hover:shadow-lg transition-all"
              onClick={handleBuyNow}
            >
              <MessageCircle size={16} />
              Buy Now
            </Button>
          </motion.div>
        </div>
      </div>
    </HoverScale>
  );
};

export default ProductCard;
