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
        w-14 
        h-8
        rounded-full 
        p-1 
        ${theme ? "bg-[#DBDBDB]" : "bg-[#0D0D0D]"}
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
            w-6 
            h-6 
            relative
           ${theme ? "ml-6" : " ml-0"} 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        `}
      >
        {theme ? (
          <img
            src={moon}
            className="invert"
            height={40}
            width={40}
            alt="moon"
          />
        ) : (
          <img src={sun} className="invert" height={40} width={40} alt="sun" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggler;
