"use client";

import Counter from "./Counter";
import ExpiredNotice from "./ExpiredNotice";
import React from "react";
import { useCountdown } from "@/hooks/useCountdown";

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    );
  }
};

export default CountdownTimer;
