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
  const { title, summary, picture, color } = article;
  const borderColor = "border-" + color;
  return (
    <Popup
      modal
      nested
      trigger={
        <button
          className={`border-2 border-solid ${borderColor} journal min-h-[120px] rounded-md p-2 h-fit mt-2 mb-2`}
        >
          <p className={`text-${color} text-lg mb-1 `}>{title}</p>
          <p className="text-base journal">{summary}</p>
        </button>
      }
      contentStyle={{
        width: "90%",
        height: "90%",
        maxWidth: "1400px",
      }}
    >
      {(close) => (
        <div className="modal w-full h-full overflow-x-auto">
          <div className="service-section flex flex-col gap-y-4 m-4 w-full h-full">
            <h1 className="m-4 text-lg">{title}</h1>
            <div className="overflow-auto">{summary}</div>
          </div>
          <button className="close" onClick={close}>
            &times;
          </button>
        </div>
      )}
    </Popup>
  );
};

export default Journals;
