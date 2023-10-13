/* eslint-disable react/prop-types */
import React from "react";
import { journalList } from "../constants";

const Journals = (props) => (
  <div className="journals flex flex-col justify-between pb-4 min-h-[100%] gap-x-4 h-fit">
    {journalList.map((article, index) => (
      <JournalSection article={article} key={`journal-${index}`} />
    ))}
  </div>
);

const JournalSection = ({ article }) => {
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
