import { Droplets, ShieldCheck, FlaskConical, Users } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  { label: "100% Kachi Ghani", icon: Droplets },
  { label: "No Adulteration", icon: ShieldCheck },
  { label: "Lab Tested", icon: FlaskConical },
  { label: "Trusted by Thousands", icon: Users },
];

const TrustBar = () => {
  return (
    <section className="bg-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12 lg:gap-x-16">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <item.icon className="w-5 h-5 text-primary" strokeWidth={2} />
              <span className="text-cream text-sm md:text-base font-medium tracking-wide">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
