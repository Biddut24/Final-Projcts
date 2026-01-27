import React from "react";

const InfoCard = ({ info }) => {
  const { img, name, des,bg,circle } = info;
  return (
    <div className={`${bg} cardInfo p-2 md:p-8 card bg-base-100 card-xs shadow-sm`}>
      <figure className={`${circle} cardCircle w-17 h-17  rounded-full mx-auto`}>
        <img src={img} alt="best doctors" />
      </figure>
      <div className="card-body text-center mt-4">
        <h2 className="text-lg font-semibold text-center">{name}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default InfoCard;