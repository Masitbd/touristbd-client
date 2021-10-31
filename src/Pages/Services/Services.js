import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import ServiceInfo from "../ServiceInfo/ServiceInfo";

import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://gory-nightmare-31533.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center text-danger my-3">Our services</h2>
      <div className="information-container">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
