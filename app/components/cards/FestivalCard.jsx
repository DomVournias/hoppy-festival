import React from "react";

export default function FestivalCard({ heading, description, icon }) {
  return (
    <div className="group">
      <div className="card w-96 h-[320px] bg-base-100 text-accent-content rounded-3xl">
        <div className="card-body items-center text-center">
          {icon}
          <h2 className="card-title pb-3 pt-3">{heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
}
