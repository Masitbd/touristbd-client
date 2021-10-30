import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ServiceInfo = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  /* useEffect(() => {
    fetch(`http://localhost:5001/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []); */

  return (
    <Card className="container px-5 py-2">
      <h2>Service no {serviceId}</h2>
      <p>{service.Name}</p>
      <p>+00880194001245</p>
      <p>4000 Taka</p>
    </Card>
  );
};

export default ServiceInfo;
