import React from "react";
import { Outlet } from "react-router-dom";
import Saitbar from "./Saitbar";
import OnlineUser from "./OnlineUser";
//import Navbar from "./Navbar";
//import Footer from "./Footer";

function MainLoyOut() {
  return (
    <div className="flex justify-between">
      <Saitbar />
      <main className="w-full bg-warningt p-10">
        <Outlet />
      </main>
      <OnlineUser />
    </div>
  );
}

export default MainLoyOut;
