import mustardOilBottle from "@/assets/mustard-oil-bottle.jpg";
import mustardOilPouch from "@/assets/mustard-oil-1l-pouch.png";
import mustardOil200ml from "@/assets/mustard-oil-200ml.png";
import mustardOil500ml from "@/assets/mustard-oil-500ml-pouch.png";
import mustardOil15lTin from "@/assets/mustard-oil-15l-tin.png";
import type { Product } from "@/components/ProductCard";

export const products: Product[] = [
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
