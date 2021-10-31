import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { _id, name, description, price, img } = props.service;

  return (
    <div className="container">
      <div className="display-card">
        <img src={img} alt="" height="200" width="100%" />
        <h3 className="my-2 text-success">{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <Link to={`/serviceInfo/${_id}`}>
          <button className="btn-regular">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
