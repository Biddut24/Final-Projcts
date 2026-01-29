import React from "react";

const SectionHead = ({ title, des }) => {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto">
      <div className="text-center space-y-4 md:space-y-8">
        <h1 className=" text-2xl  md:text-4xl font-semibold">{title}</h1>
        <p className="text-neutral">{des}</p>
      </div>
    </div>
  );
};

export default SectionHead;
