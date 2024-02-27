import BackgroundVideo from "@/videos/KidsFunFestival.mp4";
import React from "react";
import Video from "next-video";

const Hero = ({ section }) => {
  return (
    <section>
      <div className="relative flex flex-col items-start justify-start w-full">
        <Video src={BackgroundVideo} autoplay muted loop />
        <div className="absolute z-10 space-y-2 text-white text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div
            dangerouslySetInnerHTML={{
              __html: section.heading,
            }}
            className="text-xl xl:text-6xl font-extrabold xl:pb-4 "
          />
          <div
            dangerouslySetInnerHTML={{
              __html: section.description,
            }}
            className="hero-description"
          />
        </div>

        {/* <video
          autoPlay
          loop
          muted
          className="block absolute w-full h-full object-cover"
        >
          <source type="video/mp4" src="/KidsFunFestivalHeroVideo.mp4" />
        </video> */}
      </div>
    </section>
  );
};

export default Hero;
