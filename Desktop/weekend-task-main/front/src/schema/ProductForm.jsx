import * as yup from "yup";
export const ProductForm = yup.object().shape({
  image: yup.string().required("This field is required"),
  name: yup.string().required("This field is required"),
  price: yup.string().required("This field is required"),

});