import { motion } from "framer-motion";
import {
  predictabilityCards,
  predictabilityText,
} from "../../../database/items-database";
import {
  opacityVariants,
  predictabilityCardVariants,
} from "../../../database/variants";
import Card from "../../UI/Card";
import cardShapes from "../../../assets/cardShapes.svg";

const textOpacity = opacityVariants;
const cardVariants = predictabilityCardVariants;

const Predictability = ({ value }) => {
  const { theme } = value;

  return (
    <div
      className={`container mx-auto flex flex-col justify-center items-center mt-16 lg:mt-[196px] ${
        theme && "text-[#B6B6B6]"
      }`}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={textOpacity}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="font-['Lato'] font-bold text-2xl text-center lg:text-[40px]">
          {predictabilityText.title}
        </h1>
        <p className="font-['Lato'] text-base lg:text-lg mt-[51px] text-center max-w-[328px] md:max-w-[600px] lg:max-w-[900px]">
          {predictabilityText.text}
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-center font-['Montserrat'] text-center gap-20 mt-14 relative w-full">
        <img
          src={cardShapes}
          className="absolute w-[80%] top-8 hidden lg:block"
          alt=""
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-5 w-[265px] md:w-[240px] mx-auto mt-10">
          {predictabilityCards.map((item) => (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants(item)}
              key={item.id}
            >
              <Card theme={theme}>
                <div className="flex flex-col items-center justify-center lg:justify-end gap-6 py-5 lg:py-6 w-[265px] md:w-[240px] md:h-full md:mt-0">
                  <p
                    className={`${
                      theme ? "text-[#B6B6B6]" : "text-black"
                    } text-base lg:text-lg text-medium max-w-[165px] lg:max-w-[186px] md:h-[44px]`}
                  >
                    {item.description}
                  </p>
                  <span className="text-[#353688] text-2xl text-medium">
                    {item.name}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Predictability;
