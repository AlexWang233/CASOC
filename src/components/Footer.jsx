import { useState, useRef } from "react";
import Popup from "reactjs-popup";
import emailjs from "@emailjs/browser";
import "reactjs-popup/dist/index.css";
import { footerList } from "../constants";
import { emailjsConfig } from "../constants/secret";

const Footer = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID,
        {
          from_name: form.first_name + form.last_name,
          to_name: "Alex",
          from_email: form.email,
          to_email: emailjsConfig.MY_EMAIL,
          message: form.message,
        },
        emailjsConfig.PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for reaching out!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong, email not sent :(");
        }
      );
  };
  return (
    <div className="w-full min-h-[80px] flex justify-start items-center justify-center bg-[#bcaaa4]">
      {footerList.map((footerSection, index) => (
        <div key={`footer-${index}`}>
          <FooterSection props={footerSection} />
        </div>
      ))}
      <div key="footer-contact">
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
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="register-form flex flex-col justify-between m-4 gap-y-2 overflow-auto h-fit"
              >
                <div className="member-form-section">
                  <input
                    type="text"
                    id="floating_outlined"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
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
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
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
                    name="email"
                    value={form.email}
                    onChange={handleChange}
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
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="member-form-textarea"
                  placeholder="Write your thoughts here..."
                ></textarea>
                <div className="flex justify-center mt-2">
                  <input
                    type="submit"
                    value={loading ? "Sending..." : "Send"}
                  />
                </div>
              </form>
              <button className="close" onClick={close}>
                &times;
              </button>
            </div>
          )}
        </Popup>
      </div>
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
