import Card from "../../UI/Card";
import { motion } from "framer-motion";
import TWINE_img from "../../../assets/lavish_img.svg";

const TWINE = ({ value }) => {
  const { theme } = value;

  return (
    <motion.div
      className="container mx-auto justify-center gap-16 hidden lg:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <Card
          className={`flex flex-col items-center font-['Poppins'] py-5 mt-3 lg:h-[420px] lg:w-full xl:h-[485px] ${
            theme ? "text-white" : "text-black"
          }`}
          theme={theme}
        >
          {" "}
          <h1 className="text-lg text-center">Claim Earned TWINE</h1>
          <div
            className={`flex items-center gap-2 mt-8 lg:mt-4 xl:mt-8 ${
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
            <img src={TWINE_img} className="ms-14" alt="" />
          </div>
          <span className="mt-5 text-sm">SCADS Owned: 0 Scads</span>
          <div className="flex flex-col items-center gap-1 mt-7">
            <p className="text-sm">Time Invested</p>
            <span className="text-sm opacity-75">0 Days 0 Hours 0 Minutes</span>
          </div>
          <div className="flex justify-center gap-16 mt-7">
            <div className="flex flex-col gap-1">
              <p className="text-sm">TWINE Claimed:</p>
              <p className="text-sm">TWINE Rewarded:</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">0 TWINE</p>
              <p className="text-sm">0 TWINE</p>
            </div>
          </div>
          <div className="mt-5">
            <button
              className={`border-b-2 ${
                theme ? "border-white" : "border-black"
              } font-['Poppins'] text-xl`}
            >
              Connect Wallet
            </button>
          </div>
        </Card>
      </div>
      <div className="relative">
        <Card
          className={`flex flex-col items-center font-['Poppins'] py-5 mt-3 lg:h-[420px] lg:w-full xl:h-[485px] text-[#B6B6B6] ${
            theme ? "text-white" : "text-black"
          }`}
          theme={theme}
        >
          <h1 className="text-lg text-center">Buy SCADS with TWINE</h1>
          <div
            className={`flex items-center gap-2 mt-8 lg:mt-4 xl:mt-8 ${
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
            <img src={TWINE_img} className="ms-14" alt="" />
          </div>
          <div
            className={`mb-7 mt-16 lg:mt-8 xl:mt-16 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            <div className="flex flex-col gap-[2px]">
              <label htmlFor="crypto_token" className="text-sm">
                TWINE
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
            } font-['Poppins'] text-xl`}
          >
            Connect Wallet
          </button>
        </Card>
      </div>
    </motion.div>
  );
};

export default TWINE;
