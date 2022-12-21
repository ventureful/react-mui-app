import { Button } from "@mui/material";
import React from "react";
import Dashboard from "./Dashboard";
import Create from "./Create";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";

function Login() {
  return (
    <div>
      <table align="center">
        <h1>Login</h1>
        <Button>
          <NavLink to="/dashboard">
            <p>Dashboard</p>
          </NavLink>
        </Button>
      </table>
    </div>
  );
}

export default Login;
