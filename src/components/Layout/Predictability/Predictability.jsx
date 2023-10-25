import {
  predictabilityCards,
  predictabilityText,
} from "../../../database/items-database";
import Card from "../../UI/Card";
import spheres from "../../../assets/spheres.png";
import spheres_mobile from "../../../assets/spheres-mobile.png";

const Predictability = ({ value }) => {
  const { theme } = value;

  return (
    <div
      className={`container mx-auto flex flex-col justify-center items-center ${
        theme && "text-white"
      }`}
    >
      <h1 className="font-['Lato'] text-2xl text-center lg:text-[40px]">
        {predictabilityText.title}
      </h1>
      <p className="font-['Lato'] text-base lg:text-lg mt-[51px] text-center max-w-[328px] lg:max-w-[900px]">
        {predictabilityText.text}
      </p>
      <div className="flex flex-col lg:flex-row justify-center font-['Montserrat'] text-center gap-20 mt-14 relative w-full">
        <img
          src={spheres}
          className="absolute rotate-180 w-[80%] -top-6 hidden lg:block"
          alt=""
        />
        <img
          src={spheres_mobile}
          className="lg:hidden absolute right-0 top-0"
          alt=""
        />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 w-[265px] lg:w-[240px] mx-auto mt-10">
          {predictabilityCards.map((item) => (
            <Card theme={theme} key={item.id}>
              <div className="flex flex-col items-center justify-center lg:justify-end gap-6 py-5 lg:py-6 w-[265px] lg:w-[240px] lg:h-full lg:mt-0">
                <p
                  className={`${
                    theme ? "text-white" : "text-black"
                  } text-base lg:text-lg text-medium max-w-[165px] lg:max-w-[186px] lg:h-[44px]`}
                >
                  {item.description}
                </p>
                <span className="text-[#353688] text-2xl text-medium">
                  {item.name}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Predictability;
