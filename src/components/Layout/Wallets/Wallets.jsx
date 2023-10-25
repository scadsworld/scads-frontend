import { wallets } from "../../../database/items-database";
import Card from "../../UI/Card";
import wallet_img from "../../../assets/wallet-image.png";
import wallet_img_dark from "../../../assets/wallet-image-dark.png";
import wallets_img_mobile from "../../../assets/wallets-bg-mobile.png";
import arrow from "../../../assets/wallet-arrow.svg";

const Wallets = ({ value }) => {
  const { theme } = value;

  const handleClickScroll = () => {
    const element = document.getElementById("tokenomics");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto flex flex-col relative  mt-40">
      <img
        src={theme ? wallet_img_dark : wallet_img}
        className="absolute left-40 top-0 h-[700px] hidden lg:block"
        alt=""
      />
      <img
        src={wallets_img_mobile}
        className="absolute top-6 ms-2 lg:hidden"
        alt=""
      />
      <div className="flex flex-col justify-center items-start gap-2 lg:gap-8 lg:max-w-[1100px] mx-auto mt-10">
        <h1 className="relative z-10 text-white text-2xl lg:text-[40px] font-medium font-['Montserrat'] ms-10 lg:ms-0">
          Wallets
        </h1>
        <Card className={"backdrop-blur-2xl"}>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-x-[100px] gap-y-20 justify-center items-center py-7 h-full">
            {wallets.map((item) => (
              <div
                className="flex flex-col gap-5 font-['Montserrat'] ps-6 pe-20 lg:ps-0 lg:pe-0"
                key={item.id}
              >
                <h1 className="text-[#7768E5] font-bold text-xl lg:text-2xl">
                  {item.title}
                </h1>
                <p
                  className={`${
                    theme ? "text-white" : "text-black"
                  } font-medium text-sm lg:text-base max-w-[243px] lg:max-w-[260px]`}
                >
                  {item.description}
                </p>
                <button
                  onClick={handleClickScroll}
                  className="text-[#7768E5] text-sm lg:text-base flex gap-[6px]"
                >
                  Learn more <img src={arrow} alt="" />
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Wallets;
