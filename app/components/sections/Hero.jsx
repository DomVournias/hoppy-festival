import BackgroundVideo from "@/videos/KidsFunFestivalVideo.mp4";
import React from "react";
import Video from "next-video";

// import dynamic from "next/dynamic";

// const Video = dynamic(() => import("next-video"), {
//   ssr: false,
//   loading: () => (
//     <span className="loading loading-infinity loading-lg text-accent-content"></span>
//   ),
// });

const Hero = ({ section }) => {
  return (
    <section id="hero">
      <div className="relative flex flex-col items-start justify-start w-full">
        <Video src={BackgroundVideo} autoplay muted loop />
        <div className="absolute z-10 space-y-2 text-white text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div
            dangerouslySetInnerHTML={{
              __html: section.heading,
            }}
            className="hero-heading"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: section.description,
            }}
            className="hero-description"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
