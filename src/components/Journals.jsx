/* eslint-disable react/prop-types */
import React from "react";
import Popup from "reactjs-popup";
import { journalList } from "../constants";

const Journals = (props) => (
  <div className="journals flex flex-col justify-between pb-4 min-h-[100%] gap-x-4 h-fit">
    {journalList.map((article, index) => (
      <JournalSummary article={article} key={`journal-${index}`} />
    ))}
  </div>
);

const JournalSection = ({ article }) => {
  <div className="membership">
    <Popup
      modal
      nested
      trigger={
        <div className="member-login flex justify-center bg-blue-300 border-blue-800">
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
          <form className="register-form flex flex-col justify-between m-4">
            <div className="member-form-section">
              <input
                type="text"
                id="floating_outlined"
                className="member-form-input peer"
                placeholder=" "
              />
              <label htmlFor="floating_outlined" className="member-form-label">
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
              <label htmlFor="floating_outlined" className="member-form-label">
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
              <label htmlFor="floating_outlined" className="member-form-label">
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
              <label htmlFor="floating_outlined" className="member-form-label">
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
              <label htmlFor="floating_outlined" className="member-form-label">
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
              <label htmlFor="floating_outlined" className="member-form-label">
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
              <label htmlFor="floating_outlined" className="member-form-label">
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
              <label htmlFor="floating_outlined" className="member-form-label">
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
              <label htmlFor="floating_outlined" className="member-form-label">
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
              <label htmlFor="floating_outlined" className="member-form-label">
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
          </form>
          )
          <button className="close" onClick={close}>
            &times;
          </button>
        </div>
      )}
    </Popup>
  </div>;
};

const JournalSummary = ({ article }) => {
  const { title, content, picture, color } = article;
  const borderColor = "border-" + color;
  return (
    <div
      className={`border-2 border-solid ${borderColor} journal min-h-[120px] rounded-md p-2 h-fit mt-2 mb-2`}
    >
      <p className={`text-${color} text-lg mb-1 `}>{title}</p>
      <p className="text-base journal">{content}</p>
    </div>
  );
};

export default Journals;
