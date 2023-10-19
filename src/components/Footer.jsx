import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { footerList } from "../constants";

const Footer = () => {
  return (
    <div className="w-full min-h-[80px] flex justify-start items-center bg-[#bcaaa4]">
      {footerList.map((footerSection, index) => (
        <FooterSection props={footerSection} index={`footer-${index}`} />
      ))}
    </div>
  );
};

const FooterSection = ({ props }) => {
  const { title, content } = props;

  return (
    <Popup
      modal
      nested
      trigger={
        <button className="h-full flex items-center justify-center hover:bg-gray-500">
          <div className="min-w-fit content-start text-center p-4">{title}</div>
        </button>
      }
      contentStyle={{
        width: "80%",
        height: "80%",
        maxWidth: "800px",
        maxHeight: "600px",
      }}
    >
      {(close) => (
        <div className="modal w-full h-full flex flex-col justify-around items-center p-4">
          <h1 className="text-xl">{title}</h1>
          {content.map((paragraph, index) => (
            <p className="text-base pb-2" key={`footer-p-${index}`}>
              {paragraph}
            </p>
          ))}
          <button className="close" onClick={close}>
            &times;
          </button>
        </div>
      )}
    </Popup>
  );
};

export default Footer;
