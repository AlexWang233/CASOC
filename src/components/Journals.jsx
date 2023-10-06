/* eslint-disable react/prop-types */
import React from "react";
import { journalList } from "../constants";

const Journals = (props) => (
  <div className="journals">
    {journalList.map((article, index) => (
      <JournalSection
        key={`journal-${index}`}
        title={article.title}
        content={article.content}
        picture={article.picture}
      />
    ))}
  </div>
);

const JournalSection = ({ title, content, picture }) => (
  <div className="journal min-h-[150px]">
    <div className="journal-title">{title}</div>
    <div className="journal-content">{content}</div>
  </div>
);

export default Journals;
