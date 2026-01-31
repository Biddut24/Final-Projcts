import React from "react";
import SectionHead from "../../../components/SectionHead/SectionHead";
import doctor1 from "../../../assets/images/pic1.png";
import doctor2 from "../../../assets/images/pic2.png";
import doctor3 from "../../../assets/images/pic3.png";
import doctor4 from "../../../assets/images/pic4.png";
import Expert from "./Expert";


const ExpertTeams = () => {
  const expertTeams = [
    {
      img: doctor1,
      name: "Patrik Cortez",
      designation: "Doctor",
    },
    {
      img: doctor4,
      name: "Belly Stain",
      designation: "Doctor",
    },
    {
      img: doctor2,
      name: "Corteza Main",
      designation: "Doctor",
    },
    {
      img: doctor3,
      name: "Satiny Lee",
      designation: "Doctor",
    },
  ];
  return (
    <div className="px-4 md:px-29 py-0 md:py-20 md:pb-20">
      <SectionHead
        title="Our Expert Teams"
        des=" Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock"
      ></SectionHead>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 ">
        {expertTeams?.map((member, i) => (
          <Expert key={i} member={member}></Expert>
        ))}
      </div>
    </div>
  );
};
export default ExpertTeams;