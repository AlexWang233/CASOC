import { useState, useRef } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import emailjs from "@emailjs/browser";
import { membershipForm } from "../constants";
import { AWS_Gateway_URL } from "../constants/secret";

const Membership = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [viewTerms, setViewTerms] = useState(false);
  const [form, setForm] = useState({
    name: "",
    school: "",
    grad_year: "",
    post_code: "",
    email: "",
    birthday: "",
    sex: "",
    address: "",
    telephone: "",
    occupation: "",
  });
  const service_hope = useState("");
  const event_hope = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form[name]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, message } = this.state;
    axios.post(AWS_Gateway_URL, form).then(
      () => {
        setLoading(false);
        alert("Thank you for reaching out!");
        // setForm({ name: "", email: "", message: "" });
      },
      (error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong, registration unsucessful :(");
      }
    );
  };

  return (
    <div className="membership h-full flex flex-col max-w-[200px]">
      <Popup
        modal
        nested
        trigger={
          <div className="member-login flex justify-center h-full bg-blue-100  items-center">
            <button className="h-fit border-2 p-1 m-2 rounded-md bg-indigo-200 border-blue-700 min-h-[40%] min-w-[40%]">
              会员入口
            </button>
          </div>
        }
        contentStyle={{
          width: "90%",
          height: "90%",
          maxWidth: "800px",
        }}
      >
        {(close) => (
          <div className="modal w-full h-full">
            {!viewTerms ? (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="register-form flex flex-col justify-between m-4 gap-y-2 overflow-auto"
              >
                {membershipForm.map((section, index) => (
                  <div key={`form-input-${index}`}>
                    <FormInput
                      name={section[0]}
                      value={form[section[0]]}
                      text={section[1]}
                      handleChange={handleChange}
                    />
                  </div>
                ))}
                <label htmlFor="message" className="member-form-textarea-label">
                  希望社区能够提供的服务：
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="member-form-textarea"
                  placeholder="Write your thoughts here..."
                ></textarea>
                <label htmlFor="message" className="member-form-textarea-label">
                  希望能参加的社区活动：
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="member-form-textarea"
                  placeholder="Write your thoughts here..."
                ></textarea>
                <div className="flex justify-center mb-2">
                  <button
                    className="w-40 mr-2"
                    onClick={() => setViewTerms(true)}
                  >
                    查看服务条款
                  </button>
                  <input type="submit" value="提交会员注册" />
                </div>
              </form>
            ) : (
              <div className="service-section flex flex-col justify-between m-4 w-full h-full">
                <h1>Terms of Service</h1>
                <div className="border-2 border-grey-300 h-full flex flex-col justify-between p-4 pb-6 pt-6 mt-4 mb-4 bg-gray-50">
                  <div>
                    <h2>Consent：</h2>
                    <p>
                      I consent that the Company can provide their services and
                      communicate with me via mobile phone, messages, e-mail and
                      any kind of online communications, provided that these
                      communications comply with privacy regulations.
                    </p>
                  </div>
                  <div>
                    <h2>
                      Appointment Reminders, Reschedules and Cancellations
                    </h2>
                    <p>
                      I understand that Company can reach me any time to remind
                      me of my appointments or let me know in case of any change
                      about my appointments. And I also understand that the
                      Company can employ and use a third-party automated system
                      to reach out me for the purpose of &quot;confirm&quot;,
                      &quot;reschedule&quot; or &quot;cancel&quot;.
                    </p>
                  </div>
                  <div>
                    <h2>Contact Information Change</h2>
                    <p>
                      I accept that I am responsible of notifying the Company
                      when my contact informations change.
                    </p>
                  </div>
                  <div>
                    <h2>Consent Cancellations</h2>
                    <p>
                      I know that I can revoke this consent at any time by
                      contacting the Company.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mb-2">
                  <label className="w-40 mr-2">
                    <input type="checkbox" />
                    我同意服务条款
                  </label>
                  <button onClick={() => setViewTerms(false)}>
                    返回注册页面
                  </button>
                </div>
              </div>
            )}
            <button className="close" onClick={close}>
              &times;
            </button>
          </div>
        )}
      </Popup>
    </div>
  );
};

const FormInput = ({ name, value, text, handleChange }) => {
  return (
    <div className="member-form-section">
      <input
        type="text"
        id="floating_outlined"
        name={name}
        value={value}
        onChange={handleChange}
        className="member-form-input peer"
        placeholder=" "
      />
      <label htmlFor="floating_outlined" className="member-form-label">
        {text}
      </label>
    </div>
  );
};

export default Membership;
