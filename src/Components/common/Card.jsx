import React from "react";

const Card = ({ image, title, name, info, description }) => {
  return (
    <div>
      <div className="card row-4 border-0 p-0 shadow rounded">
        <img src={require(`../assets/image/card-img/${image}.jpg`)} className="card-img-top opacity-1 rounded-top shadow-sm" alt="Work" />
        <div className="card-body text-center">
          <div className="h5">{name}</div>
          <div className="h4">{title}</div>
          <i>{info}</i>
          <div className="p-2">
              <p className="card-text text-center">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
