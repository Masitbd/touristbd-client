import React from "react";
import { Card } from "react-bootstrap";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://image.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_1150-7411.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 2,
      src: "https://img.freepik.com/free-photo/portrait-pretty-young-hipster-woman-having-fun-city-with-camera_1150-4602.jpg?size=338&ext=jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 1,
      src: "https://image.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_1150-7411.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 2,
      src: "https://img.freepik.com/free-photo/portrait-pretty-young-hipster-woman-having-fun-city-with-camera_1150-4602.jpg?size=338&ext=jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 4,
      src: "https://image.freepik.com/free-vector/hospital-facade-street-view-flat-style-ambulance-car-entrance_1268-11787.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 5,
      src: "https://image.freepik.com/free-vector/medical-icons-collection_1172-48.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 1,
      src: "https://image.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_1150-7411.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 4,
      src: "https://image.freepik.com/free-vector/hospital-facade-street-view-flat-style-ambulance-car-entrance_1268-11787.jpg",
      title: "foo",
      description: "bar",
    },
    {
      id: 5,
      src: "https://image.freepik.com/free-vector/medical-icons-collection_1172-48.jpg",
      title: "foo",
      description: "bar",
    },
  ];
  return (
    <div className="">
      <div className="information-containe w-50 p-3 ">
        {images.map(({ id, src }) => (
          <img key={id} src={src} className=" w-100 p-3" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
