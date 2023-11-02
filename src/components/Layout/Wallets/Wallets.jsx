import { motion } from "framer-motion";
import { wallets } from "../../../Tools/items-database";
import {
  imgVariants,
  opacityVariants,
  walletCardVariants,
} from "../../../Tools/variants";
import Card from "../../UI/Card";
import wallet_img from "../../../assets/wallet-image.webp";
import wallet_img_dark from "../../../assets/wallet-image-dark.webp";
import wallets_img_mobile from "../../../assets/wallets-bg-mobile.webp";

const isMobile = window.innerWidth < 768;
let cardVariants = {};
const textOpacity = opacityVariants;

if (!isMobile) {
  cardVariants = walletCardVariants;
}

const imgPosition = imgVariants;

const Wallets = ({ value }) => {
  const { theme } = value;

  const handleClickScroll = () => {
    const element = document.getElementById("tokenomics");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto flex flex-col relative mt-40">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={imgPosition}
        className="relative top-0"
      >
        <img
          src={theme ? wallet_img_dark : wallet_img}
          className="absolute z-0 top-0 w-auto lg:-left-10 xl:left-10 2xl:left-44 h-[700px] hidden md:block"
          alt=""
        />
      </motion.div>
      <img
        src={wallets_img_mobile}
        className="absolute top-6 ms-2 md:hidden"
        alt=""
      />
      <div className="flex flex-col justify-center items-start gap-2 lg:gap-8 md:max-w-[700px] lg:max-w-[1100px] mx-auto mt-10">
        <h1 className="relative z-10 text-white text-2xl lg:text-[40px] font-bold font-['Poppins'] ms-10">
          Wallets
        </h1>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <Card theme={theme}>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-x-[100px] md:gap-x-[40px] lg:gap-x-[100px] gap-y-[60px] max-w-[322px] sm:max-w-none lg:gap-y-20 justify-center items-center py-7 md:py-10 lg:py-7 h-full">
              {wallets.map((item) => (
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={textOpacity}
                  className="flex flex-col gap-5 font-['Poppins'] ps-6 pe-20 md:ps-0 md:pe-0"
                  key={item.id}
                >
                  <h1 className="text-[#7768E5] font-bold text-xl lg:text-2xl">
                    {item.title}
                  </h1>
                  <p
                    className={`${
                      theme ? "text-[#B6B6B6]" : "text-black"
                    } font-medium text-sm lg:text-base max-w-[243px] lg:max-w-[260px]`}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center py-7">
              <button
                className="bg-[#7E57FF] py-[14px] px-9 rounded-[30px] font-semibold text-white text-xl hover:bg-[#511DFF] transition-all duration-300 focus:ring-0 focus:outline-none"
                onClick={handleClickScroll}
              >
                More Info
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Wallets;
