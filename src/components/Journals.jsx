/* eslint-disable react/prop-types */
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { journalList } from "../constants";

const Journals = (props) => (
  <div className="journals flex flex-col justify-between ml-4 mr-4 min-h-[100%] h-fit">
    {journalList.map((journal, index) =>
      journal.type == "list" ? (
        <React.Fragment key={`journal-list-${index}`}>
          <JournalListSection journal={journal} index={index} />
        </React.Fragment>
      ) : (
        <React.Fragment key={`journal-${index}`}>
          <JournalSection journal={journal} />
        </React.Fragment>
      )
    )}
  </div>
);

const JournalListSection = ({ journal, index }) => {
  const { color, content, title } = journal;
  return (
    <div
      className={`border-2 border-solid border-${color} min-h-[120px] max-h-[144px] rounded-md p-2 h-fit mt-2 mb-2 flex flex-col items-center`}
    >
      <p className={`text-${color} text-xl mb-1`}>{title}</p>
      <div className=" overflow-auto flex flex-col items-center w-full w-max-full pl-4 pr-4">
        {content.map((article, index) => (
          <React.Fragment key={`article-${index}`}>
            <ArticleSection article={article} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const ArticleSection = ({ article }) => {
  const { title, summary, content, picture, color } = article;
  return (
    <Popup
      modal
      nested
      trigger={
        <button className="max-w-full flex justify-center">
          <p
            className={`text-${color} text-base mb-1 border-b-2 border-${color} w-fit  truncate max-h-[26px]  max-w-[100%]`}
          >
            {title}
          </p>
        </button>
      }
      contentStyle={{
        width: "90%",
        height: "90%",
        maxWidth: "1400px",
      }}
    >
      {(close) => (
        <div className="modal w-full h-full">
          <div className="service-section m-4 w-full h-full">
            <h1 className="m-2 p-2 text-lg">{title}</h1>
            <div className="flex flex-col gap-y-6 p-4 overflow-auto h-[calc(100%-60px)]">
              {content
                ? content.map((section, index) => (
                    <div
                      key={`journal-section-${index}`}
                      className="flex flex-row w-full p-2"
                    >
                      {section.map((item, index2) =>
                        item[1] == "text" ? (
                          <p
                            key={`journal-section-${index}-${index2}`}
                            className={`whitespace-pre-line p-2 text-left w-\[${item[0]}%\]`}
                          >
                            {item[2]}
                          </p>
                        ) : (
                          <div
                            key={`journal-section-${index}-${index2}`}
                            className={`relative p-2 w-\[${item[0]}%\] m-auto`}
                          >
                            <img
                              key={`journal-section-${index}-${index2}`}
                              className={`inset-0 w-full object-cover`}
                              src={item[2]}
                            />
                          </div>
                        )
                      )}
                    </div>
                  ))
                : summary}
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

const JournalSection = ({ journal }) => {
  const { title, summary, content, picture, color } = journal;
  return (
    <Popup
      modal
      nested
      trigger={
        <button
          className={`border-2 border-solid border-${color} journal min-h-[120px] rounded-md p-2 h-fit mt-2 mb-2`}
        >
          <p className={`text-${color} text-xl mb-1 `}>{title}</p>
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
        <div className="modal w-full h-full">
          <div className="service-section m-4 w-full h-full">
            <h1 className="m-2 p-2 text-lg">{title}</h1>
            <div className="flex flex-col items-center gap-y-6 p-4 overflow-auto max-h-[90%]">
              {content
                ? content.map((section, index) => (
                    <div
                      key={`journal-section-${index}`}
                      className="flex flex-row w-full p-2"
                    >
                      {section.map((item, index2) =>
                        item[1] == "text" ? (
                          <p
                            key={`journal-section-${index}-${index2}`}
                            className={`whitespace-pre-line p-2 text-left w-\[${item[0]}%\]`}
                          >
                            {item[2]}
                          </p>
                        ) : (
                          <div className={`relative p-2 w-\[${item[0]}%\]`}>
                            <img
                              key={`journal-section-${index}-${index2}`}
                              className={`inset-0 w-full object-cover`}
                              src={item[2]}
                            />
                          </div>
                        )
                      )}
                    </div>
                  ))
                : summary}
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

export default Journals;
