import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-20">
      <div className="container mx-auto px-4">
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 mb-16">
          {/* Brand */}
          <StaggerItem className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 items-center justify-center flex flex-row shrink-0">
                <img
                  alt="Double Hathi Logo"
                  className="w-full h-full object-contain drop-shadow-md"
                  src="/lovable-uploads/f3e306a9-f1d2-4051-898c-a8315880477c.png"
                />
              </div>
              <div>
                <p className="font-display font-bold text-xl">Double Hathi</p>
                <p className="text-xs text-secondary-foreground/50 font-medium">Since 1989</p>
              </div>
            </div>
            <p className="text-primary font-bold text-sm mb-3 font-accent italic">
              "Sehat ka Mazboot Saathi — Shuddh Kachi Ghani"
            </p>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Three decades of bringing pure, authentic Kachi Ghani mustard oil
              to Indian households — with unwavering commitment to quality.
            </p>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <h4 className="font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/60">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "Our Story" },
                { href: "#products", label: "Products" },
                { href: "#benefits", label: "Health Benefits" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/dealer-inquiry" className="hover:text-primary transition-colors inline-block">
                  Become a Dealer
                </Link>
              </li>
            </ul>
          </StaggerItem>

          {/* Products */}
          <StaggerItem>
            <h4 className="font-bold text-lg mb-5">Our Products</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/60">
              {["1 Litre Pack", "500ml Pack", "5 Litre Tin", "15 Litre Tin", "Bulk Orders"].map((product) => (
                <li key={product}>
                  <a href="#products" className="hover:text-primary transition-colors inline-block">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Sustainability */}
          <StaggerItem>
            <h4 className="font-bold text-lg mb-5">Sustainability</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/60">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">♻️</span>
                <span>Recyclable Pouches — Eco-friendly packaging for a greener tomorrow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">☀️</span>
                <span>Solar Powered — Our factory runs on clean, renewable energy</span>
              </li>
            </ul>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <h4 className="font-bold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li className="font-bold text-secondary-foreground">ADITYA OIL INDUSTRIES</li>
              <li>51, Old Industrial Area</li>
              <li>Bharatpur - 321001</li>
              <li>Rajasthan, India</li>
              <li className="text-primary pt-2">
                <a href="tel:+917976708372" className="hover:underline block">+91 79767 08372</a>
                <a href="tel:+919414376910" className="hover:underline block">+91 94143 76910</a>
              </li>
              <li>
                <a href="mailto:info@doublehathioil.com" className="text-primary hover:underline">
                  info@doublehathioil.com
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <HoverScale key={social.label} scale={1.1}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/25 transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </HoverScale>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* FSSAI License */}
        <FadeIn delay={0.3}>
          <div className="border-t border-secondary-foreground/10 pt-10 mb-8 text-center">
            <p className="text-secondary-foreground/60 text-lg md:text-2xl lg:text-3xl">
              <span className="font-bold text-primary">FSSAI License No:</span> 10012013000260
            </p>
          </div>
        </FadeIn>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/50">
          <p>&copy; {currentYear} Double Hathi. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
