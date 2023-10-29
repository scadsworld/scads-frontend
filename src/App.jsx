import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import Invest from "./pages/Invest";

function App() {
  const [theme, setTheme] = useState(false);
  const [onScreen, setOnScreen] = useState(false);

  return (
    <div
      className={`overflow-x-hidden ${theme ? "bg-[#1F1F1F]" : "bg-[#DBDBDB]"}`}
    >
      <Navbar value={{ theme, setTheme, setOnScreen, onScreen }} />
      <Invest value={{ onScreen, setOnScreen, theme }} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home value={{ theme, setOnScreen }} />} />
          <Route path="/invest" element={<Invest value={theme} />} />
          <Route path="*" element={<Home value={{ theme, setOnScreen }} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
