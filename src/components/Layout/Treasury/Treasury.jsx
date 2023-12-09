import { motion } from "framer-motion";

import Card from "../../UI/Card";
import { treasuryCards } from "../../../Tools/items-database";
import {
  treasuryCardVariants,
  opacityVariants,
  fromTop,
  fromBottom,
} from "../../../Tools/variants";
import {} from "../../../Tools/variants";

import dotted_line from "../../../assets/dotted_line.svg";
import scads from "../../../assets/scads_symbol_lighttheme.svg";
import twine from "../../../assets/twine_symbol_darktheme.png";

const textOpacity = opacityVariants;
const cardVariants = treasuryCardVariants;

const Treasury = ({ value }) => {
  const { theme } = value;

  return (
    <div className="container mx-auto flex flex-col items-center font-['Poppins'] mt-28 relative">
      <motion.img
        src={dotted_line}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.8 }}
        variants={fromTop}
        className="hidden md:block absolute left-1/3 -top-20"
        alt="line"
      />
      <motion.img
        src={dotted_line}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.8 }}
        variants={fromBottom}
        className="hidden md:block absolute right-1/3 top-8"
        alt="line"
      />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={textOpacity}
        className="text-center flex justify-center"
      >
        <div>
          <h1 className="md:text-[40px] text-[#B52761] font-bold">Treasury</h1>
          <span className={`text-2xl font-medium ${theme && "text-[#B6B6B6]"}`}>
            Balance
          </span>
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center gap-10 md:gap-8 w-[265px] md:w-3/4 lg:w-[240px] lg:h-[220px] xl:w-[240px] mx-auto mt-10">
        {treasuryCards.map((item) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants(item)}
            key={item.id}
          >
            <Card
              theme={theme}
              className="flex flex-col items-center justify-center xl:justify-end py-5 lg:py-6 w-[265px] md:w-[170px] lg:w-[190px] xl:w-[220px] 2xl:w-[270px] md:h-full md:mt-0"
            >
              <span className="text-[#B52761] text-2xl font-semibold">
                {item.name}
              </span>
              <span
                className={`text-base md:text-lg ${
                  theme ? "text-[#B6B6B6]" : "text-[#424242]"
                }`}
              >
                Balance
              </span>
              <div className="flex items-center justify-center gap-1 max-w-[165px] lg:max-w-[186px] md:h-[44px] pt-4">
                {item.id === "c2" && (
                  <img
                    src={scads}
                    alt="symbol"
                    width={10}
                    className={`${theme ? "contrast-50" : "invert"}`}
                  />
                )}
                {item.id === "c3" && (
                  <img
                    src={twine}
                    alt="symbol"
                    className={`${theme ? "invert contrast-[.4]" : ""}`}
                    width={8}
                  />
                )}
                <p
                  className={`${
                    theme ? "text-[#B6B6B6]" : "text-black"
                  } text-base lg:text-2xl text-medium font-['Montserrat']`}
                >
                  {item.amount}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Treasury;
