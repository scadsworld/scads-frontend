import { useState } from "react";

import Scads from "../components/Layout/InvestCards/Scads";
import InvestCarouselMobile from "../components/Layout/InvestCards/InvestCarouselMobile";

const InvestMobile = ({ value }) => {
  const [active, setIsActive] = useState(false);

  const scadsBtnClickHandler = () => {
    setIsActive(false);
  };

  const TWINEBtnClickHandler = () => {
    setIsActive(true);
  };

  const { theme } = value;

  return (
    <div className="container m-auto flex flex-col items-center justify-center h-screen mt-16">
      <div
        className={`flex justify-center gap-10 lg:gap-10 ${
          theme ? "text-white" : "text-black"
        }`}
      >
        <button
          onClick={scadsBtnClickHandler}
          className={`${
            active ? "opacity-50" : "underline underline-offset-8 opacity-100"
          }`}
        >
          SCADS
        </button>
        <button
          onClick={TWINEBtnClickHandler}
          className={
            active ? "underline underline-offset-8 opacity-100" : " opacity-50"
          }
        >
          TWINE
        </button>
      </div>
      <h1 className={`text-xl mt-11 ${theme ? "text-white" : "text-black"}`}>
        PROOF ON CONCEPT
      </h1>
      {!active && (
        <Scads
          value={value}
          className={`${active ? "opacity-0" : "opacity-100"}`}
        />
      )}
      {active && <InvestCarouselMobile value={value} />}
    </div>
  );
};

export default InvestMobile;
