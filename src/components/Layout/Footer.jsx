import { social_icons } from "../../database/items-database";

const Footer = ({ theme }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 pb-10 gap-6">
      <div className="flex gap-5">
        {social_icons.map((item) => (
          <button key={item.id}>
            <img src={item.icon} className={`${theme && "invert"}`} alt="" />
          </button>
        ))}
      </div>
      <p className={`font-['Lato'] text-lg ${theme && "text-white"}`}>
        SCADS © Copyright 2023. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
