import Animated from "../Animated";
import Carousel from "../carousel/Carousel";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import React from "react";

const Actions = ({ section }) => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section id="actions" className="relative flex flex-col bg-base-100">
      <Image
        alt="festival background"
        src={section.background.nodes[0].sourceUrl}
        quality={100}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
          transform: "scaleX(-1)",
          top: "-150px",
          opacity: 0.5,
          zIndex: 1,
        }}
      />
      <div className="max-w-7xl m-auto space-y-6  pt-20 pb-20 px-4 z-30">
        <div>
          <h3 className="heading md:pb-2 text-center">{section.heading}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: section.descriptionOne }}
            className="content font-medium text-center"
          ></div>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 pt-4 md:pt-6 ">
          {section.actions.map((action, index) => (
            <Animated
              variants={variants}
              delay={true}
              index={index}
              key={index}
            >
              <li
                key={index}
                className="bg-primary text-primary-content py-3 px-6 rounded-lg flex justify-center items-center gap-2 font-medium"
              >
                <div>
                  <FaCheckCircle className="text-[14px] text-primary-content" />
                </div>
                <p>{action.title}</p>
              </li>
            </Animated>
          ))}
        </ul>
      </div>
      <div className="flex flex-col-reverse  gap-10 xl:gap-0 xl:flex-row xl:space-x-20 items-center xl:h-screen z-30 smh:flex-col-reverse smh:h-auto">
        <Carousel items={section.gallery.nodes} />
        <div className="w-full xl:w-1/2 px-4 lg:py-20 xl:py-40  xl:pr-20 space-y-6 flex flex-col justify-center smh:w-full ">
          <div dangerouslySetInnerHTML={{ __html: section.description }} />
        </div>
      </div>
    </section>
  );
};

export default Actions;
