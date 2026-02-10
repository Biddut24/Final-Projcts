import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import toast from "react-hot-toast";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const {register, handleSubmit, formState: { errors },} = useForm();

  const handleUserLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully User Signed In 😁");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="mx-auto card shadow-2xl mt-10 w-96">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleUserLogin)} className="fieldset">
          
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
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Link */}
          <p className="text-primary label mt-2">
            New to website?{" "}
            <Link className="underline" to="/sign-up">
              Register
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

        {/* Social Login (UI ready) */}
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

export default SignIn;
