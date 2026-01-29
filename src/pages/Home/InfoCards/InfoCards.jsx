import React from "react";
import service from "../../../assets/icons/24HourSservice.png";
import doctor from "../../../assets/icons/doctor.png";
import car from "../../../assets/icons/EmergencyCarr.png";
import room from "../../../assets/icons/OperatingRoom.png";
import InfoCard from "../InfoCards/InfoCard";


const InfoCards = () => {
  const infoCardsData = [
    {
      img: service,
      name: "24 Hours Service",
      des: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
      bg: "bg-white",
      circle: "bg-secondary",
    },
    {
      img: doctor,
      name: "Qualified Doctor",
      des: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
      bg: "bg-secondary",
      circle: "bg-white",
    },
    {
      img: car,
      name: "Emergency Care",
      des: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
      bg: "bg-white",
      circle: "bg-secondary",
    },
    {
      img: room,
      name: "Operation Theater",
      des: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
      bg: "bg-white",
      circle: "bg-secondary",
    },
  ];

  return (
    <div className="px-4 md:px-29 py-0 md:py-20 md:pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {infoCardsData?.map((info, i) => (
          <InfoCard key={i} info={info}></InfoCard>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
