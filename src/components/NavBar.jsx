import React from "react";

import logo from "../assets/ashish.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      {/* <nav className=" mb-20  flex items-center justify-between py-6"> */}
      <nav className="   flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-16 rounded-full " src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center text-3xl lg:gap-7 md:gap-2 pr-2  ">
          <a
            href="https://www.linkedin.com/in/ashish-kumar-srivastava-aaa6982b0/"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/aashishsrivastava" target="blank">
            <FaGithub />
          </a>
          <a
            href="https://x.com/Aashish_wd?t=r36Ugnp7f6K03WHtFXJUaw&s=08 "
            target="blank"
          >
            {/* <FaGithub /> */}
            <FaSquareXTwitter />
          </a>

          <a
            href="https://www.instagram.com/aashish_wd/?igsh=MWdrMGNwM3ZmOWUxag%3D%3D"
            target="black"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
