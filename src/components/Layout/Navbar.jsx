import { useState } from "react";
import { Link } from "react-router-dom";

import logo_light from "../../assets/logo_light.svg";
import logo_dark from "../../assets/logo_dark.svg";
import { navLinks } from "../../Tools/items-database";
import ThemeToggler from "../UI/ThemeToggler";
import Hamburger from "../UI/Hamburger";
import Card from "../UI/Card";

const Navbar = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setOnScreen, onScreen } = value;

  let textClass = "text-[#B6B6B6]";
  let bgClass = "";

  if (theme) {
    textClass = "text-[#B6B6B6]";
  } else {
    textClass = "text-black";
  }

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="container mx-auto flex justify-center">
        <Card
          className={`hidden lg:flex justify-between rounded-2xl mt-6 items-center fixed top-0 z-20 font-['Poppins'] w-11/12 px-28 transition-all duration-300 backdrop-blur-lg ${textClass} ${bgClass}`}
          theme={theme}
        >
          <Link to="/">
            <img
              src={theme ? logo_dark : logo_light}
              className={` max-w-[240px]`}
              alt="logo"
            />
          </Link>
          <div className="flex items-center gap-9">
            <ul className="list-none flex gap-[30px]">
              <li>
                <Link
                  to="/news"
                  className="text-lg lg:text-base font-medium hover:text-[#7768E5] transition-all duration-200"
                  onClick={() => setOnScreen(false)}
                >
                  News
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setOnScreen(!onScreen)}
                  className="text-lg lg:text-base font-medium hover:text-[#7768E5] transition-all duration-200"
                >
                  Invest
                </button>
              </li>
              <li>
                <Link
                  to="/howto"
                  className="text-lg lg:text-base font-medium hover:text-[#7768E5] transition-all duration-200"
                  onClick={() => setOnScreen(false)}
                >
                  How To
                </Link>
              </li>
            </ul>
            <ThemeToggler value={value} />
            <button className="font-bold text-[20px]">Connect Wallet</button>
          </div>
        </Card>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="container mx-auto flex justify-center">
        <Card
          className={`flex justify-between w-11/12 items-center font-['Poppins'] lg:hidden px-2 fixed top-0 z-50 mt-2 ${
            theme && "bg-[#191919]"
          } ${theme === false && "bg-[#E2E6E9]"}`}
          theme={theme}
        >
          <h3>
            <Link to="/">
              <img
                src={theme ? logo_dark : logo_light}
                className="max-w-[180px]"
                alt="logo"
              />
            </Link>
          </h3>
          <Hamburger value={{ theme, setIsOpen, isOpen }} />
        </Card>
        <div
          className={`${
            isOpen
              ? "left-0 h-screen w-screen"
              : "left-[-1000px] h-screen w-screen"
          } 
        ${theme ? "bg-[#191919]" : "bg-[#E2E6E9]"}
        transition-all duration-700 fixed z-20 lg:hidden`}
        >
          <div
            className={`flex flex-col items-center justify-center h-full gap-16 ${
              theme ? "text-[#B6B6B6]" : "text-black"
            }`}
          >
            <ThemeToggler value={value} setIsOpen={setIsOpen} />
            <ul className="list-none uppercase gap-16 flex flex-col items-center justify-center">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-xl font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <button className="underline underline-offset-8 font-bold text-[20px]">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
