import React from "react";

const Home = ({ image }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 m-auto text-center col-10 order-lg-2 order-1">
          <div className="h1 tm-color heading p-4">
            WELCOME TO
            <br />
            <span className="text-blue">THE LEGAL NOTICE</span>
          </div>
          <p className="h5 px-4">
            EVERYTHING FROM A CONSTANT <br />
            TO A VARIABLE.
          </p>
        </div>
        <div className="col-lg-5 col-10 m-auto order-lg-1 order-2">
          <img className="w-100 my-4" src={image} alt="The Legal Notice" />
        </div>
      </div>
    </div>
  );
};

export default Home;
