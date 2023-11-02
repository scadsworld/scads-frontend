import { motion } from "framer-motion";

import Disclaimer from "../components/Layout/Disclaimer/Disclaimer";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header/Header";
import LivePrices from "../components/Layout/LivePrices/LivePrices";
import Predictability from "../components/Layout/Predictability/Predictability";
import Tokenomics from "../components/Layout/Tokenomics/Tokenomics";
import Wallets from "../components/Layout/Wallets/Wallets";
import Treasury from "../components/Layout/Treasury/Treasury";
import ContentAccordion from "../components/UI/ContentAccordion";

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
      <LivePrices value={value} />
      <Treasury value={value} />
      <Predictability value={value} />
      <ContentAccordion value={value} />
      <Wallets value={value} />
      <Tokenomics value={value} />
      <Disclaimer value={value} />
      <Footer theme={theme} className={"mt-24"} />
    </motion.main>
  );
};

export default Home;
