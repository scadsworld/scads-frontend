const Card = (props) => {
  const { theme, children } = props;

  return (
    <div
      className={`backdrop-filter backdrop-blur-[4.5px] bg-opacity-30 ${
        theme
          ? "bg-[#58585E] text-[#B6B6B6] shadow-sm shadow-[#ffffff20]"
          : "bg-[rgba(255,255,255,0.6)] text-black shadow-sm shadow-white"
      } rounded-[30px] lg:px-10 ${props.className}`}
    >
      {children}
    </div>
  );
};

export default Card;
