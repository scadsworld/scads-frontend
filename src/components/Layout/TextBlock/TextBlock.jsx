import { motion } from "framer-motion";
import { predictabilityText } from "../../../Tools/items-database";
import { fromTop, fromBottom, opacityVariants } from "../../../Tools/variants";

import dotted_line from "../../../assets/dotted_line.svg";

const textOpacity = opacityVariants;

const TextBlock = ({ value }) => {
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
        className="flex flex-col justify-center items-center relative"
      >
        <motion.img
          src={dotted_line}
          initial="offscreen"
          whileInView="onscreen"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          variants={fromTop}
          className="absolute right-0 top-[21%]"
          alt="dotted line"
        />
        <motion.img
          src={dotted_line}
          initial="offscreen"
          whileInView="onscreen"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          variants={fromBottom}
          className="absolute -left-4 top-[80%]"
          alt="dotted line"
        />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          variants={fromTop}
        >
          <h1 className="font-['Poppins'] font-bold text-2xl text-center lg:text-[40px] max-w-[340px] md:max-w-[888px] leading-normal md:leading-tight">
            {predictabilityText.title}
          </h1>
        </motion.div>
        <p className="font-['Poppins'] text-base lg:text-base mt-[51px] max-w-[328px] md:max-w-[600px] lg:max-w-[822px] flex flex-col gap-1">
          <span>{predictabilityText.text_1}</span> <br />
          <span>{predictabilityText.text_2}</span> <br />
          <span>{predictabilityText.text_3}</span> <br />
          <span>{predictabilityText.text_4}</span> <br />
        </p>
      </motion.div>
    </div>
  );
};

export default TextBlock;
