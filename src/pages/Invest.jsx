import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Scads from "../components/Layout/InvestCards/Scads";
import TWINE from "../components/Layout/InvestCards/Lavish";

import { investPageVariants, opacityVariants } from "../Tools/variants";
import cross_dark from "../assets/cross_dark.svg";
import cross_light from "../assets/cross_light.svg";
import Card from "../components/UI/Card";

const isMobile = window.innerWidth < 768;
let toggle = {};

if (!isMobile) {
  toggle = investPageVariants;
}

const Invest = ({ value }) => {
  const [active, setIsActive] = useState(false);

  const scadsBtnClickHandler = () => {
    setIsActive(false);
  };

  const twineBtnClickHandler = () => {
    setIsActive(true);
  };

  const { theme, onScreen, setOnScreen } = value;

  useEffect(() => {
    if (onScreen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [onScreen]);

  const closeCard = () => {
    setOnScreen(false);
  };
  return (
    <AnimatePresence mode="wait">
      {onScreen && (
        <motion.main
          initial="offscreen"
          whileInView="onscreen"
          exit="offscreen"
          transition={{ duration: 0.3 }}
          variants={toggle}
          className={`lg:overflow-hidden lg:w-screen hidden lg:flex justify-center lg:top-24 z-50 relative lg:fixed`}
        >
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={opacityVariants}
          >
            <div
              className="absolute h-screen w-full bg-transparent left-0"
              onClick={closeCard}
            ></div>
          </motion.div>
          <Card
            theme={theme}
            className="overflow-x-hidden lg:h-[80vh] lg:w-10/12 lg:backdrop-blur-md relative"
          >
            <div
              className={`container mx-auto flex flex-col justify-center items-center h-full font-['Poppins'] relative z-10 ${
                theme ? "text-white" : "text-black"
              }`}
            >
              <button className="absolute right-0 top-10" onClick={closeCard}>
                <img
                  src={theme ? cross_light : cross_dark}
                  className="max-w-[50px]"
                  alt="cross"
                />
              </button>
              <div className="flex justify-center gap-10 lg:gap-10">
                <button
                  onClick={scadsBtnClickHandler}
                  className={`${
                    active
                      ? "opacity-50"
                      : "underline underline-offset-8 opacity-100"
                  }`}
                >
                  SCADS
                </button>
                <button
                  onClick={twineBtnClickHandler}
                  className={
                    active
                      ? "underline underline-offset-8 opacity-100"
                      : " opacity-50"
                  }
                >
                  TWINE
                </button>
              </div>
              <div className="mt-11 lg:mt-4 xl:mt-11">
                <AnimatePresence mode="wait">
                  {!active && <Scads value={value} key={"scads"} />}
                  {active && (
                    <TWINE value={value} active={active} key={"TWINE"} />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Card>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default Invest;
