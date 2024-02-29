"use client";

import React, { useEffect, useState } from "react";

import { FaAngleUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up function
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="to-top-button"
      onClick={scrollToTop}
      title="Go To Top"
      className={`fixed z-[100] bottom-5 right-5 p-4 border-0 w-12 h-12 rounded-full shadow-md bg-primary hover:bg-primary text-white text-lg font-semibold transition-colors duration-300 flex justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-50 ${
        isVisible ? "" : "hidden"
      }`}
    >
      <FaAngleUp className="flex w-24 h-24" />

      <span className="sr-only">Go to top</span>
    </button>
  );
};

export default ScrollToTop;
