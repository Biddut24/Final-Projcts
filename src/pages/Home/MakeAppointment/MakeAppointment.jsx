import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  const handleMakeAppointment = (e) => {
    e.preventDefault()
  const from = e.target;
  const fromData = new FormData(from);
  const appointmentData = Object.fromEntries(fromData.entries())
   console.log(appointmentData);
   

  // const name = from.fullname.value
  // const email = from.email.value
  // console.log(name,email);
  
  };
  return (
    <div className="px-4 md:px-29 py-0 md:py-20 md:pb-20">
      <div>
        <h2 className="text-2xl md:-text-3xl lg:text-4xl font-bold bg-secondary py-3 md:py-6 lg:py-7 text-center">
          Make An Appointment
        </h2>
      </div>
      <form onSubmit={handleMakeAppointment} className="" action="">
        <div className=" md:flex gap-3 md:gap-15">
          <div>
            <input
              className="input w-full  mt-9"
              name="fullname"
              placeholder="Full Name"
              type="text"
            />
            <input
              className="input w-full  mt-9"
              name="phone"
              placeholder="Phone Number"
              type="text"
            />
            <input
              className="input w-full mt-9"
              name="additionalInfo"
              placeholder="Additional Information"
              type="text"
            />
          </div>

          <div>
            <input
              className="input w-full mt-9"
              name="email"
              placeholder="Email"
              type="text"
            />
            <input
              className="input w-full mt-9"
              name="department"
              placeholder="Department"
              type="text"
            />
            <input
              className="input w-full mt-9"
              name="time"
              placeholder="Date and Time"
              type="text"
            />
          </div>
        </div>
        <input className="mt-6 block mx-auto bg-primary rounded-lg px-7 md:px-7 py-2 md:py-3 text-center  text-white font-semibold" value="Confirm" type="submit"/>
      </form>
    </div>
  );
};

export default MakeAppointment;
