import { prices } from "../../../database/items-database";

import spheres from "../../../assets/spheres.png";
import Card from "../../UI/Card";

const LivePrices = ({ value }) => {
  const { theme } = value;

  return (
    <div className="my-24 container mx-auto flex flex-col items-center lg:flex-row justify-center relative">
      <img
        src={spheres}
        className="absolute z-0 w-3/4 hidden lg:block"
        alt=""
      />
      <Card theme={theme}>
        <div className="flex flex-col items-center lg:flex-row gap-4 lg:gap-24 border-[3px] border-[#7768E5] py-6 px-7 lg:py-0 lg:px-0 w-[346px] lg:w-full rounded-[30px] lg:border-none">
          {prices.map((item) => (
            <div
              className="flex flex-row-reverse items-center lg:flex-col gap-10 lg:gap-4 font-['Montserrat'] text-center py-8 relative z-10"
              key={item.id}
            >
              <h1 className="font-bold text-[22px] lg:text-[32px] w-[136px]">
                {item.price}
              </h1>
              <div className="flex flex-col w-[135px] lg:w-full">
                <p
                  className={`${
                    theme ? "text-white" : "text-black"
                  } text-lg font-medium`}
                >
                  {item.keyphrase_one}
                </p>
                <span className="text-[#353688] text-2xl font-medium">
                  {item.keyphrase_two}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default LivePrices;
