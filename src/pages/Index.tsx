import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CookingUses from "@/components/CookingUses";
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
        <AboutSection />
        <WhyChooseSection />
        <ProcessSection />
        <ProductsSection />
        <BenefitsSection />
        <CookingUses />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
