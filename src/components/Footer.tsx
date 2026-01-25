import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                <img src={logo} alt="Double Hathi Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">Double Hathi</p>
                <p className="text-xs text-background/60">Since 1989</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Bringing the authentic taste and purity of Kachi Ghani mustard oil 
              to Indian households for over three decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#home" className="hover:text-mustard-light transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-mustard-light transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-mustard-light transition-colors">Products</a></li>
              <li><a href="#benefits" className="hover:text-mustard-light transition-colors">Health Benefits</a></li>
              <li><a href="#contact" className="hover:text-mustard-light transition-colors">Contact</a></li>
              <li><Link to="/dealer-inquiry" className="hover:text-mustard-light transition-colors">Become a Dealer</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#products" className="hover:text-mustard-light transition-colors">1 Litre Pack</a></li>
              <li><a href="#products" className="hover:text-mustard-light transition-colors">500ml Pack</a></li>
              <li><a href="#products" className="hover:text-mustard-light transition-colors">5 Litre Tin</a></li>
              <li><a href="#products" className="hover:text-mustard-light transition-colors">15 Litre Tin</a></li>
              <li><a href="#products" className="hover:text-mustard-light transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="font-semibold text-background">ADITYA OIL INDUSTRIES</li>
              <li>51, Old Industrial Area</li>
              <li>Bharatpur - 321001</li>
              <li>Rajasthan, India</li>
              <li className="text-mustard-light">
                <div>+91 79767 08372</div>
                <div>+91 94143 76910</div>
              </li>
              <li className="text-mustard-light">info@doublehathioil.com</li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-mustard/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-mustard/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-mustard/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-mustard/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* FSSAI License */}
        <div className="border-t border-background/10 pt-8 mb-6 text-center">
          <p className="text-background/70 text-sm">
            <span className="font-semibold text-mustard-light">FSSAI License No:</span> 10012013000260
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>&copy; {currentYear} Double Hathi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-mustard-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-mustard-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
