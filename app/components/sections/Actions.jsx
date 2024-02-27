import Carousel from "../carousel/Carousel";
import React from "react";

const Actions = ({ section }) => {
  // console.log(section);
  return (
    <section id="actions">
      <div className="relative flex flex-col-reverse gap-10 xl:gap-0 xl:flex-row xl:space-x-20 items-center xl:h-screen">
        <Carousel items={section.gallery.nodes} />
        <div className="w-full xl:w-1/2 xl:pr-40 space-y-6 flex flex-col justify-center md:py-40 px-4">
          <h3 className="heading md:pb-2">{section.heading}</h3>
          <div dangerouslySetInnerHTML={{ __html: section.description }} />
        </div>
      </div>
    </section>
  );
};

export default Actions;
