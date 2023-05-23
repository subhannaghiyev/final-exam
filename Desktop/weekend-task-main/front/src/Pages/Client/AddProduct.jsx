import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form";
import { ProductForm } from '../../schema/ProductForm';
import { yupResolver } from '@hookform/resolvers/yup';
export default function AddProduct() {
  const {
    register,
    handleSubmit,getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductForm),
  });
const postData=async()=>{
  const values=getValues()
  await axios.post("http://localhost:2003/users",{
    image:values.image,
    name:values.name,
    price:values.price
  })
}
  return (
    <form style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:40}} onSubmit={handleSubmit(postData)}>
      <label htmlFor="">Image</label>
      <input {...register('image')} />
      {errors.image?.message && <p>{errors.image?.message}</p>}
      <label htmlFor="">Name</label>
      <input {...register('name')} />
      {errors.name?.message && <p>{errors.name?.message}</p>}
      <label htmlFor="">Price</label>
      <input {...register('price')} />
      {errors.price?.message && <p>{errors.price?.message}</p>}
      <button type='submit'>Submit</button>
    </form>
  )
}
