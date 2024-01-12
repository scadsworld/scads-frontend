import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import InvestMobile from "./pages/InvestMobile";
import News from "./pages/News";
import { useLocation } from "react-router-dom";
import HowTo from "./pages/HowTo";
import Roadmap from "./pages/Roadmap";
import Story from "./pages/Story";

function App() {
  const [theme, setTheme] = useState(false);
  const [onScreen, setOnScreen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("bg-[#00000B]");
      document.body.classList.remove("bg-[#e8ecff]");
    } else {
      document.body.classList.remove("bg-[#00000B]");
      document.body.classList.add("bg-[#e8ecff]");
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
          <Route path="/howto" element={<HowTo value={{ theme }} />} />
          <Route path="/roadmap" element={<Roadmap value={{ theme }} />} />
          <Route path="/story" element={<Story value={{ theme }} />} />
          <Route path="*" element={<Home value={{ theme, setOnScreen }} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
