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
    <section>
      <div className="w-full bg-accent ">
        <div className="flex max-w-7xl m-auto items-center justify-between py-6">
          <div className="text-accent-content space-y-4">
            <div
              dangerouslySetInnerHTML={{ __html: section.heading }}
              className="text-4xl font-bold "
            />
            <div
              className="text-lg font-medium"
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
          </div>
          <div className="flex items-center justify-center h-36">
            <CountdownTimer targetDate={date} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
