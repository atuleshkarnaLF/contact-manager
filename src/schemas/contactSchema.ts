import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email format.")
    .trim()
    .lowercase()
    .required("Email is required."),
  name: Yup.string().required("name is required."),
  phone: Yup.string(),
  photograph: Yup.string().required("Photograph is required"),
});
