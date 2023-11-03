import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> | 
      <Link to="/signup"> Signup</Link> | <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Layout;
