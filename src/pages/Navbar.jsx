import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{textAlign:"center", margin: "20px"  }} >

      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
