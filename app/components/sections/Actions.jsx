import Carousel from "../carousel/Carousel";
import React from "react";

const Actions = ({ section }) => {
  // console.log(section);
  return (
    <section id="actions">
      <div className="flex space-x-20 items-center h-screen relative">
        <Carousel items={section.gallery.nodes} />
        <div className="w-1/2 pr-40 space-y-6 flex flex-col justify-center py-40">
          <h3 className="text-4xl font-bold pb-2 text-black ">
            {section.heading}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: section.description }} />
        </div>
      </div>
    </section>
  );
};

export default Actions;
