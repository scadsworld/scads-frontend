import { tokenomicsHeaderText } from "../../../database/items-database";
import Carousel from "./Carousel";
import proccess from "../../../assets/Proccess.png";
import proccess_dark from "../../../assets/proccess-dark.png";

const Tokenomics = ({ value }) => {
  const { theme } = value;

  return (
    <>
      <div
        className="bg-[url('../src/assets/tokenomics-bg-mobile.png')] lg:bg-[url('../src/assets/Tokenomics-bg.png')] lg:bg-cover mt-24 scroll-mt-28"
        id="tokenomics"
      >
        <div className="container mx-auto flex flex-col items-center text-white text-center font-['Lato'] py-9">
          <h1 className="text-2xl lg:text-[40px]">
            {tokenomicsHeaderText.title}
          </h1>
          <p className="text-base lg:text-xl max-w-[342px] lg:max-w-[791px] mt-11">
            {tokenomicsHeaderText.text}
          </p>
          <span className="text-xl lg:text-2xl my-11">CONTRACTS:</span>
          <Carousel />
        </div>
      </div>
      <div className="flex justify-center mt-24 w-[323px] lg:w-[672px] mx-auto">
        {theme && <img src={proccess} alt="proccess" />}
        {theme === false && <img src={proccess_dark} alt="proccess" />}
      </div>
    </>
  );
};

export default Tokenomics;
