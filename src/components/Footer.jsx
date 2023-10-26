import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { footerList } from "../constants";

const Footer = () => {
  return (
    <div className="w-full min-h-[80px] flex justify-start items-center justify-center bg-[#bcaaa4]">
      {footerList.map((footerSection, index) => (
        <FooterSection props={footerSection} index={`footer-${index}`} />
      ))}
      <Popup
        modal
        nested
        trigger={
          <button className="h-full flex items-center justify-center hover:bg-gray-500">
            <div className="min-w-fit content-start text-center p-4 pl-8 pr-8">
              Contact Us
            </div>
          </button>
        }
        contentStyle={{
          width: "90%",
          height: "fit-content",
          maxWidth: "800px",
        }}
      >
        {(close) => (
          <div className="modal w-full h-fit p-4">
            <h1 className="text-xl text-center">Contact Us</h1>
            <form className="register-form flex flex-col justify-between m-4 gap-y-2 overflow-auto h-fit">
              <div className="member-form-section">
                <input
                  type="text"
                  id="floating_outlined"
                  className="member-form-input peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="member-form-label"
                >
                  First Name
                </label>
              </div>
              <div className="member-form-section">
                <input
                  type="text"
                  id="floating_outlined"
                  className="member-form-input peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="member-form-label"
                >
                  Last Name
                </label>
              </div>
              <div className="member-form-section">
                <input
                  type="text"
                  id="floating_outlined"
                  className="member-form-input peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="member-form-label"
                >
                  Email
                </label>
              </div>

              <label
                htmlFor="message"
                className="member-form-textarea-label mt-4"
              >
                Message：
              </label>
              <textarea
                id="message"
                rows="4"
                className="member-form-textarea"
                placeholder="Write your thoughts here..."
              ></textarea>
              <div className="flex justify-center mt-2">
                <input type="submit" value="Send" />
              </div>
            </form>
            <button className="close" onClick={close}>
              &times;
            </button>
          </div>
        )}
      </Popup>
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
          <div className="min-w-fit content-start text-center p-4 pl-8 pr-8">
            {title}
          </div>
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
          {content.map(
            (paragraph, index) =>
              paragraph[0] == "text" && (
                <p className="text-base pb-2" key={`footer-p-${index}`}>
                  {paragraph[1]}
                </p>
              )
          )}
          <button className="close" onClick={close}>
            &times;
          </button>
        </div>
      )}
    </Popup>
  );
};

export default Footer;
