import Animated from "../Animated";
import DateTimeDisplay from "./DateTimeDisplay";

const Counter = ({ days, hours, minutes, seconds }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const digits = [
    {
      component: (
        <DateTimeDisplay value={days} type={"Μέρες"} isDanger={days <= 3} />
      ),
    },
    {
      component: (
        <DateTimeDisplay value={hours} type={"Ώρες"} isDanger={false} />
      ),
    },
    {
      component: (
        <DateTimeDisplay value={minutes} type={"Λεπτά"} isDanger={false} />
      ),
    },
    {
      component: (
        <DateTimeDisplay
          value={seconds}
          type={"Δευτερόλεπτα"}
          isDanger={false}
        />
      ),
    },
  ];
  return (
    <div className="flex flex-wrap justify-evenly md:flex-row gap-4">
      {digits.map((digit, index) => (
        <Animated variants={variants} delay={true} index={index} key={index}>
          {digit.component}
        </Animated>
      ))}
    </div>
  );
};

export default Counter;
