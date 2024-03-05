import { FcClock } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
import Image from "next/image";
import React from "react";

const Festival = ({ section }) => {
  return (
    <section id="festival" className="relative paddings bg-base-200">
      <Image
        alt="festival background"
        src={section.background.nodes[0].sourceUrl}
        quality={100}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="max-w-7xl m-auto px-4 ">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="w-full md:w-1/2 space-y-6 z-10">
            <h3 className="heading md:pb-2">{section.heading}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: section.description,
              }}
              className="space-y-4"
            />
          </div>

          <div className="w-full md:w-1/2 relative">
            <Image
              alt="festival picture"
              src={section.image.nodes[0].sourceUrl}
              quality={100}
              fill
              style={{
                objectFit: "cover",
              }}
              className="clipping-mask"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-14 md:gap-10 pt-20 ">
        <div className="group">
          <div className="card w-96 h-[320px] bg-base-100 text-accent-content rounded-3xl">
            <div className="card-body items-center text-center">
              <FcLowPriority className="text-7xl mt-[-70px] group-hover:animate-arrow-bounce" />

              <h2 className="card-title pb-3 pt-3">{section.place_heading}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: section.place_description }}
              />
            </div>
          </div>
        </div>
        <div className="group">
          <div className="card w-96 h-[320px] bg-base-100  rounded-3xl">
            <div className="card-body items-center text-center">
              <FcClock className="text-7xl mt-[-70px] group-hover:animate-spin" />

              <h2 className="card-title pb-3 pt-3 text-accent-content">
                {section.time_heading}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: section.time_description }}
                className="text-accent-content"
              />
            </div>
          </div>
        </div>
        <div className="group ">
          <div className="card w-96 h-[320px] bg-base-100 text-accent-content rounded-3xl">
            <div className="card-body items-center text-center">
              <FcLike className="text-7xl mt-[-70px] group-hover:animate-heartbeat" />

              <h2 className="card-title pb-3 pt-3">{section.goal_heading}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: section.goal_description }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festival;
