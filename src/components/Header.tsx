import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    href: "/",
    label: "Home"
  }, {
    href: "#about",
    label: "About"
  }, {
    href: "#products",
    label: "Products"
  }, {
    href: "#benefits",
    label: "Benefits"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Double Hathi Logo" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-soft" />
            <div className="hidden sm:block">
              <p className="font-display text-foreground leading-tight text-lg font-extrabold">Double Hathi</p>
              <p className="text-xs text-muted-foreground">Since 1989</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                {link.label}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="lg">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>)}
            <Button variant="default" className="mt-2">
              Order Now
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;