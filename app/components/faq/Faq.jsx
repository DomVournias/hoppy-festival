import FaqCard from "./FaqCard";
import React from "react";

const Faq = ({ faq }) => {
  return (
    <ul className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
      {faq.map((item, index) => (
        <FaqCard item={item} key={index} />
      ))}
    </ul>
  );
};

export default Faq;
