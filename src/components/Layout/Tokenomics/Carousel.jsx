import { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";

import { tokenomics } from "../../../database/items-database";
import arrow from "../../../assets/Arrow.svg";

const Carousel = ({ value }) => {
  const [activeItem, setActiveItem] = useState(0);

  const { theme } = value;

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    withLoop: true,
    items: tokenomics.map((i) => ({
      id: i.id,
      renderItem: (
        <div className="flex flex-col justify-center items-center w-full mx-auto lg:gap-9 mt-10">
          <span className="text-[22px] lg:text-[32px] text-[#7768E5]">
            {i.thumb}
          </span>
          <div className=" max-w-[320px] md:max-w-none lg:w-[911px] lg:h-[300px] text-start flex flex-col justify-center items-center rounded-[60px] p-6 lg:p-0">
            <p
              className={`text-sm lg:text-lg py-3 md:max-w-[700px] lg:max-w-[830px] ${
                theme && "text-[#B6B6B6]"
              }`}
            >
              {i.text}
            </p>
            <ul className="flex flex-col items-center text-sm lg:text-lg lg:max-w-[830px]">
              <li>{i.bullet_one}</li>
              <li>{i.bullet_two}</li>
              <li>{i.bullet_three}</li>
            </ul>
          </div>
        </div>
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(event.nextItem.id);
    }
  });

  return (
    <div className="container mx-auto flex flex-col items-center overflow-hidden">
      {carouselFragment}
      <div className="flex justify-center gap-10 lg:mt-14">
        <button onClick={slideToPrevItem}>
          <img src={arrow} className="rotate-180 invert" alt="" />
        </button>
        <div>
          {activeItem + 1} / {tokenomics.length}
        </div>
        <button onClick={slideToNextItem}>
          <img src={arrow} className="invert" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
