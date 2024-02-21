const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="text-center px-4 py-4  text-accent-content">
      <p className="text-5xl pb-2 ">{value}</p>
      <span className="opacity-70">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
