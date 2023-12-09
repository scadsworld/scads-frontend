import { motion } from "framer-motion";
import SwapScads from "../../UI/SwapScads";

const Scads = ({ value }) => {
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
        <SwapScads value={value} />
        <p className="opacity-60 mt-3">1 USDT = 1 SCADS</p>
        <div
          className={`flex justify-between w-full border rounded-3xl px-6 py-2 mt-10 md:mt-28 ${
            theme ? "border-white" : "border-black"
          }`}
        >
          <p>You Recieve</p>
          <span>0.00 SCADS</span>
        </div>
        <button className="text-black font-['Poppins'] text-xl bg-[#D9D9D9] px-16 py-3 rounded-3xl font-semibold mt-6 hover:bg-opacity-40 transition duration-300 mb-2">
          Connect Wallet
        </button>
      </div>
    </motion.div>
  );
};

export default Scads;
