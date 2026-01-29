import React from "react";
import bg from "../../../assets/images/bg.png";
import mobileShape from "../../../assets/images/mobileShape.png";
import doctor from "../../../assets/images/Doctorilastration.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className=""
    >
      <div className="text-white gap-10  px-4 md:px-29 py-0 md:py-20  min-h-screen">
        <div className="md:flex justify-between items-center ">
          <div className="w-1/1 md:2/4  md:space-y-2 lg:space-y-5">
            <h1 className="text-2xl md:-text-3xl lg:text-4xl font-bold ">
              A Wealth of Experience To Heal And Help You.
            </h1>
            <p className="py-6">
              A professional doctor website offering trusted medical
              information, online appointments, healthcare services, and patient
              support for convenient, reliable, and compassionate care.
            </p>
            <button className="bg-secondary px-5 py-2 md:px-7 md:py-4 text-black mr-2 md:mr-6 mb-3 lg:mb-0">
              See More
            </button>
            <button className="bg-white px-5 py-2 md:px-7 md:py-4 text-black">
              Make an Appointment
            </button>
          </div>

          {/* ===== mobile shape ====== */}
          <div className="mt-9 md:mt-0 w-1/1 md:2/4 flex justify-center md:justify-end items-center relative">
            <img className="" src={mobileShape} />
            <div className="absolute top-15 w-[232px]  md:right-7 space-y-10">
              <img src={doctor} alt="best medical, best doctors" />
              <div className="mx-5  space-y-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
                  Doctors Services
                </h2>
                <button className="w-full bg-primary rounded-full p-3 md:p-4 w-auto text-center ">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;