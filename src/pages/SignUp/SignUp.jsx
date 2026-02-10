import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const {register, handleSubmit, formState: { errors }, } = useForm();

  const handleUserRegistration = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const updating = {
          displayName: data?.name
        }
        updateUser(updating)
        saveUser(data.name,data.email)
        toast.success("Successfully User Created 😁");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const saveUser = (name,email)=>{
    const user ={name:name,email:email}
    // fetch("/") user post hobe 

  }

  return (
    <div className="mx-auto card shadow-2xl mt-10 w-96">
      <div className="card-body">
        <form
          onSubmit={handleSubmit(handleUserRegistration)}
          className="fieldset"
        >
          {/* Name */}
          <div className="mt-2">
            <label className="label">Name</label>
            <input
              type="text"
              placeholder="Type your name"
              className="input w-full"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mt-2">
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="Type your email"
              className="input w-full"
              {...register("email", {
                required: "Email Address is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mt-2">
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Type your password"
              className="input w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 characters",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[@#$^&+=!])(?=.*[0-9])/,
                  message:
                    "Password must contain one capital letter, one number and one special character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Link */}
          <p className="text-primary label mt-2">
            Already have an account?{" "}
            <Link className="underline" to="/sign-in">
              Login
            </Link>
          </p>

          {/* Submit */}
          <div className="mt-3">
            <input
              type="submit"
              className="input w-full bg-primary text-white cursor-pointer"
            />
          </div>
        </form>

        {/* Social Login UI */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button className="input w-full bg-primary text-white">
            Continue with Google
          </button>
          <button className="input w-full bg-primary text-white">
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
