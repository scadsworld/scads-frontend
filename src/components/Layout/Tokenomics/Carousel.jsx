import { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";

import { tokenomics } from "../../../database/items-database";
import arrow from "../../../assets/Arrow.svg";

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(0);

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
        <div className="flex flex-col justify-center items-center w-full mx-auto gap-9">
          <span className="text-[22px] lg:text-[32px] text-[#7768E5]">
            {i.thumb}
          </span>
          <div className="h-[408px] lg:w-[911px] lg:h-[174px] text-center flex justify-center items-center rounded-[60px] border border-[#7768E5]">
            <p className="text-sm lg:text-lg text-white py-3 max-w-[340px] lg:max-w-[830px] p-6 lg:p-0">
              {i.text}
            </p>
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
      <div className="flex justify-center gap-10 mt-11 lg:mt-14">
        <button onClick={slideToPrevItem}>
          <img src={arrow} className="rotate-180" alt="" />
        </button>
        <div>
          {activeItem + 1} / {tokenomics.length}
        </div>
        <button onClick={slideToNextItem}>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
