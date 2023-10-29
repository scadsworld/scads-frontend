import { Link } from "react-router-dom";

import { headerText } from "../../../database/items-database";
import dark_gif from "../../../assets/animated-hax-cle.gif";
import gif from "../../../assets/51ed02b4839f2b9e42c3bc647aff0de0.gif";

const Header = ({ value }) => {
  const { theme, setOnScreen } = value;

  return (
    <div className="bg-[url('../src/assets/mobile_header.png')] bg-contain bg-pos-100 md:bg-none">
      <div className="container mx-auto flex justify-start font-['Lato'] h-screen pb-20 pt-32 lg:pb-0 relative overflow-hidden">
        <div
          className={`flex flex-col justify-center items-center lg:items-start text-center lg:text-start gap-12 lg:gap-11 text-black h-full xl:mx-20 z-10 ${
            theme ? "text-white" : "text-black"
          }`}
        >
          <h1 className="text-[26px] lg:text-5xl xl:text-[56px] font-black max-w-[329px] lg:max-w-[710px] leading-tight whitespace-break-spaces">
            {headerText.title}
          </h1>
          <h2 className="text-lg lg:text-2xl lg:max-w-[460px]">
            {headerText.subTitle}
          </h2>
          <p className="text-base text-center lg:text-start lg:text-lg lg:max-w-[619px]">
            {headerText.text}
          </p>
          <button
            onClick={() => setOnScreen(true)}
            className="hidden lg:block font-['Montserrat'] text-white text-lg font-bold rounded-[10px] py-3 px-7 bg-gradient-to-r from-[#6F51FA] via-[#DF52E9] to-[#6F51FA] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
          >
            Invest Now
          </button>
          <Link
            to="/invest"
            className="font-['Montserrat'] text-white text-lg font-bold rounded-[10px] py-3 px-7 bg-gradient-to-r from-[#6F51FA] via-[#DF52E9] to-[#6F51FA] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 lg:hidden"
          >
            Invest now
          </Link>
        </div>
        {theme === false && (
          <img
            src={gif}
            className="absolute z-0 lg:-right-96 xl:top-0 xl:-right-96 2xl:top-0 2xl:-right-[500px] hidden lg:block saturate-150"
            alt="animation"
          />
        )}
        {theme && (
          <img
            src={dark_gif}
            className="absolute z-0 lg:-right-96 xl:top-28 xl:-right-96 2xl:top-28 2xl:-right-[500px] hidden lg:block saturate-150"
            alt="animation"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
