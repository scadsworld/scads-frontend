import arrow from "../../assets/accrodion_arrow.svg";
import switch_arrow from "../../assets/switch_arrow.svg";

const SwapScads = ({ value }) => {
  const { theme } = value;

  return (
    <div
      className={`flex flex-col md:flex-row justify-between px-5 border rounded-3xl font-['Poppins'] max-w-[330px] md:max-w-none md:w-full relative ${
        theme ? "border-white" : "border-black"
      }`}
    >
      <div
        className={`flex flex-col justify-between py-3 w-full ${
          theme ? "text-white" : "text-black"
        }`}
      >
        <div className="flex flex-col gap-1">
          <button
            className={`flex items-center w-fit text-base gap-2 border rounded-3xl px-2 ${
              theme ? "border-white" : "border-black"
            }`}
          >
            USDT
            <img
              src={arrow}
              width={16}
              height={16}
              alt="Dropdown Arrow"
              className={`${theme && "invert"}`}
            />
          </button>
          <p className="text-sm">
            <span className="opacity-60">Balance:</span> 30.05
          </p>
        </div>
        <input
          type="number"
          className={`bg-transparent text-[28px] focus:outline-none mt-14 font-['Poppins'] font-medium text-right md:max-w-[65%] ${
            theme ? "placeholder:text-white" : "placeholder:text-black"
          }`}
          placeholder="0.00"
        />
      </div>
      <div
        className={`w-full h-[1px] md:w-[1px] md:h-full border ${
          theme ? "border-white" : "border-black"
        } absolute left-0 top-1/2 md:top-0 md:left-1/2 z-0`}
      ></div>
      <button className="rounded-full w-[40px] h-[40px] border flex md:flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 bg-[#2B2B37]">
        <img src={switch_arrow} alt="swap" className="rotate-90 md:rotate-0" />
        <img
          src={switch_arrow}
          className="-rotate-90 md:rotate-180"
          alt="swap"
        />
      </button>
      <div
        className={`flex flex-col justify-between py-3 ${
          theme ? "text-white" : "text-black"
        }`}
      >
        <div className="flex flex-col md:items-end gap-1">
          <button
            className={`flex items-center w-fit text-base gap-2 border rounded-3xl px-2 ${
              theme ? "border-white" : "border-black"
            }`}
          >
            SCADS
            <img
              src={arrow}
              width={16}
              height={16}
              alt="Dropdown Arrow"
              className={`${theme && "invert"}`}
            />
          </button>
          <p className="text-sm">
            <span className="opacity-60">Balance:</span> 0.00
          </p>
        </div>
        <input
          type="number"
          className={`bg-transparent text-[28px] focus:outline-none mt-14 font-['Poppins'] font-medium text-right ${
            theme ? "placeholder:text-white" : "placeholder:text-black"
          }`}
          placeholder="0.00"
        />
      </div>
    </div>
  );
};

export default SwapScads;
