import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Membership = () => {
  const [viewTerms, setViewTerms] = useState(false);
  return (
    <div className="membership">
      <Popup
        modal
        nested
        trigger={
          <div className="member-login flex justify-center">
            <button className="h-fit">会员入口</button>
          </div>
        }
        contentStyle={{
          width: "10%",
          height: "10%",
          minHeight: "800px",
          minWidth: "800px",
        }}
      >
        {(close) => (
          <div className="modal w-full h-full">
            {!viewTerms ? (
              <form className="register-form flex flex-col justify-between m-4">
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
                    会员姓名
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
                    毕业院校
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
                    毕业年份
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
                    居住地邮编
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
                    电子邮箱
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
                    生日(Optional)
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
                    性别 (Optional)：
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
                    家庭地址 (Optional)：
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
                    移动电话 (Optional)：
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
                    职业 (Optional)：
                  </label>
                </div>
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
                <div className="flex justify-center">
                  <button
                    className="w-40 mr-2"
                    onClick={() => setViewTerms(true)}
                  >
                    查看服务条款
                  </button>
                  <input type="submit" value="提交" />
                </div>
              </form>
            ) : (
              <div className="service-section flex flex-col justify-between m-4 w-full h-full">
                <h1>Terms of Service</h1>
                <div className="border-2 border-grey-300 h-full flex flex-col justify-between p-4 mt-4 mb-4">
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
                <div className="flex justify-center mb-4">
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
      <div className="alumni-group flex justify-center">
        <div className="text-center">校友群链接</div>
      </div>
    </div>
  );
};

export default Membership;
