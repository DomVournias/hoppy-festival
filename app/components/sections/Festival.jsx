import Animated from "../Animated";
import { FcClock } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
import FestivalCard from "../cards/FestivalCard";
import Image from "next/image";
import React from "react";

const Festival = ({ section }) => {
  const cards = [
    {
      heading: section.place_heading,
      description: section.place_description,
      icon: (
        <FcLowPriority className="text-7xl mt-[-70px] group-hover:animate-arrow-bounce" />
      ),
    },
    {
      heading: section.time_heading,
      description: section.time_description,
      icon: (
        <FcClock className="text-7xl mt-[-70px] group-hover:animate-spin" />
      ),
    },
    {
      heading: section.goal_heading,
      description: section.goal_description,
      icon: (
        <FcLike className="text-7xl mt-[-70px] group-hover:animate-heartbeat" />
      ),
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

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
          top: "-100px",
          opacity: 0.5,
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

      <div
        className="flex flex-wrap justify-center gap-14 md:gap-10 pt-20 "
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 1,
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        {cards.map((card, index) => (
          <Animated variants={variants} delay={true} index={index} key={index}>
            <FestivalCard
              heading={card.heading}
              description={card.description}
              icon={card.icon}
            />
          </Animated>
        ))}
      </div>
    </section>
  );
};

export default Festival;
