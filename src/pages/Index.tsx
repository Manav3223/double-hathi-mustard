import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProductHighlight from "@/components/ProductHighlight";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CookingUsesSection from "@/components/CookingUsesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <WhyChooseSection />
        <ProductHighlight />
        <ProductsSection />
        <BenefitsSection />
        <CookingUsesSection />
        <TestimonialsSection />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
