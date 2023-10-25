const Card = (props) => {
  const { theme, children } = props;

  return (
    <div
      className={`backdrop-filter backdrop-blur-md bg-opacity-10 ${
        theme
          ? "bg-[#424242] text-white border-2 border-[#7768E5]"
          : "bg-white text-black shadow-md"
      } rounded-[30px] lg:px-10 ${props.className}`}
    >
      {children}
    </div>
  );
};

export default Card;
