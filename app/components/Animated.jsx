"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Animated({ children, variants, delay, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      // FIRE THE ANIMATION
      mainAnimation.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainAnimation}
      transition={{
        delay: delay ? 0.3 * index : 0,
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
