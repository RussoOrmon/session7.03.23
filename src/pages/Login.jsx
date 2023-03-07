import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { LoginActions } from "../store/authAction";

export const Login = () => {
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    console.log("AAAA", values);
    dispatch(LoginActions(values));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitHandler,
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="email"
        value={values.email}
        onChange={handleChange}
        id="outlined-basic"
        label="email"
        variant="outlined"
      />
      <TextField
        name="password"
        value={values.password}
        onChange={handleChange}
        id="filled-basic"
        label="password"
        variant="outlined"
      />
      
      <Button type="submit">Sign In </Button>
    </form>
  );
};
