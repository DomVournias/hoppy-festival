"use client";

import React, { useState } from "react";

const FaqCard = ({ item }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <li className="transition-all duration-200 bg-white border border-gray-200 shadow-lg rounded-lg cursor-pointer hover:shadow-md">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
        onClick={() => setIsToggled(!isToggled)}
      >
        <span className="flex text-lg font-semibold text-black">
          {item.question}
        </span>

        <svg
          className={
            "w-6 h-6 text-gray-400 " + (isToggled ? "rotate-180" : "rotate-0")
          }
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isToggled && (
        <div
          className="px-4 pb-5 space-y-4 sm:px-6 sm:pb-6"
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      )}
    </li>
  );
};

export default FaqCard;
