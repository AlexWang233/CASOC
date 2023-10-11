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
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="会员姓名"
                  className="mb-3"
                >
                  <Form.Control type="text" />
                </FloatingLabel>
                <br />
                <label>
                  毕业院校：
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  毕业年份：
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  居住地邮编：
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  生日 (Optional)：
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  性别 (Optional)：
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  家庭地址 (Optional)：
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  移动电话 (Optional)：
                  <input type="text" name="name" />
                </label>
                <br />
                <label>
                  职业 (Optional)：
                  <input type="text" name="name" />
                </label>
                <br />
                <label>希望社区能够提供的服务：</label> <br />
                <textarea
                  rows={5}
                  cols={50}
                  wrap="soft"
                  placeholder="Add your text"
                />
                <br />
                <label>希望能参加的社区活动：</label> <br />
                <textarea
                  rows={5}
                  cols={50}
                  wrap="soft"
                  placeholder="Add your text"
                />
                <br />
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
              <div className="service-section flex flex-col justify-between m-4">
                <h1>Terms of Service</h1>
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
                  <h2>Appointment Reminders, Reschedules and Cancellations</h2>
                  <p>
                    I understand that Company can reach me any time to remind me
                    of my appointments or let me know in case of any change
                    about my appointments. And I also understand that the
                    Company can employ and use a third-party automated system to
                    reach out me for the purpose of &quot;confirm&quot;,
                    &quot;reschedule&quot; or &quot;cancel&quot;.
                  </p>
                </div>
                <div>
                  <h2>Contact Information Change</h2>
                  <p>
                    I accept that I am responsible of notifying the Company when
                    my contact informations change.
                  </p>
                </div>
                <div>
                  <h2>Consent Cancellations</h2>
                  <p>
                    I know that I can revoke this consent at any time by
                    contacting the Company.
                  </p>
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
