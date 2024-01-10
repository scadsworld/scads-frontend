import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo_light from "../../assets/logo_light.svg";
import logo_dark from "../../assets/logo_dark.svg";
import address_icon from "../../assets/addresses.svg";
import globe from "../../assets/Earth Globe.svg";
import { navLinks } from "../../Tools/items-database";
import ThemeToggler from "../UI/ThemeToggler";
import Hamburger from "../UI/Hamburger";
import Card from "../UI/Card";
import { AnimatePresence, motion } from "framer-motion";

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
      <div className="container fixed top-0 z-50 flex flex-col items-center justify-center mx-auto -translate-x-1/2 left-1/2">
        <Card
          className={`flex justify-between w-11/12 items-center font-['Montserrat'] lg:hidden px-2 py-3 mt-2 ${
            theme && "bg-[#191919]"
          } ${theme === false && "bg-[#E2E6E9]"}`}
          theme={theme}
        >
          <h3>
            <Link to="/">
              <img src={theme ? logo_dark : logo_light} className="max-w-[180px]" alt="logo" />
            </Link>
          </h3>
          <Hamburger value={{ theme, setIsOpen, isOpen }} />
        </Card>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                overflow: "hidden",
              }}
              animate={{
                height: "auto",
              }}
              exit={{
                height: 0,
                overflow: "hidden",
              }}
              transition={{ duration: 0.3 }}
              className="w-11/12 py-5"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.1 }}
              >
                <Card
                  theme={theme}
                  className={`flex flex-col items-center justify-center w-full gap-10 py-10 backdrop-blur-[96px] ${
                    theme ? "text-[#B6B6B6]" : "text-black"
                  }`}
                >
                  <ThemeToggler value={value} setIsOpen={setIsOpen} />
                  <ul className="flex flex-col items-center justify-center gap-10 uppercase list-none">
                    {navLinks.map((item) => (
                      <li key={item.id}>
                        <Link to={item.path} className="text-base font-medium" onClick={() => setIsOpen(false)}>
                          {item.text}
                        </Link>
                      </li>
                    ))}
                    <div className="flex items-center gap-x-10">
                      <li>
                        <img src={address_icon} alt="address icon" className={`${theme ? "" : "invert"}`} />
                      </li>
                      <li>
                        <img src={globe} alt="language icon" className={`${theme ? "" : "invert"}`} />
                      </li>
                    </div>
                  </ul>
                  <div>
                    <button className="font-black text-[20px]">Connect Wallet</button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
