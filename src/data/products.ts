import mustardOil5lJar from "@/assets/mustard-oil-5l-jar.jpg";
import mustardOilPouch from "@/assets/mustard-oil-1l-pouch.png";
import mustardOil200ml from "@/assets/mustard-oil-200ml.png";
import mustardOil500ml from "@/assets/mustard-oil-500ml-pouch.png";
import mustardOil15lTin from "@/assets/mustard-oil-15l-tin.png";

export interface Product {
  id: number;
  name: string;
  size: string;
  price: string;
  image: string;
  badge: string | null;
  description: string;
  benefits: string[];
  ingredients: string;
  shelfLife: string;
  storage: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Double Hathi Pure Mustard Oil",
    size: "1 Litre Pouch",
    price: "₹210",
    image: mustardOilPouch,
    badge: "Best Seller",
    description:
      "Our most popular pack — perfect for daily cooking. This 1 litre pouch of Kachi Ghani mustard oil delivers the authentic pungent aroma and rich golden color that Indian kitchens love.",
    benefits: [
      "Cold-pressed to retain natural nutrients",
      "Rich in Omega-3 and Omega-6 fatty acids",
      "Natural antibacterial properties",
      "Ideal for cooking, frying & pickling",
    ],
    ingredients: "100% Pure Mustard Seeds (Brassica juncea)",
    shelfLife: "12 months from packaging",
    storage: "Store in a cool, dry place away from direct sunlight",
  },
  {
    id: 2,
    name: "Double Hathi Pure Mustard Oil",
    size: "200ml Bottle",
    price: "₹50",
    image: mustardOil200ml,
    badge: null,
    description:
      "A handy travel-size pack for small households or trial use. Experience the same premium Kachi Ghani quality in a compact, affordable pouch.",
    benefits: [
      "Perfect trial size for new customers",
      "Convenient for single-person households",
      "Easy to carry while travelling",
      "Same premium cold-pressed quality",
    ],
    ingredients: "100% Pure Mustard Seeds (Brassica juncea)",
    shelfLife: "12 months from packaging",
    storage: "Store in a cool, dry place away from direct sunlight",
  },
  {
    id: 3,
    name: "Double Hathi Pure Mustard Oil",
    size: "500ml",
    price: "₹120",
    image: mustardOil500ml,
    badge: null,
    description:
      "The ideal mid-size option for regular cooking needs. Our 500ml pouch offers great value with the same uncompromised Kachi Ghani purity.",
    benefits: [
      "Great value for money",
      "Suitable for 2-3 member families",
      "Cold-pressed for maximum nutrition",
      "Enhances flavour of every dish",
    ],
    ingredients: "100% Pure Mustard Seeds (Brassica juncea)",
    shelfLife: "12 months from packaging",
    storage: "Store in a cool, dry place away from direct sunlight",
  },
  {
    id: 4,
    name: "Double Hathi Pure Mustard Oil",
    size: "5 Litre (Tin)",
    price: "₹980",
    image: mustardOil5lJar,
    badge: null,
    description:
      "A bulk pack for large families and commercial kitchens. The 5 litre tin keeps the oil fresh for longer and is perfect for heavy daily usage.",
    benefits: [
      "Economical bulk packaging",
      "Ideal for joint families & restaurants",
      "Tin packaging preserves freshness",
      "Consistent quality in every drop",
    ],
    ingredients: "100% Pure Mustard Seeds (Brassica juncea)",
    shelfLife: "18 months from packaging",
    storage: "Store in a cool, dry place. Keep lid tightly closed after use.",
  },
  {
    id: 5,
    name: "Double Hathi Pure Mustard Oil",
    size: "15 Litre (Tin)",
    price: "₹2,550",
    image: mustardOil15lTin,
    badge: "Family Pack",
    description:
      "Our largest pack — built for big families, caterers, and wholesale buyers. The 15 litre tin ensures you never run out of pure mustard oil.",
    benefits: [
      "Best price per litre",
      "Perfect for commercial & bulk use",
      "Long-lasting freshness in tin packaging",
      "Trusted by caterers across India",
    ],
    ingredients: "100% Pure Mustard Seeds (Brassica juncea)",
    shelfLife: "18 months from packaging",
    storage: "Store in a cool, dry place. Keep lid tightly closed after use.",
  },
];

export const WHATSAPP_SALES_NUMBER = "917976708372";
