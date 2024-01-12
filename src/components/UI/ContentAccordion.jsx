import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { accordionContent } from "../../Tools/items-database";
import arrow from "../../assets/accrodion_arrow.svg";
import Card from "./Card";
import { accordionCardVariants } from "../../Tools/variants";
import { motion } from "framer-motion";

import cube_one from "../../assets/cube_light.webp";
import cube_two from "../../assets/second_cube.svg";
import rectangle from "../../assets/rectangle_large.svg";
import hexagon from "../../assets/hexagon.svg";
import cube_one_dark from "../../assets/cube_large.webp";
import sphere_dark from "../../assets/sphere_dark.svg";
import sphere_dark_two from "../../assets/second_sphere_dark.svg";

const isMobile = window.innerWidth < 768;

let accordionCardPosition = {};

if (!isMobile) {
  accordionCardPosition = accordionCardVariants;
}

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <h1 className="text-xl font-medium">{header}</h1>
        <img
          src={arrow}
          alt="accordion_arrow"
          className={`transition-transform duration-500 ease-out ${isEnter && "rotate-180"}`}
        />
      </>
    )}
    buttonProps={{
      className: "flex justify-between w-full text-left",
    }}
    contentProps={{
      className: "transition-height duration-500 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

const ContentAccordion = ({ value }) => {
  const { theme } = value;

  return (
    <div className="mt-24 bg-gradient-to-b from-[#FF006820] to-transparent relative">
      <img
        src={theme ? sphere_dark_two : rectangle}
        className="absolute left-0 top-0 max-w-[160px] md:max-w-none"
        alt="rectangle"
      />
      <img
        src={hexagon}
        className="absolute top-[40%] md:top-0 left-4 -translate-x-1/2 md:translate-x-0 md:left-[17%] lg:left-1/2 2xl:left-[20%] translate-y-3/4 max-w-[180px] md:max-w-none"
        alt="hex"
      />
      <img
        src={theme ? sphere_dark : cube_two}
        className="absolute -right-24 md:right-[23%] 2xl:right-1/4 top-6"
        alt="cube"
      />
      <img
        src={theme ? cube_one_dark : cube_one}
        className="absolute -right-24 -rotate-45 translate-y-[200%] hidden md:block"
        alt="cube"
      />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={accordionCardPosition}
      >
        <Accordion className="flex flex-col items-center justify-center py-24" transition transitionTimeout={500}>
          <Card className="py-9 px-12 flex flex-col gap-20 lg:gap-16 w-[340px] lg:w-[900px]" theme={theme}>
            {accordionContent.map((item) => (
              <AccordionItem
                header={item.header}
                className={`max-w-[320px] lg:max-w-[860px] flex flex-col font-['Poppins'] text-base text-black ${
                  theme && "invert"
                }`}
                key={item.id}
              >
                <p className="pt-8 pb-6">{item.p1}</p>
                <ol className="flex flex-col gap-6">
                  <li>{item.ol_1}</li>
                  <li>{item.ol_2}</li>
                  <li>{item.ol_3}</li>
                  <li>{item.ol_4}</li>
                  {item.id === "a2" && <li>{item.ol_5}</li>}
                  {item.id === "a2" && <li>{item.ol_6}</li>}
                </ol>
                <p className="pt-6">{item.p2}</p>
              </AccordionItem>
            ))}
          </Card>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default ContentAccordion;
