import { motion } from "framer-motion";

import Disclaimer from "../components/Layout/Disclaimer/Disclaimer";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header/Header";
import LiveStats from "../components/Layout/LiveStats/LiveStats";
import TextBlock from "../components/Layout/TextBlock/TextBlock";
import Tokenomics from "../components/Layout/Tokenomics/Tokenomics";
import Wallets from "../components/Layout/Wallets/Wallets";
import Treasury from "../components/Layout/Treasury/Treasury";
import ContentAccordion from "../components/UI/ContentAccordion";

import cube_lg from "../assets/cube_large.webp";
import cube_small_one from "../assets/cube_small_one.webp";
import cube_small_two from "../assets/cube_small_two.webp";
import cube_light from "../assets/cube_light.webp";
import donut from "../assets/donut.webp";
import triangle from "../assets/triangle.webp";
import rectangle from "../assets/rectangle_light.webp";

const Home = ({ value }) => {
  const { theme } = value;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Header value={value} />
      <div className="py-10 relative bg-gradient-to-b from-transparent to-[#FF006820]">
        <img
          src={theme ? cube_lg : triangle}
          className="absolute md:right-10 lg:right-0 2xl:right-16 top-[8%] md:top-1/4 2xl:top-[14%] max-w-[100px] md:max-w-none"
          width={200}
          alt=""
        />
        <img
          src={theme ? cube_lg : donut}
          className="absolute hidden md:block left-4 xl:left-0 2xl:left-28 top-[70%]"
          width={160}
          alt=""
        />
        <img
          src={theme ? cube_small_one : cube_light}
          className="absolute left-0 md:left-1/4 top-[38%]"
          width={90}
          alt=""
        />
        <img
          src={theme ? cube_small_two : rectangle}
          className="absolute right-1/3 top-[87%] hidden md:block"
          width={90}
          alt=""
        />
        <LiveStats value={value} />
        <Treasury value={value} />
      </div>
      <TextBlock value={value} />
      <ContentAccordion value={value} />
      <Wallets value={value} />
      <Tokenomics value={value} />
      <Disclaimer value={value} />
      <Footer theme={theme} className={"mt-24"} />
    </motion.main>
  );
};

export default Home;
