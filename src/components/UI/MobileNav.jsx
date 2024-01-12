import { Link } from "react-router-dom";

import Card from "./Card";
import { navLinks } from "../../Tools/items-database";
import Hamburger from "../UI/Hamburger";
import { AnimatePresence, motion } from "framer-motion";
import logo_light from "../../assets/logo_light.svg";
import logo_dark from "../../assets/logo_dark.svg";
import address_icon from "../../assets/addresses.svg";
import globe from "../../assets/Earth Globe.svg";
import ThemeToggler from "./ThemeToggler";

const MobileNav = ({ value }) => {
  const { isOpen, setIsOpen, theme } = value;

  return (
    <nav className="container fixed top-0 z-50 flex flex-col items-center justify-center mx-auto -translate-x-1/2 left-1/2">
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
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
