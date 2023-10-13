import React from "react";
import logo from "../assets/logo.jpg";

function Navbar(props) {
  return (
    <div className="relative w-full bg-sky-200 min-h-[136px]">
      <img
        src={logo}
        alt="Logo"
        className="absolute ml-2 top-1/2 transform -translate-y-1/2 max-w-[120px] max-h-[120px] "
      />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="subtitle">Chinese Alumni Society of Canada</h2>
        <h2 className="subtitle">WWW.CASOC.CA</h2>
        <h1 className="title">华校友联社区</h1>
      </div>
    </div>
  );
}

export default Navbar;
