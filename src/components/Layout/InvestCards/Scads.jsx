import Card from "../../UI/Card";
import scads_img from "../../../assets/scads-img.svg";
import tooltip from "../../../assets/tooltip.svg";

const Scads = ({ value }) => {
  const { theme } = value;
  return (
    <div className="relative">
      <Card
        className={`flex flex-col items-center font-['Lato'] py-5 mt-3 w-[293px] lg:w-full h-[485px] ${
          theme ? "text-white" : "text-black"
        }`}
        theme={theme}
      >
        <h1 className="text-lg text-center">Buy SCADS</h1>
        <p className="text-sm text-center mt-3 max-w-[152px] lg:max-w-[162px]">
          Invest in Crypto’s First Decentralized Stablecoin
        </p>
        <div
          className={`flex gap-2 mt-8 ${theme ? "text-white" : "text-black"} `}
        >
          <div className="flex flex-col items-center gap-1">
            <ul className="list-disc">
              <li>GAS</li>
              <li>SLIPPAGE</li>
              <li>TAX</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>0.05%</span>
            <span>3%</span>
            <span>3%</span>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <img src={tooltip} alt="" />
            <img src={tooltip} alt="" />
            <img src={tooltip} alt="" />
          </div>
          <img src={scads_img} className="ms-14" alt="" />
        </div>
        <div className={`my-7 ${theme ? "text-white" : "text-black"}`}>
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="crypto_token">BUSD</label>
            <input
              type="text"
              className={`border ${
                theme ? "border-white" : "border-black"
              } rounded-[10px] py-[4px] px-1 lg:w-[235px] bg-transparent`}
              placeholder="0.0"
            />
          </div>
          <div className="flex flex-col mt-8">
            <label htmlFor="scads">Scads</label>
            <input
              type="text"
              className={`border ${
                theme ? "border-white" : "border-black"
              } rounded-[10px] py-[4px] px-1 lg:w-[235px] bg-transparent`}
              placeholder="0.0"
            />
          </div>
        </div>
        <button
          className={`border-b-2 ${
            theme ? "text-white border-white" : "text-black border-black"
          } font-['Montserrat'] text-xl`}
        >
          Connect Wallet
        </button>
      </Card>
    </div>
  );
};

export default Scads;
