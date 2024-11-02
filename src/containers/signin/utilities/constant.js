import * as Yup from "yup";

export const SIGNIN_FORM_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

export const SIGNIN_FORM_INITIAL_VALUES = { email: "", password: "" };
