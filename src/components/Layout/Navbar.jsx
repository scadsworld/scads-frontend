import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo_light from "../../assets/logo_light.svg";
import logo_dark from "../../assets/logo_dark.svg";
import address_icon from "../../assets/addresses.svg";
import globe from "../../assets/Earth Globe.svg";

import ThemeToggler from "../UI/ThemeToggler";

import Card from "../UI/Card";
import MobileNav from "../UI/MobileNav";

const Navbar = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setOnScreen, onScreen } = value;

  let textClass = "text-[#B6B6B6]";
  let bgClass = "";

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  if (theme) {
    textClass = "text-[#B6B6B6]";
  } else {
    textClass = "text-black";
  }

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="container flex justify-center mx-auto">
        <Card
          className={`hidden lg:flex justify-between rounded-2xl mt-6 items-center fixed top-0 z-20 font-['Poppins'] w-10/12 py-3 px-28 transition-all duration-300 backdrop-blur-lg ${textClass} ${bgClass}`}
          theme={theme}
        >
          <Link to="/">
            <img src={theme ? logo_dark : logo_light} className={` max-w-[240px]`} alt="logo" />
          </Link>
          <div className="flex items-center gap-9">
            <ul className="list-none flex items-center gap-[30px]">
              <li>
                <Link
                  to="/news"
                  className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
                  onClick={() => setOnScreen(false)}
                >
                  News
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setOnScreen(!onScreen)}
                  className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
                >
                  Invest
                </button>
              </li>
              <li>
                <Link
                  to="/howto"
                  className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
                  onClick={() => setOnScreen(false)}
                >
                  How To
                </Link>
              </li>
              <li>
                <Link
                  to="/roadmap"
                  className="text-lg lg:text-base font-medium hover:text-[#B52761] transition-all duration-200"
                  onClick={() => setOnScreen(false)}
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <img src={address_icon} alt="address icon" className={`${theme ? "" : "invert"}`} />
              </li>
              <li>
                <img src={globe} alt="language icon" className={`${theme ? "" : "invert"}`} />
              </li>
            </ul>
            <ThemeToggler value={value} />
            <button className="font-bold text-[20px]">Connect Wallet</button>
          </div>
        </Card>
      </div>

      {/* MOBILE NAVBAR */}
      <MobileNav value={{ isOpen, setIsOpen, theme }} />
    </>
  );
};

export default Navbar;
