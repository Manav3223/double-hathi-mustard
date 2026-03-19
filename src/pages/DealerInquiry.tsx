import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Building2, MapPin, Phone, Mail, User, FileText, CheckCircle } from "lucide-react";
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

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const businessTypes = [
  "Distributor",
  "Wholesaler",
  "Retailer",
  "Super Stockist",
  "Institutional Buyer",
  "Export Partner"
];

const formSchema = z.object({
  businessName: z.string().trim().min(2, "Business name must be at least 2 characters").max(100, "Business name must be less than 100 characters"),
  contactPerson: z.string().trim().min(2, "Contact person name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  businessType: z.string().min(1, "Please select a business type"),
  state: z.string().min(1, "Please select a state"),
  city: z.string().trim().min(2, "City name must be at least 2 characters").max(100, "City name must be less than 100 characters"),
  existingBusiness: z.string().trim().max(500, "Description must be less than 500 characters").optional(),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
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
    // In a real app, this would send to a backend
    console.log("Dealer inquiry submitted");
    setIsSubmitted(true);
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Our team will contact you within 24-48 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <div className="bg-background rounded-3xl shadow-premium p-8 md:p-12 max-w-lg w-full text-center animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-mustard/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-mustard" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Thank You for Your Interest!
          </h2>
          <p className="text-muted-foreground mb-8">
            We've received your dealer/distributor inquiry. Our business development team will review your application and contact you within 24-48 hours.
          </p>
          <Button onClick={() => navigate("/")} variant="default" size="lg">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16 md:h-20">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Home</span>
            </button>
            <div className="flex-1 flex justify-center">
              <a href="/" className="flex items-center gap-2">
                <img src="/lovable-uploads/28b73be5-c0c9-4635-a301-cfa2d2c218e9.png" alt="Double Hathi Logo" className="w-12 h-12 object-contain" />
                <span className="font-display font-bold text-foreground text-lg hidden sm:block">Double Hathi</span>
              </a>
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Become a Double Hathi Partner
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Join our growing network of distributors and dealers. Partner with a trusted brand serving Indian households since 1989.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-3xl shadow-premium p-6 md:p-10">
              <div className="mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Dealer/Distributor Inquiry Form
                </h2>
                <p className="text-muted-foreground">
                  Fill in the details below and our team will get in touch with you.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Business Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-mustard" />
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
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
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
                      <User className="w-5 h-5 text-mustard" />
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
                      <MapPin className="w-5 h-5 text-mustard" />
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
                                  <SelectItem key={state} value={state}>
                                    {state}
                                  </SelectItem>
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
                      <FileText className="w-5 h-5 text-mustard" />
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

                  <Button type="submit" size="lg" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-center text-muted-foreground">
              <p className="mb-2">For immediate assistance, contact us:</p>
              <p className="text-mustard font-medium">+91 79767 08372</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealerInquiry;
