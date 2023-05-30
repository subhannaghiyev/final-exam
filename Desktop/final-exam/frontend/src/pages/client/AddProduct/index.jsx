import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductForm } from "../../../schema";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Helmet} from "react-helmet";
const AddProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductForm),
  });

  const postData = async () => {
    const values = getValues();
    await axios.post("http://localhost:7070/drimo", {
      image: values.image,
      name: values.name,
      description: values.description,
    });
    if (values) {
      navigate("/");
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AddProduct</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <form onSubmit={handleSubmit(postData)}>
        <div className="add">
          <label>Enter Image</label>
          <input
            className="add-inp"
            type="text"
            name=""
            id=""
            {...register("image")}
          />
          {errors.image?.message && (
            <p style={{ color: "red" }}>{errors.image?.message}</p>
          )}
        </div>
        <div className="add">
          <label>Enter Name</label>
          <input
            className="add-inp"
            type="text"
            name=""
            id=""
            {...register("name")}
          />
          {errors.name?.message && (
            <p style={{ color: "red" }}>{errors.name?.message}</p>
          )}
        </div>
        <div className="add">
          <label>Enter Description</label>
          <input
            className="add-inp"
            type="text"
            name=""
            id=""
            {...register("description")}
          />
          {errors.description?.message && (
            <p style={{ color: "red" }}>{errors.description?.message}</p>
          )}
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddProduct;
