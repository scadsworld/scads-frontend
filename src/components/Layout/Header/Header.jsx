import { Link } from "react-router-dom";

import { headerText } from "../../../Tools/items-database";

import header_img_light from "../../../assets/header_cube_light.svg";
import header_img_dark from "../../../assets/header_img_dark.webp";

const Header = ({ value }) => {
  const { theme, setOnScreen } = value;

  const handleClickScroll = () => {
    const element = document.getElementById("textSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${theme === false && "bg-[E2E6E9]"} `}>
      <div className="container mx-auto flex justify-center items-center font-['Poppins'] pb-20 pt-32 2xl:h-screen lg:pb-0 relative overflow-hidden">
        <div
          className={`flex flex-col justify-center items-center lg:items-start gap-8 lg:py-20 xl:mx-20 z-10 lg:w-1/2 ${
            theme ? "text-[#B6B6B6]" : "text-black"
          }`}
        >
          <h1 className="text-[26px] lg:text-4xl 2xl:text-5xl font-black max-w-[300px] lg:max-w-none text-center lg:text-start">
            {headerText.title}
          </h1>
          <h2 className="max-w-[300px] md:max-w-none font-semibold text-xl text-center lg:text-start">
            {headerText.slogan}
          </h2>
          <h3 className="text-xl font-semibold max-w-[350px] lg:max-w-none 2xl:max-w-[700px] text-center lg:text-start">
            {headerText.subTitle}
          </h3>
          <ul className="text-base font-light lg:font-normal text-center lg:text-start lg:text-base 2xl:text-lg flex flex-col list-none max-w-[330px] mx-auto lg:max-w-none">
            <li>{headerText.text[0]}</li>
            <li>{headerText.text[1]}</li>
            <li>{headerText.text[2]}</li>
            <li>{headerText.text[3]}</li>
          </ul>
          <div className="flex items-center gap-2 md:gap-10">
            <button
              onClick={() => setOnScreen(true)}
              className="hidden lg:block font-['Poppins'] text-white text-base 2xl:text-lg font-bold rounded-[30px] py-4 px-8 bg-gradient-to-r from-[#655780] via-[#BF205D] to-[#BF205D] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
            >
              Invest Now
            </button>
            <button
              className="text-center py-3 px-4 md:py-4 md:px-8 border-2 border-[#BF205D] transition-all duration-300 hover:border-[#655780] rounded-3xl md:rounded-[30px] font-['Poppins'] text-[#BF205D] hover:text-[#655780] text-sm md:text-base 2xl:text-lg font-bold"
              onClick={handleClickScroll}
            >
              Read more
            </button>
            <Link
              to="/story"
              className="text-center py-3 px-4 md:py-4 md:px-8 border-2 border-[#BF205D] transition-all duration-300 hover:border-[#655780] rounded-3xl md:rounded-[30px] font-['Poppins'] text-[#BF205D] hover:text-[#655780] text-sm md:text-base 2xl:text-lg font-bold"
            >
              Our story
            </Link>
            <Link
              to="/invest"
              className="flex text-center items-center font-['Poppins'] text-white text-sm md:text-base font-bold rounded-3xl md:rounded-[30px] py-3 px-4 md:py-4 md:px-8 bg-gradient-to-r from-[#655780] via-[#BF205D] to-[#C01F5C] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 lg:hidden"
            >
              Invest now
            </Link>
          </div>
        </div>
        <div>
          {theme === false ? (
            <img src={header_img_light} fetchpriority="high" className="hidden lg:block" alt="header light mode" />
          ) : (
            <img src={header_img_dark} fetchpriority="high" className="hidden px-20 lg:block" alt="header dark mode" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
