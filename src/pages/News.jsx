import { motion } from "framer-motion";
import { news } from "../Tools/items-database";
import Card from "../components/UI/Card";
import line from "../assets/DecorativeLine.svg";

const News = ({ value }) => {
  const { theme } = value;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-20 mt-40 font-['Poppins'] relative md:h-screen overflow-hidden"
    >
      <img
        src={line}
        className="absolute w-screen -top-64 left-0 lg:block hidden"
        alt=""
      />
      <div
        className={` ${
          theme ? "text-[#B6B6B6]" : "text-black"
        } flex flex-col items-center`}
      >
        <h1 className="text-[40px] font-bold">The News</h1>
        <p className="text-xl text-center lg:text-start">
          Here you can see all the current news realted to finance and crypto.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {news.map((item) => (
          <Card
            theme={theme}
            className="flex flex-col items-center lg:items-start w-[330px] h-[290px] md:w-[360px] md:h-[290px]"
            key={item.id}
          >
            <img
              src={item.img}
              className="w-[300px] md:w-full h-[200px] md:h-[200px] py-2 rounded-3xl object-cover"
              alt=""
            />
            <h1 className="text-lg font-['Poppins'] text-center lg:text-start">
              {item.title}
            </h1>
            <a
              href={item.link}
              className="mt-auto pb-3 md:ms-auto text-base underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </Card>
        ))}
      </div>
    </motion.main>
  );
};

export default News;
