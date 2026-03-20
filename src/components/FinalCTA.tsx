import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Switch to Pure Mustard Oil Today
          </h2>
          <p className="text-background/70 max-w-lg mx-auto text-base mb-8 leading-relaxed">
            Join thousands of families and dealers who trust Double Hathi
            for purity, taste, and consistent quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dealer-inquiry">
              <Button
                size="xl"
                className="bg-mustard hover:bg-mustard-dark text-foreground font-bold min-w-[220px] gap-2"
              >
                Become a Dealer
                <ArrowRight size={18} />
              </Button>
            </Link>
            <a href="#contact">
              <Button
                variant="outline"
                size="xl"
                className="border-background/30 text-background hover:bg-background/10 min-w-[220px]"
              >
                Contact Us
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTA;
