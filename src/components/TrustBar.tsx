import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const trustPoints = [
  "100% Kachi Ghani",
  "No Adulteration",
  "Lab Tested",
  "Trusted by Thousands",
];

const TrustBar = () => {
  return (
    <section id="trust" className="bg-secondary py-5 md:py-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-10"
        >
          {trustPoints.map((point, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-mustard-light shrink-0" />
              <span className="text-secondary-foreground text-sm md:text-base font-semibold whitespace-nowrap">
                {point}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
