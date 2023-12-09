import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { tokenomics } from "../../../Tools/items-database";
import Card from "../../UI/Card";
import { AnimatePresence, motion } from "framer-motion";

const TabsLayout = ({ value }) => {
  const { theme } = value;

  const activeClasses =
    "text-pink-700 relative before:absolute before:inline-block lg:before:w-2 before:h-2 before:bg-pink-700 before:rounded-full before:content-[''] before:-left-4 before:top-1/2 before:-translate-y-1/2";

  return (
    <Card
      theme={theme}
      className="flex justify-center items-center py-10 font-['Poppins'] rounded-[60px] mt-10 max-w-[350px] sm:max-w-none backdrop-blur-3xl"
    >
      <Tabs
        className={`flex flex-col md:flex-row items-center justify-center ${
          theme ? "text-white" : "text-black"
        }`}
      >
        <TabList
          className={`flex flex-row md:flex-col flex-wrap justify-center gap-4 ps-3 pr-3 py-4 lg:ps-0 md:pr-20 lg:py-0`}
        >
          {tokenomics.map((thumb) => (
            <Tab
              key={thumb.id}
              className={`
              hover:text-[#B52761] lg:hover:translate-x-2 cursor-pointer text-start transition duration-200 font-semibold focus:outline-none `}
              selectedClassName={activeClasses}
            >
              {thumb.thumb}
            </Tab>
          ))}
        </TabList>
        <AnimatePresence mode="wait">
          {tokenomics.map((item) => (
            <TabPanel
              key={item.id}
              className="flex flex-col justify-center lg:h-[540px] lg:max-w-[1000px] text-start"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6 max-w-[320px] md:max-w-none"
              >
                <h1 className="text-[40px] text-center lg:text-start font-bold">
                  {item.thumb}
                </h1>
                <p>{item.text}</p>
                <p>{item.bullet_one}</p>
                <p>{item.bullet_two}</p>
                <p>{item.bullet_three}</p>
              </motion.div>
            </TabPanel>
          ))}
        </AnimatePresence>
      </Tabs>
    </Card>
  );
};

export default TabsLayout;
