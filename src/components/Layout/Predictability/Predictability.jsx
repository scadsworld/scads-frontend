import { motion } from "framer-motion";
import { predictabilityText } from "../../../Tools/items-database";
import { opacityVariants } from "../../../Tools/variants";

const textOpacity = opacityVariants;

const Predictability = ({ value }) => {
  const { theme } = value;

  return (
    <div
      className={`container mx-auto flex flex-col justify-center items-center mt-16 lg:mt-32 lg:scroll-mt-28 xl:scroll-mt-36 2xl:scroll-mt-44 ${
        theme && "text-[#B6B6B6]"
      }`}
      id="textSection"
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        variants={textOpacity}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="font-['Poppins'] font-bold text-2xl text-center lg:text-[40px] max-w-[340px] md:max-w-[640px] leading-normal md:leading-tight">
          {predictabilityText.title}
        </h1>
        <p className="font-['Poppins'] text-base lg:text-lg mt-[51px] max-w-[328px] md:max-w-[600px] lg:max-w-[1000px] flex flex-col gap-1">
          <span>{predictabilityText.text_1}</span> <br />
          <span>{predictabilityText.text_2}</span> <br />
          <span>{predictabilityText.text_3}</span> <br />
          <span>{predictabilityText.text_4}</span> <br />
        </p>
      </motion.div>
    </div>
  );
};

export default Predictability;
