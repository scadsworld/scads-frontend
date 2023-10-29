import { social_icons } from "../../database/items-database";

const Footer = (props) => {
  const { theme } = props;

  return (
    <div
      className={`flex flex-col justify-center items-center pb-10 lg:pb-2 gap-6 ${props.className}`}
    >
      <div className="flex gap-5">
        {social_icons.map((item) => (
          <button key={item.id}>
            <img src={item.icon} className={`${theme && "invert"}`} alt="" />
          </button>
        ))}
      </div>
      <p className={`font-['Lato'] text-lg ${theme && "text-[#B6B6B6]"}`}>
        SCADS © Copyright 2023. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
