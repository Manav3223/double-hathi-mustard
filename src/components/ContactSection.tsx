import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, HoverScale } from "@/components/ui/motion-wrapper";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    content: (<>ADITYA OIL INDUSTRIES<br />51, Old Industrial Area,<br />Bharatpur, Rajasthan 321001</>),
  },
  {
    icon: Phone,
    title: "Phone",
    content: (<>+91 79767 08372<br />+91 94143 76910</>),
    isClickable: true,
    href: "tel:+917976708372",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@doublehathioil.com",
    isClickable: true,
    href: "mailto:info@doublehathioil.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: (<>Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: 10:00 AM - 4:00 PM</>),
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-36 bg-background overflow-hidden texture-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn direction="left">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.25em]">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="text-primary block mt-1">Together</span>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
              Whether you're a retailer looking to stock India's most trusted mustard oil,
              or a family wanting to place an order — we'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base">{item.title}</h4>
                    {item.isClickable ? (
                      <a href={item.href} className="text-muted-foreground mt-1 block hover:text-primary transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground mt-1">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-premium border border-border">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  />
                </div>
                <HoverScale scale={1.01}>
                  <Button type="submit" variant="default" size="lg" className="w-full text-lg py-6 shadow-lg">
                    Send Message
                  </Button>
                </HoverScale>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
