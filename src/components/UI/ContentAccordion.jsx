import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { accordionContent } from "../../Tools/items-database";
import arrow from "../../assets/accrodion_arrow.svg";
import Card from "./Card";
import { accordionCardVariants } from "../../Tools/variants";
import { motion } from "framer-motion";

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
          className={`transition-transform duration-500 ease-out ${
            isEnter && "rotate-180"
          }`}
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
    <div
      className={`mt-24 ${
        theme && "bg-[url('../src/assets/accordion-bg-dark.webp')]"
      } ${
        theme === false && "bg-[url('../src/assets/accordion-bg.webp')]"
      } bg-fixed bg-cover`}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={accordionCardPosition}
      >
        <Accordion
          className="flex flex-col items-center justify-center py-32"
          transition
          transitionTimeout={500}
        >
          <Card
            className="py-9 px-12 flex flex-col gap-20 lg:gap-16 w-[340px] lg:w-[790px]"
            theme={theme}
          >
            {accordionContent.map((item) => (
              <AccordionItem
                header={item.header}
                className={`max-w-[320px] lg:max-w-[691px] flex flex-col font-['Poppins'] text-base text-black ${
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
