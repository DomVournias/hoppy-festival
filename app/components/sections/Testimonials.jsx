import Image from "next/image";
import React from "react";

const Testimonials = ({ section }) => {
  const logos = section.logos.nodes;
  return (
    <section id="testimonials" className="bg-neutral-content">
      <div className="max-w-7xl m-auto space-y-6 paddings">
        <h3 className="heading pb-4 text-center text-neutral">
          {section.heading}
        </h3>
        <div>
          <ul className="flex flex-wrap gap-10 justify-center">
            {logos.map((item, index) => (
              <li
                key={index}
                className="bg-base-200 rounded-xl p-2 w-fit saturate-0 transition ease-in-out hover:saturate-100 hover:bg-base-100 duration-300"
              >
                <a
                  target="_blank"
                  rel="noopener"
                  href={item.altText}
                  className="relative block w-40 h-24"
                >
                  <Image
                    src={item.sourceUrl}
                    alt={item.title}
                    fill={true}
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
