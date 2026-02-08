import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/ui/motion-wrapper";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Facebook,
    href: "#",
    label: "Facebook"
  }, {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }, {
    icon: Twitter,
    href: "#",
    label: "Twitter"
  }, {
    icon: Youtube,
    href: "#",
    label: "Youtube"
  }];
  return <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4">
        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <StaggerItem className="md:col-span-1">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-40 h-40 items-center justify-center flex flex-row mx-0 my-0">
                <img alt="Double Hathi Logo" className="w-full h-full object-contain drop-shadow-md border-double" src="/lovable-uploads/f3e306a9-f1d2-4051-898c-a8315880477c.png" />
              </div>
              <div>
                <p className="font-display font-bold text-xl">Double Hathi</p>
                <p className="text-xs text-background/60 font-medium">Since 1989</p>
              </div>
            </div>
            <p className="text-mustard-light font-bold text-sm mb-3">
              "Sehat ka Mazboot Saathi - Shuddh Kachi Ghani"
            </p>
            <p className="text-background/70 text-sm leading-relaxed">
              Bringing the authentic taste and purity of Kachi Ghani mustard oil
              to Indian households for over three decades.
            </p>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <h4 className="font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/70">
              {[{
              href: "#home",
              label: "Home"
            }, {
              href: "#about",
              label: "About Us"
            }, {
              href: "#products",
              label: "Products"
            }, {
              href: "#benefits",
              label: "Health Benefits"
            }, {
              href: "#contact",
              label: "Contact"
            }].map(link => <li key={link.href}>
                  <a href={link.href} className="hover:text-mustard-light transition-colors inline-block">
                    {link.label}
                  </a>
                </li>)}
              <li>
                <Link to="/dealer-inquiry" className="hover:text-mustard-light transition-colors inline-block">
                  Become a Dealer
                </Link>
              </li>
            </ul>
          </StaggerItem>

          {/* Products */}
          <StaggerItem>
            <h4 className="font-bold text-lg mb-5">Our Products</h4>
            <ul className="space-y-3 text-sm text-background/70">
              {["1 Litre Pack", "500ml Pack", "5 Litre Tin", "15 Litre Tin", "Bulk Orders"].map(product => <li key={product}>
                    <a href="#products" className="hover:text-mustard-light transition-colors inline-block">
                      {product}
                    </a>
                  </li>)}
            </ul>
          </StaggerItem>

          {/* Sustainability */}
          <StaggerItem>
            <h4 className="font-bold text-lg mb-5">Sustainability</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <span className="text-mustard-light text-lg">♻️</span>
                <span>Recyclable Pouches – Our packaging is eco-friendly and recyclable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mustard-light text-lg">☀️</span>
                <span>Solar Powered – Our factory runs on clean solar energy</span>
              </li>
            </ul>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <h4 className="font-bold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="font-bold text-background">ADITYA OIL INDUSTRIES</li>
              <li>51, Old Industrial Area</li>
              <li>Bharatpur - 321001</li>
              <li>Rajasthan, India</li>
              <li className="text-mustard-light pt-2">
                <a href="tel:+917976708372" className="hover:underline block">
                  +91 79767 08372
                </a>
                <a href="tel:+919414376910" className="hover:underline block">
                  +91 94143 76910
                </a>
              </li>
              <li>
                <a href="mailto:info@doublehathioil.com" className="text-mustard-light hover:underline">
                  info@doublehathioil.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(social => <HoverScale key={social.label} scale={1.1}>
                  <a href={social.href} aria-label={social.label} className="w-11 h-11 rounded-full bg-background/10 flex items-center justify-center hover:bg-mustard/30 transition-colors">
                    <social.icon className="w-5 h-5" />
                  </a>
                </HoverScale>)}
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* FSSAI License */}
        <FadeIn delay={0.3}>
          <div className="border-t border-background/10 pt-10 mb-8 text-center">
            <p className="text-background/70 text-2xl md:text-3xl">
              <span className="font-bold text-mustard-light">FSSAI License No:</span>{" "}
              10012013000260
            </p>
          </div>
        </FadeIn>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>&copy; {currentYear} Double Hathi. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-mustard-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-mustard-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;