import Image from "next/image";
import React from "react";

const Sponsors = ({ section }) => {
  // console.log(section);
  return (
    <section id="sponsors" className="bg-base-200 px-4 paddings">
      <div className="flex flex-col xl:flex-row max-w-7xl m-auto xl:space-x-40 space-y-10 xl:space-y-0">
        <div className="w-full xl:w-1/2 space-y-6">
          <h2 className="heading ">{section.heading}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: section.description }}
            className="space-y-4"
          />
          <div className="flex flex-col justify-center items-center">
            <div
              dangerouslySetInnerHTML={{
                __html: section.first_support_description,
              }}
              className="italic"
            />
            <ul className="flex flex-wrap">
              {section.first_support_logos.nodes.map((item, index) => (
                <li key={index} className="rounded-xl p-2 w-fit">
                  <div className="relative h-[110px] w-[230px] ">
                    <Image
                      src={item.sourceUrl}
                      alt={item.title}
                      fill={true}
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              dangerouslySetInnerHTML={{
                __html: section.second_support_description,
              }}
              className="italic"
            />
            <ul className="flex flex-wrap">
              {section.second_support_logos.nodes.map((item, index) => (
                <li key={index} className="rounded-xl p-2 w-fit">
                  <div className="relative h-[110px] w-[230px] ">
                    <Image
                      src={item.sourceUrl}
                      alt={item.title}
                      fill={true}
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full xl:w-1/2 space-y-10">
          <div className="space-y-4 flex flex-col justify-center items-center ">
            <div className="text-base font-medium text-neutral-content py-2 px-4 bg-neutral rounded-xl w-fit border-b-2">
              Μέγας Χορηγός
            </div>
            <div className="rounded-xl p-2 w-fit ">
              <div className="relative h-[110px] w-[230px] mt-[-20px]">
                <Image
                  src={section.top_sponsor.node.sourceUrl}
                  alt={section.top_sponsor.node.title}
                  fill={true}
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4 flex flex-col justify-center items-center ">
            <div className="text-base font-medium text-neutral-content py-2 px-4 bg-neutral rounded-xl w-fit">
              Χορηγοί
            </div>
            <ul className="flex flex-wrap gap-0 xl:gap-10 justify-evenly xl:justify-start">
              {section.sponsors.nodes.map((item, index) => (
                <li key={index} className="rounded-xl p-2 w-fit">
                  <div className="relative w-36 h-16 ">
                    <Image
                      src={item.sourceUrl}
                      alt={item.title}
                      fill={true}
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 flex flex-col justify-center items-center ">
            <div className="text-base font-medium text-neutral-content py-2 px-4 bg-neutral rounded-xl w-fit">
              Υποστηρικτές
            </div>
            <ul className="flex flex-wrap gap-0 xl:gap-10 justify-evenly xl:justify-start">
              {section.supporters.nodes.map((item, index) => (
                <li key={index} className=" rounded-xl p-2 w-fit">
                  <div className="relative w-36 h-16 ">
                    <Image
                      src={item.sourceUrl}
                      alt={item.title}
                      fill={true}
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
