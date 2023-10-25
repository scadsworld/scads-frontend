import { useState } from "react";

import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div className={`${theme ? "bg-[#0D0D0D]" : "bg-white"}`}>
      <Navbar value={{ theme, setTheme }} />
      <Routes>
        <Route path="/" element={<Home value={{ theme }} />} />
      </Routes>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
