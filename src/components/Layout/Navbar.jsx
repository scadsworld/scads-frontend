import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { navLinks } from "../../database/items-database";
import ThemeToggler from "../UI/ThemeToggler";
import Hamburger from "../UI/Hamburger";

const Navbar = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = value;

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div
        className={`hidden lg:flex justify-between items-center fixed top-0 z-20 font-['Montserrat'] w-screen px-28 py-2   
      ${
        theme ? "text-white bg-[#0D0D0D]" : "bg-white"
      } transition-all duration-300`}
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
                <Link to={item.path} className="text-xl font-medium">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggler value={value} />
          <button className="underline font-bold text-[20px]">
            Connect Wallet
          </button>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div
        className={`flex justify-between w-screen items-center font-['Montserrat'] lg:hidden py-2 px-6 fixed top-0 z-50 ${
          theme && "bg-[#0D0D0D]"
        } ${theme === false && "bg-white"}`}
      >
        <h3>
          <img
            src={logo}
            className={`${theme === false && "invert"}`}
            alt="logo"
          />
        </h3>
        <Hamburger value={{ theme, setIsOpen, isOpen }} />
      </div>
      <div
        className={`${
          isOpen
            ? "left-0 h-screen w-screen"
            : "left-[-1000px] h-screen w-screen"
        } 
        ${theme ? "bg-[#0D0D0D]" : "bg-white"}
        transition-all duration-700 fixed z-20 lg:hidden`}
      >
        <div
          className={`flex flex-col items-center justify-center h-full gap-16 ${
            theme ? "text-white" : "text-black"
          }`}
        >
          <ThemeToggler value={value} setIsOpen={setIsOpen} />
          <ul className="list-none uppercase gap-16 flex flex-col items-center justify-center">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link to={item.path} className="text-xl font-medium">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <button className="underline font-bold text-[20px]">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
