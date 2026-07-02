import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Phone,
  Mail,
  User,
  FileText,
  CheckCircle,
  TrendingUp,
  Shield,
  Truck,
  Handshake,
  BarChart3,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

const businessTypes = [
  "Distributor",
  "Wholesaler",
  "Retailer",
  "Super Stockist",
  "Institutional Buyer",
  "Export Partner",
];

const benefits = [
  {
    icon: TrendingUp,
    title: "High Margins",
    description: "Industry-leading profit margins with competitive wholesale pricing for partners.",
  },
  {
    icon: Shield,
    title: "Trusted Brand",
    description: "Decades of trust with FSSAI-certified, 100% pure Kachi Ghani mustard oil.",
  },
  {
    icon: Truck,
    title: "Logistics Support",
    description: "Reliable supply chain with on-time delivery and dedicated logistics assistance.",
  },
  {
    icon: Handshake,
    title: "Dedicated Support",
    description: "Personal relationship manager and marketing collateral to boost your sales.",
  },
  {
    icon: BarChart3,
    title: "Growing Demand",
    description: "Tap into the rising demand for pure, chemical-free mustard oil across India.",
  },
  {
    icon: Award,
    title: "Exclusive Territory",
    description: "Get exclusive distribution rights in your area with no channel conflicts.",
  },
];

const formSchema = z.object({
  businessName: z.string().trim().min(2, "Business name must be at least 2 characters").max(100),
  contactPerson: z.string().trim().min(2, "Contact person name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  businessType: z.string().min(1, "Please select a business type"),
  state: z.string().min(1, "Please select a state"),
  city: z.string().trim().min(2, "City name must be at least 2 characters").max(100),
  existingBusiness: z.string().trim().max(500).optional(),
  message: z.string().trim().max(1000).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const DealerInquiry = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactPerson: "",
      email: "",
      phone: "",
      businessType: "",
      state: "",
      city: "",
      existingBusiness: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const message =
      `*New Dealer Inquiry - Double Hathi*\n\n` +
      `*Business Name:* ${data.businessName}\n` +
      `*Business Type:* ${data.businessType}\n` +
      `*Contact Person:* ${data.contactPerson}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Email:* ${data.email}\n` +
      `*Location:* ${data.city}, ${data.state}\n` +
      (data.existingBusiness ? `*Existing Business:* ${data.existingBusiness}\n` : "") +
      (data.message ? `*Message:* ${data.message}\n` : "");

    const whatsappUrl = `https://wa.me/917976708372?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitted(true);
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Our team will contact you within 24-48 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card rounded-3xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center border border-border"
        >
          <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Thank You for Your Interest!
          </h2>
          <p className="text-muted-foreground mb-8">
            We've received your inquiry. Our business development team will review your application and contact you within 24-48 hours.
          </p>
          <Button onClick={() => navigate("/")} variant="default" size="lg">
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Dark premium background */}
        <div className="absolute inset-0 bg-foreground" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 70% 60%, hsl(var(--accent)) 0%, transparent 50%)`,
          }}
        />
        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-5 border border-primary/30 rounded-full px-5 py-1.5 bg-primary/10"
          >
            Business Opportunity
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight"
          >
            Partner With
            <br />
            <span className="text-primary">Double Hathi</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Join India's fastest-growing mustard oil brand. Build a profitable business with a product every household trusts.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We don't just offer a product — we offer a business built for scale.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-background rounded-2xl p-6 border border-border hover:border-primary/40 shadow-sm hover:shadow-lg transition-all duration-400 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3">
                Start Your Journey
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill in your details and our team will reach out within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-3xl shadow-xl border border-border p-6 md:p-10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Business Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Business Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="businessType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select business type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {businessTypes.map((type) => (
                                  <SelectItem key={type} value={type}>{type}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="existingBusiness"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Existing Business Details (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your current business, experience in FMCG/edible oil distribution, infrastructure, etc."
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      Contact Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="contactPerson"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Person *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input placeholder="Full name" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile Number *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input placeholder="10-digit mobile number" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input placeholder="your@email.com" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Location
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select state" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {indianStates.map((state) => (
                                  <SelectItem key={state} value={state}>{state}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Additional Information
                    </h3>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific requirements or questions..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-base">
                    Submit Partnership Inquiry
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Info */}
            <div className="mt-10 text-center text-muted-foreground">
              <p className="mb-2">For immediate assistance, contact us directly:</p>
              <a href="tel:+917976708372" className="text-primary font-semibold text-lg hover:underline">
                +91 79767 08372
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DealerInquiry;
