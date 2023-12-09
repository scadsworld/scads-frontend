import { motion } from "framer-motion";
import SwapTwine from "../../UI/SwapTwine";

const TWINE = ({ value }) => {
  const { theme } = value;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto flex justify-center"
    >
      <div
        className={`flex flex-col items-center mx-auto font-['Poppins'] lg:h-[420px] xl:h-5/6 ${
          theme ? "text-white" : "text-black"
        } relative`}
        theme={theme}
      >
        <SwapTwine value={value} />
        <button className="text-black font-['Poppins'] text-xl bg-[#D9D9D9] px-16 py-3 rounded-3xl font-semibold mt-4 hover:bg-opacity-40 transition duration-300">
          Connect Wallet
        </button>
        <p className="mt-4">SCADS Owned: 0.00</p>
        <div className="flex flex-col items-center gap-3 w-full mt-4 text-xs md:text-base">
          <div className="flex justify-between w-full md:w-3/4">
            <p>Time Invested:</p>
            <span>10 Days 3 Hours 58 Minutes</span>
          </div>
          <div className="flex justify-between w-full md:w-3/4">
            <p>Twine Minted:</p>
            <span>1.0262696835</span>
          </div>
          <div className="flex justify-between w-full md:w-3/4">
            <p>Twine Claimed:</p>
            <span>1.0262696835</span>
          </div>
        </div>
        <button className="text-black font-['Poppins'] text-xl bg-[#D9D9D9] px-16 py-3 rounded-3xl font-semibold mt-4 hover:bg-opacity-40 transition duration-300 mb-2">
          Connect Wallet
        </button>
      </div>
    </motion.div>
  );
};

export default TWINE;
