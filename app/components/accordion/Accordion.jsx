import React from "react";

const Accordion = ({ items }) => {
  return (
    <ul className="space-y-6">
      {items.map((item, index) => (
        <li key={index}>
          <div className="collapse collapse-arrow bg-white shadow-lg">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div
              className="collapse-content space-y-4"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;