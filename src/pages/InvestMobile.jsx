import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Scads from "../components/Layout/InvestCards/Scads";
import TWINE from "../components/Layout/InvestCards/Twine";

const InvestMobile = ({ value }) => {
  const [active, setIsActive] = useState(false);

  const scadsBtnClickHandler = () => {
    setIsActive(false);
  };

  const twineBtnClickHandler = () => {
    setIsActive(true);
  };

  const { theme } = value;

  return (
    <div className="flex flex-col items-center justify-center md:h-screen mt-24 bg-gradient-to-b from-transparent to-[#FF006820] pb-16">
      <div className={`flex flex-col ${theme ? "text-white" : "text-black"}`}>
        <div className="flex justify-between pt-5">
          <div className="flex items-center gap-4">
            <button
              onClick={scadsBtnClickHandler}
              className={
                active
                  ? "opacity-50"
                  : `border rounded-3xl w-[60px] h-[32px] ${
                      theme ? "border-white" : "border-black"
                    } opacity-100 text-sm`
              }
            >
              Scads
            </button>
            <button
              onClick={twineBtnClickHandler}
              className={
                active
                  ? `border rounded-3xl w-[60px] h-[32px] ${
                      theme ? "border-white" : "border-black"
                    } opacity-100`
                  : "opacity-50"
              }
            >
              Twine
            </button>
          </div>
          <div className={`flex gap-2 ${theme ? "text-white" : "text-black"} `}>
            <div className="flex flex-col items-center gap-1">
              <ul className="list-disc">
                <li>GAS</li>
                <li>SLIPPAGE</li>
                <li>TAX</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span>0.05%</span>
              <span>3%</span>
              <span>3%</span>
            </div>
          </div>
        </div>
        <div className="mt-11">
          <AnimatePresence mode="wait">
            {!active && <Scads value={value} key={"scads"} />}
            {active && <TWINE value={value} active={active} key={"TWINE"} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InvestMobile;
