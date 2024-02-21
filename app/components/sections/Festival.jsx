import { FcClock } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
import FestivalAnimation from "../animations/festival";
import Image from "next/image";
import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import background from "@/images/bg_doodle_1.png";
import festivalImg from "@/images/Festival.jpeg";
import mask from "@/images/mask.png";

const Festival = ({ section }) => {
  return (
    <section className="relative">
      <Image
        alt="festival background"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className=" max-w-7xl m-auto pt-40 pb-20">
        <div className="flex gap-20">
          <div className="w-1/2 space-y-6 z-10">
            <h3 className="text-4xl font-bold pb-2">Το Φεστιβάλ</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: section.description,
              }}
              className="space-y-4"
            />
          </div>

          <div className="w-1/2 relative">
            {/* <FestivalAnimation /> */}
            <Image
              alt="festival picture"
              src={festivalImg}
              className="clipping-mask"
            ></Image>
            {/* <Image src={mask}></Image> */}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mb-20">
        <div className="">
          <div className="card w-96 h-[340px] bg-primary text-primary-content rounded-3xl">
            <div className="card-body items-center text-center">
              <FcLowPriority className="text-5xl" />

              <h2 className="card-title pb-3">{section.place_heading}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: section.place_description }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 h-[340px] bg-primary text-primary-content rounded-3xl">
            <div className="card-body items-center text-center">
              <FcClock className="text-5xl" />

              <h2 className="card-title pb-3">{section.time_heading}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: section.time_description }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 h-[340px] bg-primary text-primary-content rounded-3xl">
            <div className="card-body items-center text-center">
              <FcLike className="text-5xl" />

              <h2 className="card-title pb-3">{section.goal_heading}</h2>
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
