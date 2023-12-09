import { social_icons } from "../../Tools/items-database";
import trademark from "../../assets/trademark-icon.svg";

const Footer = (props) => {
  const { theme } = props;

  return (
    <div
      className={`flex flex-col justify-center items-center pb-10 lg:pb-10 gap-6 ${props.className}`}
    >
      <div className="flex gap-5">
        {social_icons.map((item) => (
          <button key={item.id}>
            <img src={item.icon} className={`${theme && "invert"}`} alt="" />
          </button>
        ))}
      </div>
      <p
        className={`font-['Poppins'] text-lg text-center flex gap-1 items-center ${
          theme && "text-[#B6B6B6]"
        }`}
      >
        SCADS © Copyright 2023. All rights reserved.{" "}
        <img
          src={trademark}
          className={`${theme && "invert contrast-50"}`}
          width={10}
          alt=""
        />
      </p>
    </div>
  );
};

export default Footer;
