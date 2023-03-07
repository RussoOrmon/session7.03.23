import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
