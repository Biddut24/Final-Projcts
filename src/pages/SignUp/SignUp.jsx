import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="mx-auto card shadow-2xl mt-10  w-96">
      <div className="card-body">
        <form className="fieldset">
          <div className="mt-2">
            <label className="label">Name</label>
            <input className="input w-full" type="text" />
          </div>
          <div className="mt-2">
            <label className="label">Email</label>
            <input className="input w-full" type="text" />
          </div>

          <div className="mt-2">
            <label className="label">Password</label>
            <input className="input w-full" type="text" />
          </div>

          <p className="text-primary label">Already have an Account?<Link className="underline" to="/sign-in"> Login Please</Link></p>

          <div className="mt-2">
            <input
              type="submit"
              className="input w-full bg-primary text-white"
            />
          </div>
        </form>
         <div className="grid grid-cols-2 gap-3 ">
            <button className="input w-full bg-primary text-white">
              Continue With Google
            </button>
            <button className="input w-full bg-primary text-white">
              Continue With Github
            </button>
          </div>
      </div>
    </div>
  );
};

export default SignUp;
