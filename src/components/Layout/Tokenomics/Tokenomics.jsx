import { tokenomicsHeaderText } from "../../../Tools/items-database";
import {
  opacityVariants,
  tokenomicsCardVariants,
} from "../../../Tools/variants";
import { motion } from "framer-motion";

import proccess from "../../../assets/Proccess.webp";
import proccess_dark from "../../../assets/proccess-dark.webp";
import TabsLayout from "./Tabs";

const isMobile = window.innerWidth < 768;

let fromBottom = {};
if (!isMobile) {
  fromBottom = tokenomicsCardVariants;
}
const textOpacity = opacityVariants;

const Tokenomics = ({ value }) => {
  const { theme } = value;

  return (
    <>
      <div
        className={` ${
          theme
            ? "md:bg-[url('../src/assets/tokenomics_bg_dark.webp')] bg-center bg-cover"
            : "md:bg-[url('../src/assets/tokenomics_bg_light.webp')] bg-center bg-cover"
        } bg-no-repeat mt-10 lg:mt-0 lg:py-48`}
      >
        <div
          className="container mx-auto relative scroll-mt-32"
          id="tokenomics"
        >
          <div
            className={`container mx-auto flex flex-col items-center text-center font-['Poppins'] py-9 ${
              theme ? "text-[#B6B6B6]" : "text-black"
            }`}
          >
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={opacityVariants}
            >
              <h1 className="text-2xl lg:text-[40px] font-bold">
                {tokenomicsHeaderText.title}
              </h1>
              <p className="text-base lg:text-xl max-w-[342px] lg:max-w-[791px] mt-11">
                {tokenomicsHeaderText.text}
              </p>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={fromBottom}
            >
              <TabsLayout value={{ theme }} />
            </motion.div>
          </div>
        </div>{" "}
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={textOpacity}
        className="flex justify-center w-[323px] lg:w-[672px] mx-auto"
      >
        {theme && <img src={proccess_dark} alt="proccess" />}
        {theme === false && <img src={proccess} alt="proccess" />}
      </motion.div>
    </>
  );
};

export default Tokenomics;
