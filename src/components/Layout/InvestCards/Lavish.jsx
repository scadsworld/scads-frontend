import Card from "../../UI/Card";

import lavish_img from "../../../assets/lavish_img.svg";
import tooltip from "../../../assets/tooltip.svg";

const Lavish = ({ value }) => {
  const { theme } = value;

  return (
    <div className="container mx-auto justify-center gap-16 hidden lg:flex">
      <div className="relative">
        <Card
          className={`flex flex-col items-center font-['Lato'] py-5 mt-3 lg:h-[485px] ${
            theme ? "text-white" : "text-black"
          }`}
          theme={theme}
        >
          {" "}
          <h1 className="text-lg text-center">Claim Earned LAVISH</h1>
          <div
            className={`flex items-center gap-2 mt-8 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <ul className="list-disc text-sm">
                <li>GAS</li>
                <li>SLIPPAGE</li>
                <li>TAX</li>
              </ul>
            </div>
            <div className="flex flex-col text-sm">
              <span>0.05%</span>
              <span>3%</span>
              <span>3%</span>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <img src={tooltip} alt="" />
              <img src={tooltip} alt="" />
              <img src={tooltip} alt="" />
            </div>
            <img src={lavish_img} className="ms-14" alt="" />
          </div>
          <span className="mt-5 text-sm">SCADS Owned: 0 Scads</span>
          <div className="flex flex-col items-center gap-1 mt-7">
            <p className="text-sm">Time Invested</p>
            <span className="text-sm opacity-75">0 Days 0 Hours 0 Minutes</span>
          </div>
          <div className="flex justify-center gap-16 mt-7">
            <div className="flex flex-col gap-1">
              <p className="text-sm">LAVISH Claimed:</p>
              <p className="text-sm">LAVISH Rewarded:</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">0 LAVISH</p>
              <p className="text-sm">0 LAVISH</p>
            </div>
          </div>
          <div className="mt-5">
            <button
              className={`border-b-2 ${
                theme ? "border-white" : "border-black"
              } font-['Montserrat'] text-xl`}
            >
              Connect Wallet
            </button>
          </div>
          <span className="mt-5 opacity-75 lg:max-w-[223px] text-center text-xs">
            Customers can only claim a WHOLE LAVISH token. Partial withdrawals
            are not supported
          </span>
        </Card>
      </div>
      <div className="relative">
        <Card
          className={`flex flex-col items-center font-['Lato'] py-5 mt-3 lg:h-[485px] text-[#B6B6B6] ${
            theme ? "text-white" : "text-black"
          }`}
          theme={theme}
        >
          <h1 className="text-lg text-center">Buy SCADS with LAVISH</h1>
          <div
            className={`flex items-center gap-2 mt-8 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            <div className="flex flex-col items-center gap-1 text-sm">
              <ul className="list-disc">
                <li>GAS</li>
                <li>SLIPPAGE</li>
                <li>TAX</li>
              </ul>
            </div>
            <div className="flex flex-col text-sm">
              <span>0.05%</span>
              <span>3%</span>
              <span>3%</span>
            </div>
            <img src={lavish_img} className="ms-14" alt="" />
          </div>
          <div className={`mb-7 mt-16 ${theme ? "text-white" : "text-black"}`}>
            <div className="flex flex-col gap-[2px]">
              <label htmlFor="crypto_token" className="text-sm">
                LAVISH
              </label>
              <input
                type="text"
                className={`border ${
                  theme ? "border-white" : "border-black"
                } rounded-[10px] py-[4px] px-1 lg:w-[235px] bg-transparent`}
                placeholder="0.0"
              />
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="scads" className="text-sm">
                Scads
              </label>
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
    </div>
  );
};

export default Lavish;
