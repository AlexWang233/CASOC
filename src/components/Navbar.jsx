import React from "react";
import logo from "../assets/logo.jpg";
import Membership from "./Membership";

function Navbar(props) {
  return (
    <div className="flex w-full bg-sky-200 h-fit">
      <div className="logo-section flex items-center max-w-[200px]">
        <img src={logo} alt="Logo" className="h-full w-auto max-h-[128px]" />
      </div>
      <div className="title-section">
        <h2 className="subtitle">Chinese Alumni Society of Canada</h2>
        <h2 className="subtitle">WWW.CASOC.CA</h2>
        <h1 className="title">华校友联社区</h1>
      </div>
      <Membership />
    </div>
  );
}

export default Navbar;
