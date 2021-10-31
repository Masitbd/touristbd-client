import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ServiceInfo.css";

const ServiceInfo = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://gory-nightmare-31533.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <Card className="display my-5 ">
      <h3 className="bg-secondary text-white">Book this package</h3>
      <h2 className="text-primary">{service.name}</h2>
      <p>{service.description}</p>
      <p>${service.price}</p>
      <button className="btn btn-warning">Add</button>
    </Card>
  );
};

export default ServiceInfo;
