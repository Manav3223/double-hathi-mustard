import { Check } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  "100% Kachi Ghani",
  "No Adulteration",
  "Lab Tested",
  "Trusted by Thousands",
];

const TrustBar = () => {
  return (
    <section className="bg-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12 lg:gap-x-16">
          {trustItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20">
                <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
              </span>
              <span className="text-cream text-sm md:text-base font-medium tracking-wide">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
