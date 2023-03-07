import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginReq } from "../api/authService";

export const LoginActions = createAsyncThunk(
    "users/Login", async (payload) => {
  try {

    const {data} = await LoginReq(payload)

    localStorage.setItem("AUTH", data.token)

  } catch (error) {
    console.log(error);
  }
});
