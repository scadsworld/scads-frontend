import React from "react";
import { roadmapContent } from "../Tools/items-database";
import Card from "../components/UI/Card";
import {
  roadmapCardVariantsMobile,
  roadmapCardVariantsToLeft,
  roadmapCardVariantsToRight,
} from "../Tools/variants";
import { motion } from "framer-motion";

const Roadmap = ({ value }) => {
  const { theme } = value;

  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      className={`flex flex-col md:items-center ms-8 sm:ms-0 mt-36 font-['Poppins'] overflow-hidden ${
        theme ? "text-white" : "text-black"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="font-bold text-[40px] text-center">SCADS</h1>
      <p className="text-center">Less is more</p>
      <ol
        class={`border-s mt-16 flex flex-col items-start md:translate-x-1/2 md:mx-auto max-w-[240px] md:max-w-[450px] md:[&>*:nth-child(even)]:-translate-x-[108%] ${
          theme ? "text-white border-white" : "text-black border-black"
        }`}
      >
        {roadmapContent.map((item) => (
          <li class="mb-10 ms-4 relative w-[300px] md:w-[400px]">
            <div
              class={`absolute w-3 h-3 rounded-full mt-10 bg-[#BF205D] ${
                item.right
                  ? "-start-4 md:start-full -translate-x-1/2 md:translate-x-[80%]"
                  : "-start-4 -translate-x-1/2"
              }`}
            ></div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={
                isMobile
                  ? roadmapCardVariantsMobile
                  : item.right
                  ? roadmapCardVariantsToRight
                  : roadmapCardVariantsToLeft
              }
            >
              <Card
                theme={theme}
                className="py-4 ps-3 md:ps-0 md:py-3 w-full h-fit"
              >
                <time class="mb-1 text-lg font-bold leading-none">
                  {item.date}
                </time>
                <ul className="list-none">
                  <li className="mb-4 text-base font-normal">{item.l1}</li>
                  <li class="mb-4 text-base font-normal ">{item.l2}</li>
                  <li class="mb-4 text-base font-normal ">{item.l3}</li>
                </ul>
              </Card>
            </motion.div>
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

export default Roadmap;
