import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Membership(props) {
  return (
    <div className="membership">
      <div className="member-login">
        <div className="text-center">会员入口</div>
      </div>
      <div className="alumni-group">
        <div className="text-center">校友群链接</div>
      </div>
    </div>
  );
}

export default Membership;
