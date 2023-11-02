import { tokenomicsHeaderText } from "../../../Tools/items-database";
import {
  opacityVariants,
  tokenomicsCardVariants,
} from "../../../Tools/variants";
import Carousel from "./Carousel";
import Card from "../../UI/Card";
import { motion } from "framer-motion";

import proccess from "../../../assets/Proccess.webp";
import proccess_dark from "../../../assets/proccess-dark.webp";
import cone from "../../../assets/Cone.svg";
import sphere from "../../../assets/Sphere.svg";
import cube from "../../../assets/Cube.svg";
import small_cone from "../../../assets/Blue-Glossy.svg";
import large_cube from "../../../assets/cube_large.svg";

const isMobile = window.innerWidth < 768;

let fromBottom = {};
if (!isMobile) {
  fromBottom = tokenomicsCardVariants;
}
const textOpacity = opacityVariants;

const Tokenomics = ({ value }) => {
  const { theme } = value;

  return (
    <div className="bg-[url('../src/assets/mobile_tokenomics.webp')] bg-contain bg-no-repeat md:bg-none lg:mt-72">
      <div className="container mx-auto relative scroll-mt-32" id="tokenomics">
        <img
          src={cone}
          className="absolute -right-16 -top-20 hidden lg:block"
          alt="shapes"
        />
        <img
          src={sphere}
          className="absolute bottom-80 right-32 hidden lg:block"
          alt="shapes"
        />
        <img
          src={cube}
          className="absolute top-36 left-2/3 hidden lg:block"
          alt="shapes"
        />
        <img
          src={large_cube}
          className="absolute bottom-40 left-0 hidden lg:block"
          alt="shapes"
        />
        <img
          src={small_cone}
          className="absolute top-56 right-2/3 hidden lg:block"
          alt="shapes"
        />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fromBottom}
        >
          <Card
            className="container mx-auto mt-24 lg:mt-[196px] rounded-[50px] max-w-[340px] md:max-w-none lg:max-w-[1200px] xl:max-w-none"
            theme={theme}
          >
            <div
              className={`container mx-auto flex flex-col items-center text-center font-['Poppins'] py-9 ${
                theme ? "text-[#B6B6B6]" : "text-black"
              }`}
            >
              <h1 className="text-2xl lg:text-[40px] font-bold">
                {tokenomicsHeaderText.title}
              </h1>
              <p className="text-base lg:text-xl max-w-[342px] lg:max-w-[791px] mt-11">
                {tokenomicsHeaderText.text}
              </p>
              <Carousel value={value} />
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={textOpacity}
          className="flex justify-center mt-28 md:mt-24 w-[323px] lg:w-[672px] mx-auto"
        >
          {theme && <img src={proccess} alt="proccess" />}
          {theme === false && <img src={proccess_dark} alt="proccess" />}
        </motion.div>
      </div>
    </div>
  );
};

export default Tokenomics;
