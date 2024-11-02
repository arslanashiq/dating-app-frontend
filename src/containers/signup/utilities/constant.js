import * as Yup from "yup";

export const SIGNUP_FORM_VALIDATION_SCHEMA = Yup.object({
  first_name: Yup.string(),

  last_name: Yup.string(),
  email: Yup.string()
    .email("Must be valid Email")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at lest 6 charachers")
    .required("Password is Required"),
  confirm_password: Yup.string()
    .min(6, "Confirm Password must be at lest 6 charachers")
    .required("Confirm Password is Required"),
  confirm_password: Yup.string()
    .min(6, "Confirm Password must be at lest 6 charachers")
    .oneOf(
      [Yup.ref("password"), null],
      "Password and Confirm Password not match"
    )
    .required("Confirm Password is required"),
});

export const SIGNUP_FORM_INITIAL_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};
