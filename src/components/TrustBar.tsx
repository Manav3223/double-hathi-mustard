import { Droplets, ShieldCheck, FlaskConical, Users } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  { label: "100% Kachi Ghani", icon: Droplets },
  { label: "Zero Adulteration", icon: ShieldCheck },
  { label: "Lab Tested Quality", icon: FlaskConical },
  { label: "Trusted by Millions", icon: Users },
];

const TrustBar = () => {
  return (
    <section className="bg-secondary py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:gap-x-14 lg:gap-x-20">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary" strokeWidth={2.5} />
              </div>
              <span className="text-secondary-foreground text-sm md:text-base font-semibold tracking-wide">
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
