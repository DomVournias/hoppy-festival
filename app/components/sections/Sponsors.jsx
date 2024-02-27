import Image from "next/image";
import React from "react";

const Sponsors = ({ section }) => {
  // console.log(section);
  return (
    <section id="sponsors" className="bg-base-200 py-40">
      <div className="flex max-w-7xl m-auto space-x-40 ">
        <div className="w-1/2 space-y-6">
          <h2 className="text-4xl font-bold pb-2">{section.heading}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: section.description }}
            className="space-y-4"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: section.first_support_description,
            }}
            className="italic"
          />
          <ul className="flex flex-wrap">
            {section.first_support_logos.nodes.map((item, index) => (
              <li key={index} className="rounded-xl p-2 w-fit">
                <div className="relative w-36 h-16 ">
                  <Image
                    src={item.sourceUrl}
                    alt={item.title}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div
            dangerouslySetInnerHTML={{
              __html: section.second_support_description,
            }}
            className="italic"
          />
          <ul className="flex flex-wrap">
            {section.second_support_logos.nodes.map((item, index) => (
              <li key={index} className="rounded-xl p-2 w-fit">
                <div className="relative w-36 h-16 ">
                  <Image
                    src={item.sourceUrl}
                    alt={item.title}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/2 space-y-10">
          <div className="space-y-4 flex flex-col ">
            <h4 className="text-base font-medium text-neutral-content py-2 px-4 bg-neutral rounded-xl w-fit border-b-2">
              Μέγας Χορηγός
            </h4>
            <div className="rounded-xl p-2 w-fit ">
              <div className="relative w-36 h-16 ">
                <Image
                  src={section.top_sponsor.node.sourceUrl}
                  alt={section.top_sponsor.node.title}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4 flex flex-col ">
            <h4 className="text-lg font-medium text-neutral-content py-2 px-4 bg-neutral rounded-xl w-fit">
              Χορηγοί
            </h4>
            <ul className="flex flex-wrap gap-10 ">
              {section.sponsors.nodes.map((item, index) => (
                <li key={index} className="rounded-xl p-2 w-fit">
                  <div className="relative w-36 h-16 ">
                    <Image
                      src={item.sourceUrl}
                      alt={item.title}
                      fill={true}
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 flex flex-col ">
            <h4 className="text-lg font-medium text-neutral-content py-2 px-4 bg-neutral rounded-xl w-fit">
              Υποστηρικτές
            </h4>
            <ul className="flex flex-wrap gap-10 ">
              {section.supporters.nodes.map((item, index) => (
                <li key={index} className=" rounded-xl p-2 w-fit">
                  <div className="relative w-36 h-16 ">
                    <Image
                      src={item.sourceUrl}
                      alt={item.title}
                      fill={true}
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
