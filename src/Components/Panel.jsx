import React from "react";

const Panel = ({ panel }) => {
  return (
    <div className="container mx-auto my-5 p-lg-5 p-3 shadow rounded-lg bg-white">
      <div className="row text-center">
        <div className="col-lg-5 col-12 m-auto">
          <div className="h2">{panel.title}</div>
          <hr />
          <div className="h5 text-justify p-lg-0 p-3">{panel.description}</div>
          <div className="h5 text-dark"><b>{panel.subTitle}</b></div>
        </div>
        <div className="col-lg-5 col-12 mx-auto w-100 row-3">
          <iframe
            className="w-100 h-100 border-0"
            src={panel.link}
            title="Panel Discussion"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Panel;
