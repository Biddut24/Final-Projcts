import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";
import Loading from "../Loading";

const Header = () => {
  const { user, userLoading,logOut } = useContext(AuthContext);
  if( userLoading) {
    return <Loading/>
  }

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/services">Service</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {
        user?.email ?<li><button onClick={logOut }>Sing Out</button></li>:
        
       <li> <Link to="/Sign-up">Register</Link> </li>
      }
      {
      user?.email && <li> <Link to="/dashbord">Dashboard</Link></li>
      }
    </>
  );

  return (
    <div>
      <div className="navbar  justify-between bg-primary text-white px-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold">
            <spn className="text-secondary">Medi</spn>site
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1">
            {menuItems}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
