import Image from "next/image";
import React from "react";

const Carousel = ({ items }) => {
  return (
    <div className="relative flex carousel w-full xl:w-1/2 xl:h-screen">
      {items.map((item, index) => (
        <div
          key={index}
          id={`image-${index}`}
          className="carousel-item relative w-full h-screen"
        >
          <Image
            alt={item.title}
            src={item.sourceUrl}
            className="w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            fill={true}
            srcset={item.srcset}
            style={{ objectFit: "cover" }}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#image-${index === 0 ? items.length - 1 : index - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#image-${(index + 1) % items.length}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
