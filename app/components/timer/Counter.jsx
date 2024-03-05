import DateTimeDisplay from "./DateTimeDisplay";

const Counter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex flex-wrap justify-evenly md:flex-row gap-4">
      <DateTimeDisplay value={days} type={"Μέρες"} isDanger={days <= 3} />
      <DateTimeDisplay value={hours} type={"Ώρες"} isDanger={false} />
      <DateTimeDisplay value={minutes} type={"Λεπτά"} isDanger={false} />
      <DateTimeDisplay value={seconds} type={"Δευτερόλεπτα"} isDanger={false} />
    </div>
  );
};

export default Counter;
