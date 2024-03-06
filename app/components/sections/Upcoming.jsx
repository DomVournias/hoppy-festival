import React from "react";
import dynamic from "next/dynamic";

const CountdownTimer = dynamic(() => import("../timer/CountdownTimer"), {
  ssr: false,
  loading: () => (
    <span className="loading loading-infinity loading-lg text-secondary-content"></span>
  ),
});

const Upcoming = ({ section }) => {
  const date = section.eventDate;

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="upcoming">
      <div className="w-full bg-secondary px-3 ">
        <div className="flex flex-col md:flex-row max-w-full md:max-w-7xl text-center md:text-left m-auto items-center justify-between py-6 h-fit xl:h-48">
          <div className="text-secondary-content space-y-1 md:space-y-4">
            <div
              dangerouslySetInnerHTML={{ __html: section.heading }}
              className="heading"
            />
            <div
              className="content font-medium"
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
          </div>
          <div className="flex items-center justify-center ">
            <CountdownTimer targetDate={date} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
