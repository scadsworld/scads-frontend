import { dropdownTokens } from "../../Tools/items-database";
import cross_light from "../../assets/cross_light.svg";
import cross_dark from "../../assets/cross_dark.svg";
const DropdownModal = ({ updateString, value, show }) => {
  const { theme } = value;
  const handleClick = (newString) => {
    updateString(newString);
    show(false);
  };

  return (
    <div className="absolute z-30 w-full mx-auto top-0">
      <div
        className={` ${theme ? "text-white" : "text-black"}
        ${
          theme ? "bg-[#191919]" : "bg-[#E2E6E9]"
        } flex flex-col gap-10 p-6 rounded-[30px] h-[485px] lg:h-[420px] xl:h-[485px] font-['Poppins']`}
      >
        <div className="flex justify-between">
          <h1 className="text-center text-2xl font-semibold">Select Token</h1>
          <button onClick={() => show(false)}>
            <img
              src={theme ? cross_light : cross_dark}
              width={32}
              alt="close"
            />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {dropdownTokens.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.name)}
              className="hover:bg-slate-300 hover:text-black transition-all duration-200 px-4 py-2 text-start text-lg rounded-[30px] flex gap-2 items-center justify-center"
            >
              <img src={item.icon} alt={item.id} width={20} />
              <span className="w-[100px]">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownModal;
