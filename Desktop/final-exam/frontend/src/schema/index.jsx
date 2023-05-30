import * as yup from "yup";

export const ProductForm = yup.object().shape({
    image: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().required(),
});
