import Card from "../../UI/Card";
import { motion } from "framer-motion";
import scads_img from "../../../assets/scads-img.svg";
import arrow from "../../../assets/accrodion_arrow.svg";
import { useState } from "react";
import DropdownModal from "../../UI/DropdownModal";

const Scads = ({ value }) => {
  const [showModal, setShowModal] = useState(false);
  const [stringValue, setStringValue] = useState("USDT");

  const toggleModal = () => {
    setShowModal(true);
  };

  const updateString = (newString) => {
    setStringValue(newString);
  };

  const { theme } = value;
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`flex flex-col items-center font-['Poppins'] py-5 mt-3 w-[293px] h-[485px] lg:h-[420px] lg:w-full xl:h-[485px] ${
          theme ? "text-white" : "text-black"
        } relative`}
        theme={theme}
      >
        <h1 className="text-lg text-center">Buy SCADS</h1>
        <p className="text-sm text-center mt-3 max-w-[152px] lg:max-w-[182px]">
          Invest in Crypto’s First Decentralized Stablecoin
        </p>
        <div
          className={`flex gap-2 mt-8 lg:mt-4 xl:mt-8 ${
            theme ? "text-white" : "text-black"
          } `}
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
          <img src={scads_img} className="ms-14" alt="" />
        </div>
        <div
          className={`my-7 lg:my-4 xl:my-7 ${
            theme ? "text-white" : "text-black"
          }`}
        >
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="crypto_token">
              <button onClick={toggleModal} className="flex items-center gap-1">
                {stringValue}{" "}
                <img
                  src={arrow}
                  width={16}
                  height={16}
                  alt="Dropdown Arrow"
                  className={`${theme && "invert"}`}
                />
              </button>
            </label>
            <input
              type="text"
              className={`border ${
                theme ? "border-white" : "border-black"
              } rounded-[10px] py-[4px] px-1 w-[235px] bg-transparent mx-auto`}
              placeholder="0.0"
            />
          </div>
          <div className="flex flex-col mt-8 lg:mt-4 xl:mt-8">
            <label htmlFor="scads">SCADS</label>
            <input
              type="text"
              className={`border ${
                theme ? "border-white" : "border-black"
              } rounded-[10px] py-[4px] px-1 w-[235px] bg-transparent mx-auto`}
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
      {showModal && (
        <DropdownModal
          updateString={updateString}
          value={value}
          show={setShowModal}
        />
      )}
    </motion.div>
  );
};

export default Scads;
