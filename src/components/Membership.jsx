import { useState, useRef } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import emailjs from "@emailjs/browser";
import { membershipForm } from "../constants";
import { AWS_Gateway_URL, emailjsConfig } from "../constants/secret";

const Membership = () => {
  const formRef = useRef();
  const [termChecked, setTermChecked] = useState(false);
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
    desired_service: "",
    desired_event: "",
  });

  const generateCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const l = characters.length;
    let res = "";
    for (let i = 0; i < 20; i++) {
      res += characters.charAt(Math.floor(Math.random() * l));
    }
    return res;
  };

  const handleTerms = (e) => {
    setTermChecked(!termChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form[name]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!termChecked) {
      setLoading(false);
      alert("请先同意服务条款，谢谢！");
      return;
    }
    const required = {
      name: "姓名",
      school: "毕业院校",
      grad_year: "毕业年份",
      post_code: "居住地邮编",
      email: "邮箱",
    };

    for (let key in required) {
      if (form[key].length <= 1) {
        alert("请填写" + required[key]);
        setLoading(false);
        return;
      }
    }

    var message = "新CASOC会员注册提醒 \n\n";
    const id = generateCode();
    message += "会员ID： " + id + "\n";
    for (let i = 0; i < membershipForm.length; i++) {
      message +=
        membershipForm[i][1] + ": " + form[membershipForm[i][0]] + "\n";
    }
    message += "希望社区提供的服务： " + form.desired_service + "\n";
    message += "希望参加的社区活动： " + form.desired_event + "\n";
    console.log(message);

    emailjs
      .send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "华校友联社区（CASOC）管理员",
          from_email: form.email,
          to_email: emailjsConfig.MY_EMAIL,
          message: message,
        },
        emailjsConfig.PUBLIC_KEY
      )
      .then(
        () => {
          emailjs
            .send(
              emailjsConfig.SERVICE_ID,
              emailjsConfig.TEMPLATE_ID,
              {
                from_name: "华校友联社区（CASOC）管理员",
                to_name: form.name,
                from_email: emailjsConfig.MY_EMAIL,
                to_email: form.email,
                message: "感谢您注册CASOC会员，您的会员ID为: " + id,
              },
              emailjsConfig.PUBLIC_KEY
            )
            .then(
              () => {
                setLoading(false);
                for (var key in form) {
                  setForm({ [key]: "", ...form });
                }
                alert("Thank you for registering!");
              },
              (error) => {
                setLoading(false);
                console.log(error);
                alert(
                  "Something went wrong, member notification email not sent :("
                );
              }
            );
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(
            "Something went wrong, administrator notification email not sent :("
          );
        }
      );
    /*
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
    */
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
          width: "95%",
          height: "95%",
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
                <h1 className="text-xl text-center pb-1">会员注册表</h1>
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
                  name="desired_service"
                  value={form.desired_service}
                  onChange={handleChange}
                  rows="4"
                  className="member-form-textarea"
                  placeholder="Write your thoughts here..."
                ></textarea>
                <label htmlFor="message" className="member-form-textarea-label">
                  希望能参加的社区活动：
                </label>
                <textarea
                  id="message"
                  name="desired_event"
                  value={form.desired_event}
                  onChange={handleChange}
                  rows="4"
                  className="member-form-textarea"
                  placeholder="Write your thoughts here..."
                ></textarea>
                <div className="flex justify-center p-2 gap-x-2">
                  <button
                    className="p-1 pl-2 pr-2 border-2 border-black bg-blue-100"
                    onClick={() => setViewTerms(true)}
                  >
                    查看服务条款
                  </button>
                  <button
                    type="submit"
                    className="p-1 pl-2 pr-2 border-2 border-black bg-gray-200"
                  >
                    {loading ? "提交中..." : "提交会员注册"}
                  </button>
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
                  <label className="p-1 pl-2 pr-2">
                    <input
                      type="checkbox"
                      checked={termChecked}
                      onChange={handleTerms}
                    />
                    &nbsp;我同意服务条款
                  </label>
                </div>
                <div className="flex justify-center mb-1">
                  <button
                    onClick={() => setViewTerms(false)}
                    className="p-1 pl-2 pr-2 border-2 border-black bg-blue-100"
                  >
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
