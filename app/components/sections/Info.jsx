import Faq from "../faq/Faq";
import React from "react";

const Info = ({ section }) => {
  // console.log(section.info);
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            {section.info.heading}
          </h2>
          <div
            className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"
            dangerouslySetInnerHTML={{ __html: section.info.description }}
          />
        </div>

        <Faq faq={section.info.faq} />

        <p className="text-center text-gray-600 textbase mt-9">
          Έχετε περισσότερες ερωτήσεις?{" "}
          <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Επικοινωνήστε μαζί μας!
          </a>
        </p>
      </div>
    </section>
  );
};

export default Info;
