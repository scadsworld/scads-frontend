import { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";

import arrow from "../../../assets/Arrow.svg";
import TWINE_img from "../../../assets/lavish_img.svg";
import Card from "../../UI/Card";

const InvestCarouselMobile = ({ value }) => {
  const [activeItem, setActiveItem] = useState(0);

  const { theme } = value;

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    items: [
      {
        id: 0,
        renderItem: (
          <Card
            className={`flex flex-col items-center mx-auto font-['Poppins'] py-5 px-10 mt-3 w-[293px] ${
              theme ? "text-white" : "text-black"
            }`}
            theme={theme}
          >
            {" "}
            <h1 className="text-lg text-center">Claim Earned TWINE</h1>
            <div
              className={`flex items-center gap-2 mt-3 ${
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
            <span className="mt-4 text-sm">SCADS Owned: 0 Scads</span>
            <div className="flex flex-col items-center gap-1 mt-7">
              <p className="text-sm">Time Invested</p>
              <span className="text-sm opacity-75">
                0 Days 0 Hours 0 Minutes
              </span>
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
        ),
      },
      {
        id: 1,
        renderItem: (
          <Card
            className={`flex flex-col items-center mx-auto font-['Poppins'] py-5 mt-3 w-[293px] text-[#B6B6B6] ${
              theme ? "text-white" : "text-black"
            }`}
            theme={theme}
          >
            <h1 className="text-lg text-center">Buy SCADS with TWINE</h1>
            <div className="flex items-center gap-2 mt-8">
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
            <div className="mb-7 mt-16">
              <div className="flex flex-col gap-[2px]">
                <label htmlFor="crypto_token" className="text-sm md:ms-0">
                  TWINE
                </label>
                <input
                  type="text"
                  className={`border ${
                    theme ? "border-white" : "border-black"
                  } rounded-[10px] py-[4px] px-1 w-[235px] bg-transparent mx-auto`}
                  placeholder="0.0"
                />
              </div>
              <div className="flex flex-col mt-8">
                <label htmlFor="scads" className="text-sm md:ms-0">
                  Scads
                </label>
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
                theme ? "border-white" : "border-black"
              }  font-['Poppins'] text-xl`}
            >
              Connect Wallet
            </button>
          </Card>
        ),
      },
    ],
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(event.nextItem.id);
    }
  });

  return (
    <div className="container mx-auto flex flex-col items-center overflow-hidden lg:hidden">
      {carouselFragment}
      <div className="flex justify-center gap-10 mt-10">
        <button onClick={slideToPrevItem}>
          <img src={arrow} className="rotate-180" alt="" />
        </button>
        <div className={`${theme ? "text-white" : "text-black"}`}>
          {activeItem + 1} / 2
        </div>
        <button onClick={slideToNextItem}>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default InvestCarouselMobile;
