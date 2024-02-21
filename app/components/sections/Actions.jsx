import Carousel from "../carousel/Carousel";
import React from "react";

const Actions = ({ section }) => {
  // console.log(section);
  return (
    <section>
      <h2>Actions</h2>
      <Carousel items={section.gallery.nodes} />
    </section>
  );
};

export default Actions;
