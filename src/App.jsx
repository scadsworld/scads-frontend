import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import InvestMobile from "./pages/InvestMobile";
import News from "./pages/News";
import { useLocation } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(false);
  const [onScreen, setOnScreen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [location]);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("bg-[#191919]");
      document.body.classList.remove("bg-[#E2E6E9]");
    } else {
      document.body.classList.remove("bg-[#191919]");
      document.body.classList.add("bg-[#E2E6E9]");
    }
  }, [theme]);

  return (
    <div className="overflow-x-hidden">
      <Navbar value={{ theme, setTheme, setOnScreen, onScreen }} />
      <Invest value={{ onScreen, setOnScreen, theme }} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home value={{ theme, setOnScreen }} />} />
          <Route path="/invest" element={<InvestMobile value={{ theme }} />} />
          <Route path="/news" element={<News value={{ theme }} />} />
          <Route path="*" element={<Home value={{ theme, setOnScreen }} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
