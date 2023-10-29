const Card = (props) => {
  const { theme, children } = props;

  return (
    <div
      className={`backdrop-filter backdrop-blur-sm bg-opacity-20 ${
        theme
          ? "bg-[#424242] text-[#B6B6B6] shadow-sm shadow-[#484850]"
          : "bg-white text-black shadow-sm shadow-white"
      } rounded-[30px] lg:px-10 ${props.className}`}
    >
      {children}
    </div>
  );
};

export default Card;
