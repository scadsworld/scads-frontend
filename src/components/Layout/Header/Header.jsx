import { Link } from "react-router-dom";

import { headerText } from "../../../database/items-database";

const Header = () => {
  return (
    <div className="bg-[url('../src/assets/Header-bg-mobile.png')] lg:bg-[url('../src/assets/header-bg.png')] bg-cover lg:h-screen">
      <div className="container mx-auto flex flex-col justify-center items-center font-['Lato'] text-center gap-12 lg:gap-11 text-white h-full pb-20 pt-32">
        <h1 className="text-[26px] lg:text-[64px] max-w-[329px] lg:max-w-[820px]">
          {headerText.title}
        </h1>
        <h2 className="text-lg lg:text-2xl max-w-[794px]">
          {headerText.subTitle}
        </h2>
        <p className="text-base lg:text-lg max-w-[683px]">{headerText.text}</p>
        <Link
          to="/invest"
          className="font-['Montserrat'] text-lg font-bold border-2 rounded-[30px] py-3 px-7 hover:border-[#7768E5] transition duration-250"
        >
          Invest now
        </Link>
      </div>
    </div>
  );
};

export default Header;
