import { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";

import arrow from "../../../assets/Arrow.svg";
import lavish_img from "../../../assets/lavish_img.svg";
import tooltip from "../../../assets/tooltip.svg";
import Card from "../../UI/Card";

const InvestCarouselMobile = () => {
  const [activeItem, setActiveItem] = useState(0);

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
          <Card className="flex flex-col items-center mx-auto font-['Lato'] py-5 px-10 mt-3 h-[490px] w-[293px] text-[#B6B6B6]">
            {" "}
            <h1 className="text-lg text-center">Claim Earned LAVISH</h1>
            <div className="flex items-center gap-2 mt-3">
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
            <span className="mt-4 text-sm">SCADS Owned: 0 Scads</span>
            <div className="flex flex-col items-center gap-1 mt-7">
              <p className="text-sm">Time Invested</p>
              <span className="text-sm opacity-75">
                0 Days 0 Hours 0 Minutes
              </span>
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
              <button className="border-b-2 border-white font-['Montserrat'] text-xl">
                Connect Wallet
              </button>
            </div>
            <span className="mt-5 opacity-75 max-w-[223px] text-center text-xs">
              Customers can only claim a WHOLE LAVISH token. Partial withdrawals
              are not supported
            </span>
          </Card>
        ),
      },
      {
        id: 1,
        renderItem: (
          <Card className="flex flex-col items-center mx-auto font-['Lato'] py-5 mt-3 w-[293px] h-[490px] text-[#B6B6B6]">
            <h1 className="text-lg text-center">Buy SCADS with LAVISH</h1>
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
              <img src={lavish_img} className="ms-14" alt="" />
            </div>
            <div className="mb-7 mt-16">
              <div className="flex flex-col gap-[2px]">
                <label htmlFor="crypto_token" className="text-sm">
                  LAVISH
                </label>
                <input
                  type="text"
                  className="border border-white rounded-[10px] py-[4px] px-1 lg:w-[235px] bg-transparent"
                  placeholder="0.0"
                />
              </div>
              <div className="flex flex-col mt-8">
                <label htmlFor="scads" className="text-sm">
                  Scads
                </label>
                <input
                  type="text"
                  className="border border-white rounded-[10px] py-[4px] px-1 lg:w-[235px] bg-transparent"
                  placeholder="0.0"
                />
              </div>
            </div>
            <button className="border-b-2 border-white font-['Montserrat'] text-xl">
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
      <div className="flex justify-center gap-10 mt-4 lg:mt-14">
        <button onClick={slideToPrevItem}>
          <img src={arrow} className="rotate-180" alt="" />
        </button>
        <div>{activeItem + 1} / 2</div>
        <button onClick={slideToNextItem}>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default InvestCarouselMobile;
