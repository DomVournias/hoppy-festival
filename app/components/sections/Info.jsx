import Accordion from "../accordion/Accordion";
import React from "react";

const Info = ({ section }) => {
  // console.log(section.info);
  return (
    <section id="info" className="py-10 bg-accent sm:py-16 lg:py-40">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold pb-2 text-accent-content">
            {section.heading}
          </h2>
          <div
            className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-accent-content"
            dangerouslySetInnerHTML={{ __html: section.description }}
          />
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <Accordion items={section.faq} />
        </div>
        {/* <p className="text-center text-gray-600 textbase mt-9">
          Έχετε περισσότερες ερωτήσεις?{" "}
          <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Επικοινωνήστε μαζί μας!
          </a>
        </p> */}
      </div>
    </section>
  );
};

export default Info;
