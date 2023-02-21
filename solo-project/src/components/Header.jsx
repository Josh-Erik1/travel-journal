import React from "react";
import logo from "../assets/logo.png";

const Header = () => (
  <div
    className="text-center flex text-white h-[60px] bg-[#f55a5a] items-center justify-center
  "
  >
    <img src={logo} alt="logo" className="mr-3" />
    <h3 className="text-[1.2rem] font-bold font-inter ">My Travel Journal</h3>
  </div>
);

export default Header;
