import React from "react";
import { Route, Routes, useRoutes, Navigate } from "react-router-dom";
import Create from "./Create";
import Tables from "./Users/Dashboard/Tables";
import NavBar from "./Users/Dashboard/NavBar";
import MsgError from "./MsgError";
import CreateCon from "./Users/Dashboard/CreateCon";
import TablePaper from "./Users/Dashboard/TablePaper";
import PaperDetail from "./Users/Dashboard/PaperDetail";
function Dashboard() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<PaperDetail />} />
        {/* <Route path="create" element={<CreateCon />} /> */}
        <Route path="*" element={<MsgError />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
