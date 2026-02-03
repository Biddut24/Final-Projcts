import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../../assets/icons/facebook.png";
import google from "../../../assets/icons/google.png";
import call from "../../../assets/icons/call.png";
import location from "../../../assets/icons/location.png";
import mail from "../../../assets/icons/Group (1).png";
import Printer from "../../../assets/icons/printer.png";

const Footer = () => {
  return (
    <div className="bg-primary footer-shape  md:pt-30">
      <footer className="footer md:grid-cols-2 lg:grid-cols-4 sm:footer-horizontal text-white p-10">
        <aside>
          <Link to="/" className="text-2xl font-bold">
            <spn className="text-secondary">Medi</spn>site
          </Link>
          <p>
            When Stan Britten established BritKare in 1995, he did so with a
            true desire to asist the medical community with the quality care of
            their desire
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Service</h6>
          <Link className="ms-2 link link-hover">
            {" "}
            <span>{">"}</span> Service Areas
          </Link>
          <Link className="ms-2 link link-hover">
            {" "}
            <span>{">"}</span> Blogs
          </Link>
          <Link className="ms-2 link link-hover">
            {" "}
            <span>{">"}</span> About
          </Link>
          <Link className="ms-2 link link-hover">
            {" "}
            <span>{">"}</span> Contacts
          </Link>
          <Link className="ms-2 link link-hover">
            {" "}
            <span>{">"}</span> Solutions
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>

          <div className="flex items-center">
            <img src={location} alt="clock" />
            <p className="ms-1">33 Street Saadi Town, near Malir cantt </p>
          </div>
          <div className="flex items-center">
            <img src={call} alt="clock" />
            <p className="ms-1">+92 322 2155556 </p>
          </div>
          <div className="flex items-center">
            <img src={Printer} alt="clock" />
            <p className="ms-1">+92 322 2155556 </p>
          </div>
          <div className="flex items-center">
            <img src={mail} alt="clock" />
            <p className="ms-1">myousufk87@gmail.com </p>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Follow us on</h6>
          <div className="flex">
            <Link
              className=" bg-white rounded-full flex items-center justify-center w-12 h-12"
              to="/"
            >
              <img src={facebook} alt="" />
            </Link>
            <Link
              className="ms-2 bg-white rounded-full flex items-center justify-center w-12 h-12"
              to="/"
            >
              <img src={google} alt="" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
