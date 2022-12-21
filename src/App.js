import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthorData from "./Author/MutiForm/AuthorData";
import PaperData from "./Author/MutiForm/PaperData";
import MutiForm from "./Author/MutiForm/MutiForm";
import Dashboard from "./Dashboard";
import MsgError from "./MsgError";
import Login from "./Users/Login/Login";
import Create from "./Create";

function App() {
  return (
    <div>
      <Dashboard />
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/authdata" element={<AuthorData />} />
        <Route path="/paperdata" element={<PaperData />} />
        <Route path="*" element={<MsgError />} />
      </Routes> */}
    </div>
  );
}

export default App;
