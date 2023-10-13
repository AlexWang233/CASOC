/* eslint-disable react/prop-types */
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { journalList } from "../constants";

const Journals = (props) => (
  <div className="journals flex flex-col justify-between pb-4 min-h-[100%] gap-x-4 h-fit">
    {journalList.map((article, index) => (
      <JournalSection article={article} key={`journal-${index}`} />
    ))}
  </div>
);

const JournalSection = ({ article }) => {
  return (
    <Popup
      modal
      nested
      trigger={<JournalSummary article={article} />}
      contentStyle={{
        width: "10%",
        height: "10%",
        minHeight: "800px",
        minWidth: "800px",
      }}
    >
      {(close) => (
        <div className="modal w-full h-full">
          <div className="service-section flex flex-col justify-between m-4 w-full h-full">
            <h1>Terms of Service</h1>
            <div className="border-2 border-grey-300 h-full flex flex-col justify-between p-4 mt-4 mb-4">
              <div>
                <h2>Consent：</h2>
                <p>
                  I consent that the Company can provide their services and
                  communicate with me via mobile phone, messages, e-mail and any
                  kind of online communications, provided that these
                  communications comply with privacy regulations.
                </p>
              </div>
              <div>
                <h2>Appointment Reminders, Reschedules and Cancellations</h2>
                <p>
                  I understand that Company can reach me any time to remind me
                  of my appointments or let me know in case of any change about
                  my appointments. And I also understand that the Company can
                  employ and use a third-party automated system to reach out me
                  for the purpose of &quot;confirm&quot;, &quot;reschedule&quot;
                  or &quot;cancel&quot;.
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
            </div>
            <div className="flex justify-center mb-4">
              <label className="w-40 mr-2">
                <input type="checkbox" />
                我同意服务条款
              </label>
            </div>
          </div>
          <button className="close" onClick={close}>
            &times;
          </button>
        </div>
      )}
    </Popup>
  );
};

const JournalSummary = ({ article }) => {
  const { title, content, picture, color } = article;
  const borderColor = "border-" + color;
  return (
    <button
      className={`border-2 border-solid ${borderColor} journal min-h-[120px] rounded-md p-2 h-fit mt-2 mb-2`}
    >
      <p className={`text-${color} text-lg mb-1 `}>{title}</p>
      <p className="text-base journal">{content}</p>
    </button>
  );
};

export default Journals;
