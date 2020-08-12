import React from "react";
import Card from "./common/Card";

const SomeWork = ({ data }) => {
  return (
    <div className="mx-lg-5 mx-2 my-5 rounded bg-blue shadow">
      <div className="container p-3">
          <div className="h2 text-center text-white">Some of our work</div><hr />
        <div className="row">
          {data.map((info) => (
              <div key={info.id} className="col-lg-4 col-12 mx-auto p-4">
                <Card title={info.title} image={info.image} description={info.description} />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SomeWork;
