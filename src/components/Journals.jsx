/* eslint-disable react/prop-types */
import React from "react";
import { journalList } from "../constants";

const Journals = (props) => (
  <div className="journals flex flex-col justify-between">
    {journalList.map((article, index) => (
      <JournalSection
        key={`journal-${index}`}
        title={article.title}
        content={article.content}
        picture={article.picture}
        color={article.color}
      />
    ))}
  </div>
);

const JournalSection = ({ title, content, picture, color }) => (
  <div
    className={`border-2 border-${color} journal min-h-[120px] rounded-md p-2`}
  >
    <p className={`text-${color} text-lg mb-1 `}>{title}</p>
    <p className="text-base">{content}</p>
  </div>
);

export default Journals;
