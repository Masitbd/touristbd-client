import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://gory-nightmare-31533.herokuapp.com/services", data)
      /*  .post("http://localhost:5000/services", data) */

      .then((res) => {
        if (res.data.insertedId) {
          alert("One record added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h2>Please add a service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 100 })}
          placeholder="Enter service name"
        />
        <textarea
          {...register("description")}
          placeholder="Enter service description"
        />
        <input type="number" {...register("price")} placeholder="Enter price" />
        <input {...register("img")} placeholder="Enter image URL" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
