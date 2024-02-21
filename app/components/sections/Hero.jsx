import HoppyFestivalVideo from "@/public/Hoppy Festival 2023.mp4";
import NextVideo from "next-video";
import React from "react";

const Hero = ({ section }) => {
  return (
    <section className="mt-[-80px] h-screen">
      <div className="relative w-full h-full flex items-center justify-center z-[-1]">
        <div className="absolute z-10 space-y-2 text-white text-center">
          <div
            dangerouslySetInnerHTML={{
              __html: section.heading,
            }}
            className="text-6xl font-extrabold pb-4 "
          />
          <div
            dangerouslySetInnerHTML={{
              __html: section.description,
            }}
            className="text-lg font-semibold"
          />
        </div>
        <video
          autoPlay
          loop
          muted
          className="block absolute w-full h-full object-cover"
        >
          <source type="video/mp4" src="/Hoppy Festival 2023.mp4" />
        </video>
      </div>
      {/* <NextVideo src={HoppyFestivalVideo} autoplay="on" /> */}
    </section>
  );
};

export default Hero;
