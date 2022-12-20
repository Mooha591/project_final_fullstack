import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Logout = () => {
  return (
    <div>
      <h2>Logout</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Logout;
