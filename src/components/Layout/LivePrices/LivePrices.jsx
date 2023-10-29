import { prices } from "../../../database/items-database";
import { motion } from "framer-motion";

import donuts from "../../../assets/donuts.png";
import Card from "../../UI/Card";
import { priceCardVariants } from "../../../database/variants";
import mobile_bg from "../../../assets/prices-bg.png";

const isMobile = window.innerWidth < 768;

let priceCardPosition = {};

if (!isMobile) {
  priceCardPosition = priceCardVariants;
}

const LivePrices = ({ value }) => {
  const { theme } = value;

  return (
    <div className="mt-20 lg:mt-36 flex flex-col items-center md:flex-row justify-center relative">
      <img
        src={mobile_bg}
        className="absolute -bottom-24 h-[1200px] md:hidden"
        alt=""
      />
      <img
        src={donuts}
        className="absolute z-0 w-screen hidden md:block bottom-0 lg:-bottom-32"
        alt=""
      />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={priceCardPosition}>
          <Card theme={theme}>
            <div className="flex flex-col items-center md:flex-row lg:gap-24 py-6 px-7 lg:py-0 lg:px-0 w-[326px] md:w-full rounded-[30px] lg:bg-none">
              {prices.map((item) => (
                <div
                  className="flex flex-row-reverse items-center md:flex-col gap-10 lg:gap-4 font-['Montserrat'] text-center py-8 relative z-10"
                  key={item.id}
                >
                  <h1 className="font-bold text-xl lg:text-[32px] w-[136px]">
                    {item.price}
                  </h1>
                  <div className="flex flex-col w-[135px] lg:w-full">
                    <p
                      className={`${
                        theme ? "text-[#B6B6B6]" : "text-black"
                      } text-sm lg:text-lg font-medium`}
                    >
                      {item.keyphrase_one}
                    </p>
                    <span className="text-[#353688] text-base lg:text-2xl font-medium">
                      {item.keyphrase_two}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LivePrices;
