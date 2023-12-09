import { motion } from "framer-motion";
import { statTooltip } from "../../../Tools/items-database";

const StatsTooltip = () => {
  let tooltip = (
    <ul className="flex flex-col lg:flex-row gap-6 2xl:gap-10">
      {statTooltip.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-center md:items-start xl:items-center md:gap-2"
        >
          <span className="font-semibold xl:text-center max-w-[320px] lg:max-w-[140px] xl:max-w-[200px]">
            {item.title}
          </span>
          <p className="text-center md:text-start xl:text-center max-w-[320px] lg:max-w-[140px] xl:max-w-[200px]">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );

  return (
    <motion.div
      className="hidden lg:flex justify-center mt-6"
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: "auto",
        opacity: 1,
      }}
      exit={{
        height: 0,
        opacity: 0,
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{ duration: 0.1 }}
      >
        {tooltip}
      </motion.div>
    </motion.div>
  );
};

export default StatsTooltip;
