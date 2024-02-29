import React from "react";
import dynamic from "next/dynamic";

const CountdownTimer = dynamic(() => import("../timer/CountdownTimer"), {
  ssr: false,
  loading: () => (
    <span className="loading loading-infinity loading-lg text-accent-content"></span>
  ),
});

const Upcoming = ({ section }) => {
  const date = section.eventDate;

  return (
    <section id="upcoming">
      <div className="w-full bg-accent px-3">
        <div className="flex flex-col md:flex-row max-w-full md:max-w-7xl text-center md:text-left m-auto items-center justify-between py-6">
          <div className="text-accent-content space-y-1 md:space-y-4">
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
