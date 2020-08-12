import React from "react";

const CardAbout = ({ name, description, image, profile, quotes, title }) => {
  return (
    <div className="card border-0 h-100 p-0 shadow">
      <img
        src={require("../assets/image/legal-contract-1024x640.jpg")}
        className="card-img-top border-0"
        alt="Card background"
      />
      <div className="mx-auto m-nt w-img">
        <img
          className="w-img bg-white border-1 rounded-circle shadow"
          src={require(`../assets/image/profile-img/${profile}.jpg`)}
          alt={name}
        />
      </div>
      <div className="card-body text-center pt-2">
        <div className="">
          <div className="h5">{name}</div>
          <p>{title}</p>
        </div>
        <p id="mem-1-s" className="card-text">
          {description}
        </p>
        <i>{quotes}</i>
      </div>
    </div>
  );
};

export default CardAbout;
