import React from "react";
import { adsList } from "../constants";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Advertisements = (props) => {
  return (
    <div className="advertisement bg-gray-300 flex flex-col min-h-[100%] h-fit pb-4 max-w-[200px]">
      <div className="text-center pt-4">友情赞助</div>
      {adsList.map((ad, index) => (
        <div key={`ad-${index}`}>
          <AdvertisementSection ad={ad} />
        </div>
      ))}
    </div>
  );
};

const AdvertisementSection = ({ ad }) => {
  const { title, img, content } = ad;
  return (
    <Popup
      modal
      nested
      trigger={
        <button>
          <img className="w-full h-auto pt-4" src={img} />
        </button>
      }
      contentStyle={{
        width: "90%",
        height: "90%",
        maxWidth: "1000px",
      }}
    >
      {(close) => (
        <div className="modal w-full h-full">
          <div className="service-section m-4 w-full h-full">
            <h1 className="m-2 p-2 text-lg">{title}</h1>
            <div className="flex flex-col gap-y-6 p-4 overflow-auto h-[calc(100%-60px)]">
              {content.map((section, index) => {
                if (section[0] == "text")
                  return (
                    <p
                      key={`footer-p-${index}`}
                      className={`whitespace-pre-line p-2 text-left w-full`}
                    >
                      {section[1]}
                    </p>
                  );
                if (section[0] == "img")
                  return (
                    <img
                      key={`footer-p-${index}`}
                      className="w-[75%] h-auto"
                      src={section[1]}
                    />
                  );
                if (section[0] == "link")
                  return (
                    <a
                      href={section[1]}
                      className={`whitespace-pre-line p-2 text-left w-full underline text-blue-500`}
                    >
                      {section[1]}
                    </a>
                  );
              })}
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

export default Advertisements;
