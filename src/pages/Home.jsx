import Disclaimer from "../components/Layout/Disclaimer/Disclaimer";
import Header from "../components/Layout/Header/Header";
import LivePrices from "../components/Layout/LivePrices/LivePrices";
import Predictability from "../components/Layout/Predictability/Predictability";
import Tokenomics from "../components/Layout/Tokenomics/Tokenomics";
import Wallets from "../components/Layout/Wallets/Wallets";

const Home = ({ value }) => {
  return (
    <>
      <Header />
      <LivePrices value={value} />
      <Predictability value={value} />
      <Wallets value={value} />
      <Tokenomics value={value} />
      <Disclaimer value={value} />
    </>
  );
};

export default Home;
