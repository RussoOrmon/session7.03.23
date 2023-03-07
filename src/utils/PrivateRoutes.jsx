import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = (data) => {

 const token = localStorage.getItem("AUTH", data.token )

  console.log("🚀 ~ token:", token)


  return token ? <Outlet /> : <Navigate to="/login" />;
};
