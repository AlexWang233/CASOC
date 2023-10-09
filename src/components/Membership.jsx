import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Membership(props) {
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
            <form>
              <label>
                会员姓名：
                <input type="text" name="name" />
              </label>
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
              <label className="w-10 mr-2">
                <input type="checkbox" />
                我同意服务条款
              </label>
              <input type="submit" value="提交" />
            </form>
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
}

export default Membership;
