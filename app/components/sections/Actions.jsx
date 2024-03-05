import Carousel from "../carousel/Carousel";
import { FaCheckCircle } from "react-icons/fa";
import React from "react";

const Actions = ({ section }) => {
  // console.log(section);
  return (
    <section id="actions" className="flex flex-col bg-base-100">
      <div className="max-w-7xl m-auto space-y-6  pt-20 pb-20 px-4">
        <div>
          <h3 className="heading md:pb-2 text-center">{section.heading}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: section.descriptionOne }}
            className="content font-medium text-center"
          ></div>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 pt-4 md:pt-6">
          {section.actions.map((action, index) => (
            <li
              key={index}
              className="bg-primary text-primary-content py-3 px-6 rounded-lg flex justify-center items-center gap-2 font-medium"
            >
              <FaCheckCircle className="text-primary-content" />
              <p>{action.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex flex-col-reverse gap-10 xl:gap-0 xl:flex-row xl:space-x-20 items-center xl:h-screen">
        <Carousel items={section.gallery.nodes} />
        <div className="w-full xl:w-1/2 xl:pr-40 space-y-6 flex flex-col justify-center md:py-40 px-4">
          <div dangerouslySetInnerHTML={{ __html: section.description }} />
        </div>
      </div>
    </section>
  );
};

export default Actions;
