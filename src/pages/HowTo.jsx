import { motion } from "framer-motion";
import { howToItems } from "../Tools/items-database";
import HowToItem from "../components/Layout/HowTo/HowToItem";
import { howToCardVariants } from "../Tools/variants";

const cardVariants = howToCardVariants;

const HowTo = ({ value }) => {
  const { theme } = value;

  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#FF006820]">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto flex flex-col items-center gap-20 mt-40 font-['Poppins'] overflow-hidden pb-20"
      >
        <h1 className={`${theme ? "text-[#B6B6B6]" : "text-black"} font-bold text-center text-[40px]`}>How To</h1>
        <div className="relative flex flex-col flex-wrap items-start justify-center md:flex-row gap-x-8 gap-y-10 md:gap-y-0">
          {howToItems.map((step, index) => (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants(step)}
              key={index}
            >
              <HowToItem step={step} value={value} />
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  );
};

export default HowTo;
