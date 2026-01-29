import React from "react";
import advocate from "../../../assets/images/advocate.png";
import advocate2 from "../../../assets/images/advocate (2).png";
import PrimaryButton from './../../../components/PrimaryButton/PrimaryButton';



const Advocate = () => {
  return (
    <div className="p-5  md:ps-29 py-0 md:py-0">
      <div className="flex flex-col-reverse md:flex-row -justify-between items-center">
        <div className="w-1/1 md:w-1/3  md:space-y-2 lg:space-y-5">
          <h1 className="text-2xl md:-text-3xl lg:text-4xl font-bold ">
            Medicare Supplement Advocate
          </h1>
          <p className="py-6 text-neutral">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </p>

          <button className="w-40">
            <PrimaryButton className="bg-white px-5 py-2 md:px-7 md:py-4 text-black">
              See More
            </PrimaryButton>
          </button>
        </div>

        {/* ===== mobile shape ====== */}
        <div className="pb-8 md:pb-0 w-1/1 md:w-2/3 flex justify-center md:justify-end items-center ">
          <div className="relative flex justify-end">
            <img
              className="w-[70%] md:w-[100%]"
              src={advocate}
              alt="best medical, best doctors"
            />
          </div>

          <img
            className=" w-[50%] md:w-auto absolute left-[4%] md:left-[50%]"
            src={advocate2}
          />
        </div>
      </div>
    </div>
  );
};

export default Advocate;
