import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Card from "../../UI/Card";
import { stats } from "../../../Tools/items-database";
import { priceCardVariants } from "../../../Tools/variants";
import scads from "../../../assets/scads_symbol_lighttheme.svg";
import twine from "../../../assets/twine_symbol_darktheme.png";

import StatsTooltip from "./StatsTooltip";

const isMobile = window.innerWidth < 768;

let priceCardPosition = {};

if (!isMobile) {
  priceCardPosition = priceCardVariants;
}

const LiveStats = ({ value }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showInfoClickHandler = () => {
    setShowInfo(!showInfo);
  };

  const { theme } = value;

  return (
    <div className="relative mt-10">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="text-center md:text-[40px] text-[#B52761] font-bold">
          Live
        </h1>
        <span className={`text-2xl font-medium ${theme && "text-[#B6B6B6]"}`}>
          Statistics
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={priceCardPosition}
        >
          <Card
            theme={theme}
            className="container mx-auto flex flex-col py-8 xl:max-w-[1220px] 2xl:w-[1480px] 2xl:max-w-none"
          >
            <div className="flex flex-col items-center lg:flex-row justify-center gap-8 lg:gap-8 xl:gap-16 2xl:gap-28 py-6 px-7 lg:py-0 lg:px-0 w-[326px] md:w-full rounded-[30px]">
              {stats.map((item) => (
                <div
                  className="flex flex-row-reverse items-center lg:flex-col gap-10 md:gap-56 lg:gap-4 font-['Poppins'] lg:text-center relative z-10"
                  key={item.id}
                >
                  <div className="flex justify-center items-center gap-1 min-w-[135px] md:min-w-[200px] lg:min-w-[110px]">
                    {(item.id === "funds" ||
                      item.id === "held" ||
                      item.id === "increase") && (
                      <img
                        src={scads}
                        alt="symbol"
                        width={14}
                        className={`${theme ? "contrast-50" : "invert"}`}
                      />
                    )}
                    {item.id === "supply" && (
                      <img
                        src={twine}
                        alt="symbol"
                        className={`${theme ? "invert contrast-[.4]" : ""}`}
                        width={12}
                      />
                    )}
                    <h1 className="font-bold font-['Montserrat'] text-center text-xl md:text-[32px]">
                      {item.price}
                    </h1>
                  </div>
                  <div className="flex flex-col w-[135px] md:w-[127px] lg:w-full">
                    <p
                      className={`${
                        theme ? "text-[#B6B6B6]" : "text-black"
                      } text-sm md:text-lg font-medium`}
                    >
                      {item.keyphrase_one}
                    </p>
                    <span className="text-[#B52761] text-base md:text-2xl font-medium">
                      {item.keyphrase_two}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button
                className={`py-1 px-4 bg-none border-2 border-[#B52761] transition-all duration-300 hover:border-[#655780] rounded-[30px] font-['Poppins'] text-[#B52761] hover:text-[#655780] text-xs font-bold`}
                onClick={showInfoClickHandler}
              >
                {!showInfo ? "Info" : "Hide"}
              </button>
            </div>
            {/* Tooltip */}
            <AnimatePresence>{showInfo && <StatsTooltip />}</AnimatePresence>
            {/* Tooltip */}
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveStats;
