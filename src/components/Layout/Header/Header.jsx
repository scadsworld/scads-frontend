import { Link } from "react-router-dom";

import { headerText } from "../../../Tools/items-database";
import dark_gif from "../../../assets/animated-hax-cle-copy.gif";
import gif from "../../../assets/51ed02b4839f2b9e42c3bc647aff0de0.gif";

const Header = ({ value }) => {
  const { theme, setOnScreen } = value;

  const handleClickScroll = () => {
    const element = document.getElementById("textSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`bg-[url('../src/assets/mobile_header.webp')] bg-fixed bg-no-repeat md:bg-none ${
        theme === false && "md:bg-[#DBDBDB]"
      } `}
    >
      <div className="container mx-auto flex justify-start font-['Poppins'] pb-20 pt-32 2xl:h-screen lg:pb-0 relative overflow-hidden">
        <div
          className={`flex flex-col justify-center items-center lg:items-start text-center lg:text-start gap-8 2xl:gap-10 lg:py-20 xl:mx-20 z-10 ${
            theme ? "text-[#B6B6B6]" : "text-black"
          }`}
        >
          <h1 className="text-[26px] lg:text-4xl 2xl:text-5xl font-black max-w-[329px] lg:max-w-[350px] 2xl:max-w-[600px]">
            {headerText.title}
          </h1>
          <h2 className=" max-w-[300px] md:max-w-none text-lg lg:text-2xl 2xl:text-3xl">
            {headerText.slogan}
          </h2>
          <h3 className="text-lg lg:text-xl 2xl:text-2xl lg:max-w-[400px] 2xl:max-w-[700px]">
            {headerText.subTitle}
          </h3>
          <p className="text-base font-light lg:font-normal text-center lg:text-start lg:text-base 2xl:text-lg max-w-[340px] md:max-w-[550px] 2xl:max-w-[619px]">
            {headerText.text}
          </p>
          <div className="flex gap-10">
            <button
              onClick={() => setOnScreen(true)}
              className="hidden lg:block font-['Poppins'] text-white text-base 2xl:text-lg font-bold rounded-[30px] py-4 px-8 bg-gradient-to-r from-[#6F51FA] via-[#DF52E9] to-[#6F51FA] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
            >
              Invest Now
            </button>
            <button
              className={`py-4 px-8 bg-none border-2 border-[#7E57FF] transition-all duration-300 hover:border-[#DF52E9] rounded-[30px] font-['Poppins'] text-[#7E57FF] hover:text-[#DF52E9] text-base 2xl:text-lg font-bold`}
              onClick={handleClickScroll}
            >
              Read more
            </button>
            <Link
              to="/invest"
              className="flex items-center font-['Poppins'] text-white text-lg font-bold rounded-3xl py-3 px-7 bg-gradient-to-r from-[#6F51FA] via-[#DF52E9] to-[#6F51FA] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 lg:hidden"
            >
              Invest now
            </Link>
          </div>
        </div>
        {theme === false && (
          <img
            src={gif}
            className="absolute z-0 lg:top-10 lg:-right-96 xl:-top-12 xl:-right-96 2xl:-top-10 2xl:-right-[500px] hidden lg:block saturate-150"
            alt="animation"
          />
        )}
        {theme && (
          <img
            src={dark_gif}
            className="absolute z-0 lg:-right-96 lg:top-36 xl:top-28 xl:-right-96 2xl:top-28 2xl:-right-[400px] hidden lg:block saturate-150"
            alt="animation"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
