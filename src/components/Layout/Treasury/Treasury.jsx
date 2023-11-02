import { motion } from "framer-motion";

import Card from "../../UI/Card";
import { treasuryCards } from "../../../Tools/items-database";
import { treasuryCardVariants } from "../../../Tools/variants";
import { opacityVariants } from "../../../Tools/variants";

const textOpacity = opacityVariants;
const cardVariants = treasuryCardVariants;

const Treasury = ({ value }) => {
  const { theme } = value;

  return (
    <div className="container mx-auto flex flex-col items-center font-['Poppins'] mt-32">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={textOpacity}
        className="text-center"
      >
        <h1 className="md:text-[40px] text-[#353688] font-bold">Treasury</h1>
        <span className={`text-2xl font-medium ${theme && "text-[#B6B6B6]"}`}>
          Balance
        </span>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-center font-['Poppins'] text-center gap-20 mt-6 relative w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-8 w-[265px] md:w-[240px] lg:h-[220px] xl:w-[240px] mx-auto mt-10">
          {treasuryCards.map((item) => (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants(item)}
              key={item.id}
            >
              <Card theme={theme}>
                <div className="flex flex-col items-center justify-center xl:justify-end py-5 lg:py-6 w-[265px] md:w-[170px] lg:w-[160px] xl:w-[210px] 2xl:w-[240px] md:h-full md:mt-0">
                  <span className="text-[#353688] text-2xl text-medium">
                    {item.name}
                  </span>{" "}
                  <span className="text-base md:text-lg text-[#424242]">
                    Balance
                  </span>
                  <p
                    className={`${
                      theme ? "text-[#B6B6B6]" : "text-black"
                    } text-base lg:text-2xl text-medium max-w-[165px] lg:max-w-[186px] md:h-[44px] pt-4 font-['Montserrat']`}
                  >
                    {item.amount}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treasury;
