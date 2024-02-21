import FestivalAnimation from "../animations/festival";
import Image from "next/image";
import React from "react";
import background from "@/images/bg_doodle_1.png";
import festivalImg from "@/images/Festival.jpeg";
import mask from "@/images/mask.png";

const Festival = ({ section }) => {
  // console.log("FESTIVAL DATA", section);
  return (
    <section className="relative">
      <Image
        alt="Mountains"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className=" max-w-7xl m-auto py-40">
        <div className="flex gap-20">
          <div className="w-1/2 space-y-6 z-10">
            <h3 className="text-4xl font-bold pb-2">Το Φεστιβάλ</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: section.content,
              }}
              className="space-y-4"
            />
          </div>

          <div className="w-1/2 relative">
            {/* <FestivalAnimation /> */}
            <Image src={festivalImg} className="clipping-mask"></Image>
            {/* <Image src={mask}></Image> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festival;
