import CountdownTimer from "../timer/CountdownTimer";
import React from "react";

const Upcoming = ({ section }) => {
  const date = section.upcoming.eventDate;

  return (
    <section>
      <div className="w-full bg-primary">
        <div className="flex max-w-7xl m-auto items-center justify-between py-6">
          <div className="text-white space-y-4">
            <div
              dangerouslySetInnerHTML={{ __html: section.upcoming.heading }}
              className="text-4xl font-bold"
            />
            <div
              className="text-lg font-medium"
              dangerouslySetInnerHTML={{ __html: section.upcoming.description }}
            />
          </div>
          <div>
            <CountdownTimer targetDate={date} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
