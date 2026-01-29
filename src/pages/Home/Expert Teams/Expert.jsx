import React from "react";
import facebook from "../../../assets/icons/blackFacebook.png";
import google from "../../../assets/icons/blackGoogle.png";
import twitter from "../../../assets/icons/blackTwitter.png";
import linkedin from "../../../assets/icons/blackLinkdin.png";
import { Link } from "react-router-dom";

const Expert = ({ member }) => {
  const { name, img, designation } = member;
  return (
    <div className=" bg-base-100 card-xs">
      <figure className="bg-secondary flex justify-center pt-15">
        <img src={img} alt="best doctors" />
      </figure>
      <div className="card-body text-center mt-4">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-primary text-lg">{designation}</p>
        <div className="flex justify-between my-5 mx-5">
          <Link className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center mx-2">
            <img src={facebook} alt="" />
          </Link>
          <Link className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center mx-2">
            <img src={google} alt="" />
          </Link>
          <Link className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center mx-2">
            <img src={twitter} alt="" />
          </Link>
          <Link className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center mx-2">
            <img src={linkedin} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expert;
