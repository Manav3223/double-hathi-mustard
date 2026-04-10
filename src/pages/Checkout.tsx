import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { products, WHATSAPP_SALES_NUMBER } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Droplets,
  Clock,
  Minus,
  Plus,
  ArrowLeft,
  CreditCard,
  Banknote,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const trustBadges = [
  { icon: Droplets, label: "100% Pure Kachi Ghani" },
  { icon: ShieldCheck, label: "Safe & Secure Checkout" },
  { icon: Clock, label: "Trusted Since 1989" },
];

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const productId = Number(searchParams.get("product")) || 1;
  const initialQty = Number(searchParams.get("qty")) || 1;

  const product = products.find((p) => p.id === productId) || products[0];

  const [quantity, setQuantity] = useState(initialQty);
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "prepaid">("cod");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const priceNum = parseInt(product.price.replace(/[^\d]/g, ""), 10);
  const subtotal = priceNum * quantity;
  const delivery = subtotal >= 500 ? 0 : 50;
  const total = subtotal + delivery;

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handlePlaceOrder = () => {
    const message = encodeURIComponent(
      `🛒 *New Order — Double Hathi Mustard Oil*\n\n` +
        `📦 Product: ${product.name} (${product.size})\n` +
        `🔢 Quantity: ${quantity}\n` +
        `💰 Total: ₹${total}\n` +
        `💳 Payment: ${paymentMethod === "cod" ? "Cash on Delivery" : "Prepaid (UPI/Card)"}\n\n` +
        `👤 *Customer Details*\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Address: ${form.address}, ${form.city}, ${form.state} - ${form.pincode}`
    );
    window.open(
      `https://wa.me/${WHATSAPP_SALES_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  const isFormValid =
    form.name.trim() &&
    form.phone.trim().length >= 10 &&
    form.address.trim() &&
    form.city.trim() &&
    form.state.trim() &&
    form.pincode.trim().length === 6;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/60 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
          <span className="font-display font-bold text-foreground text-lg">
            Checkout
          </span>
          <div className="w-24" />
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-secondary/5 border-b border-border">
        <div className="container mx-auto px-4 py-2.5 flex flex-wrap justify-center gap-6">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
            >
              <badge.icon size={14} className="text-primary" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — Customer Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-3 space-y-6"
          >
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-1">
                Delivery Details
              </h2>
              <p className="text-sm text-muted-foreground">
                Enter your shipping information
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-5 md:p-6 space-y-4 shadow-sm">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium text-sm">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground font-medium text-sm">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  value={form.phone}
                  onChange={(e) =>
                    updateField("phone", e.target.value.replace(/\D/g, ""))
                  }
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-foreground font-medium text-sm">
                  Address *
                </Label>
                <Input
                  id="address"
                  placeholder="House/Flat No., Street, Locality"
                  value={form.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  className="mt-1.5"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="text-foreground font-medium text-sm">
                    City *
                  </Label>
                  <Input
                    id="city"
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="text-foreground font-medium text-sm">
                    State *
                  </Label>
                  <Input
                    id="state"
                    placeholder="State"
                    value={form.state}
                    onChange={(e) => updateField("state", e.target.value)}
                    className="mt-1.5"
                  />
                </div>
              </div>

              <div className="w-1/2">
                <Label htmlFor="pincode" className="text-foreground font-medium text-sm">
                  Pincode *
                </Label>
                <Input
                  id="pincode"
                  placeholder="6-digit pincode"
                  maxLength={6}
                  value={form.pincode}
                  onChange={(e) =>
                    updateField("pincode", e.target.value.replace(/\D/g, ""))
                  }
                  className="mt-1.5"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-1">
                Payment Method
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Choose how you'd like to pay
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPaymentMethod("cod")}
                  className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                    paymentMethod === "cod"
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  {paymentMethod === "cod" && (
                    <CheckCircle2
                      size={16}
                      className="absolute top-2.5 right-2.5 text-primary"
                    />
                  )}
                  <Banknote size={24} className="text-primary" />
                  <span className="font-semibold text-sm text-foreground">
                    Cash on Delivery
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    Pay when you receive
                  </span>
                </button>

                <button
                  onClick={() => setPaymentMethod("prepaid")}
                  className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                    paymentMethod === "prepaid"
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  {paymentMethod === "prepaid" && (
                    <CheckCircle2
                      size={16}
                      className="absolute top-2.5 right-2.5 text-primary"
                    />
                  )}
                  <CreditCard size={24} className="text-primary" />
                  <span className="font-semibold text-sm text-foreground">
                    UPI / Card
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    Pay online securely
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right — Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="md:sticky md:top-20 space-y-5">
              <h2 className="font-display text-xl font-bold text-foreground">
                Order Summary
              </h2>

              <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                {/* Product */}
                <div className="p-4 flex gap-4 items-center border-b border-border">
                  <div className="w-20 h-20 rounded-xl bg-muted/30 flex-shrink-0 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm leading-snug truncate">
                      {product.name}
                    </h3>
                    <p className="text-primary text-xs font-medium mt-0.5">
                      {product.size}
                    </p>
                    <p className="text-foreground font-bold text-sm mt-1">
                      {product.price}
                    </p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="px-4 py-3 flex items-center justify-between border-b border-border">
                  <span className="text-sm text-muted-foreground">Quantity</span>
                  <div className="flex items-center border border-border rounded-lg bg-background">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1.5 hover:bg-muted transition-colors rounded-l-lg"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-sm font-semibold min-w-[2rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1.5 hover:bg-muted transition-colors rounded-r-lg"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="px-4 py-3 space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery</span>
                    <span className={delivery === 0 ? "text-secondary font-medium" : ""}>
                      {delivery === 0 ? "FREE" : `₹${delivery}`}
                    </span>
                  </div>
                  {delivery > 0 && (
                    <p className="text-[11px] text-primary">
                      Free delivery on orders above ₹500
                    </p>
                  )}
                  <div className="border-t border-border pt-2 flex justify-between font-bold text-foreground text-base">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  size="xl"
                  className="w-full gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-bold shadow-lg hover:shadow-xl transition-all rounded-xl text-base"
                  onClick={handlePlaceOrder}
                  disabled={!isFormValid}
                >
                  <MessageCircle size={20} />
                  Place Order via WhatsApp
                </Button>
              </motion.div>

              {paymentMethod === "cod" && (
                <p className="text-[11px] text-center text-muted-foreground">
                  Pay ₹{total} in cash when your order arrives
                </p>
              )}

              {/* Trust footer */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 pt-2">
                {trustBadges.map((b) => (
                  <span
                    key={b.label}
                    className="text-[10px] text-muted-foreground flex items-center gap-1"
                  >
                    <b.icon size={10} className="text-primary" />
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
