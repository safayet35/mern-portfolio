import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
const AppLayout = () => {
   
   
  return (
    <div className="relative">
      <Toaster />
      <div className="md:hidden">
        <Navbar
          style="bg-mainBackground z-50 fixed top-0 flex items-center
			justify-between py-4 px-4 w-full"
        />
      </div>
      <div className="md:ml-16">
        <Outlet />
      </div>

      <NavigationBar />
    </div>
  );
};
export default AppLayout;
