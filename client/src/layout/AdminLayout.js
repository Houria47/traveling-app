import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

function AdminLayout() {
  return (
    <>
      <Navbar type="admin" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AdminLayout;
