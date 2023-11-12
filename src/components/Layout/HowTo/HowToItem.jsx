import Card from "../../UI/Card";
import { howToItems } from "../../../Tools/items-database";

const HowToItem = ({ step, value }) => {
  const { id, text, img, img_two, link, text_sm } = step;
  const { theme } = value;

  const stepClassName = `${
    theme ? "text-[#B6B6B6]" : "text-black"
  } flex flex-col justify-center items-center py-4 px-8 font-['Poppins'] max-w-[340px] lg:max-w-[300px] xl:max-w-[379px]
  ${id === "Step 2" ? "md:mt-16 pb-10" : "mt-6"} 
  ${id === "Step 5" && "md:mt-[80px] lg:max-w-[360px]"} 
  ${id === "Step 8" && "md:mt-16"}
  ${id === "Step 6" && "hidden"}
  ${id === "Step 9" && "md:mt-[80px]"}
  ${id === "Step 11" && "hidden"}
  `;

  return (
    <Card theme={theme} className={stepClassName}>
      <h2 className="font-bold text-xl">{id}</h2>
      <p className="max-w-[351px] py-6">{text}</p>
      {img_two && <img src={img_two} className="pb-6" alt={`Step ${id} - 2`} />}
      {img && <img src={img} alt={`Step ${id}`} />}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 font-semibold"
        >
          Learn More
        </a>
      )}
      {text_sm && (
        <ul>
          {text_sm.split("\n").map((line, index) => (
            <li key={index} className="text-xs">
              {line}
            </li>
          ))}
        </ul>
      )}
      {id === "Step 5" && (
        <>
          <h2 className="font-bold text-xl mt-12">Step 6</h2>
          <p className="max-w-[351px] py-6">{howToItems[5].text}</p>
        </>
      )}
      {id === "Step 10" && (
        <>
          <h2 className="font-bold text-xl">Step 11</h2>
          <p className="max-w-[351px] py-6">{howToItems[10].text}</p>
        </>
      )}
    </Card>
  );
};

export default HowToItem;
