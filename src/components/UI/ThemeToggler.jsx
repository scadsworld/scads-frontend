import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";

const ThemeToggler = ({ value }) => {
  const { theme, setTheme } = value;

  const themeToggleHandler = () => {
    setTheme(!theme);
  };

  return (
    <button
      onClick={themeToggleHandler}
      className={`
        w-12 
        h-6 
        rounded-full 
        p-1 
        ${theme ? "bg-white" : "bg-[#0D0D0D]"}
        relative 
        transition-colors 
        duration-500 
        ease-in
        `}
    >
      <div
        id="toggle"
        className={`
            rounded-full 
            w-4 
            h-4 
            relative
           ${theme ? "ml-6" : " ml-0"} 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        `}
      >
        {theme ? (
          <img src={moon} className="invert" width={30} height={30} alt="" />
        ) : (
          <img src={sun} width={30} className="invert" height={30} alt="" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggler;
