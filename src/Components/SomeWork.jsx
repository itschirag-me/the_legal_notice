import React from "react";
import Card from "./common/Card";
import { Link } from 'react-router-dom';

const SomeWork = ({ data }) => {
  return (
    <div className="mx-lg-5 mx-2 my-5 rounded bg-blue shadow">
      <div className="container p-3">
          <div className="h2 text-center text-white">Some of our work</div><hr />
        <div className="row">
          {data.map((info) => (
              <Link key={info.id} to={info.link} className="nav-link col-lg-4 col-12 mx-auto p-4 text-secondary">
                <Card title={info.title} image={info.image} description={info.description} />
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SomeWork;
