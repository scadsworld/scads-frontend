import { motion } from "framer-motion";
import { storyContent } from "../Tools/items-database";
import { tokenomicsCardVariants, opacityVariants } from "../Tools/variants";

const Story = ({ value }) => {
  let isReverse = false;

  const { theme } = value;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col items-center gap-y-8 mt-28 lg:mt-44 pb-20 font-['Poppins'] ${
        theme ? "text-[#B6B6B6]" : "text-black"
      }`}
    >
      <h1 className="text-4xl font-bold text-center">
        The Tale of SCADS and TWINE
      </h1>
      {storyContent.map((story, index) => {
        isReverse = !isReverse;
        return (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-8  ${
              isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <motion.img
              src={story.img}
              alt="story"
              className="max-w-[300px] md:max-w-[400px] rounded-3xl"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={tokenomicsCardVariants}
            />
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={opacityVariants}
              className="max-w-[340px] md:max-w-[600px]"
            >
              {story.paragraph}
            </motion.p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Story;
