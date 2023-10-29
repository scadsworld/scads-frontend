import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo_light.svg";
import { navLinks } from "../../database/items-database";
import ThemeToggler from "../UI/ThemeToggler";
import Hamburger from "../UI/Hamburger";

const Navbar = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const { theme, setOnScreen, onScreen } = value;

  let textClass = "text-[#B6B6B6]";
  let bgClass = "";

  if (theme) {
    textClass = "text-[#B6B6B6]";
    if (colorChange) {
      bgClass = "bg-[#1F1F1F]";
    }
  } else {
    textClass = "text-black";
    if (colorChange) {
      bgClass = "bg-[#DBDBDB]";
    }
  }

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div
        className={`hidden lg:flex justify-between items-center fixed top-0 z-20 font-['Montserrat'] w-screen px-28 py-2 transition-all duration-300 ${textClass} ${bgClass}`}
      >
        <Link to="/">
          <img
            src={logo}
            className={`${theme === false && "invert"}`}
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-9">
          <ul className="list-none flex gap-[30px]">
            {navLinks.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setOnScreen(!onScreen)}
                  className="text-lg font-medium hover:text-[#7768E5] transition-all duration-200"
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
          <ThemeToggler value={value} />
          <button className="underline underline-offset-8 font-bold text-[20px]">
            Connect Wallet
          </button>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div
        className={`flex justify-between w-screen items-center font-['Montserrat'] lg:hidden py-3 px-6 fixed top-0 z-50 ${
          theme && "bg-[#1F1F1F]"
        } ${theme === false && "bg-[#DBDBDB]"}`}
      >
        <h3>
          <Link to="/">
            <img
              src={logo}
              className={`${theme === false && "invert"}`}
              alt="logo"
            />
          </Link>
        </h3>
        <Hamburger value={{ theme, setIsOpen, isOpen }} />
      </div>
      <div
        className={`${
          isOpen
            ? "left-0 h-screen w-screen"
            : "left-[-1000px] h-screen w-screen"
        } 
        ${theme ? "bg-[#1F1F1F]" : "bg-[#DBDBDB]"}
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
    </>
  );
};

export default Navbar;
