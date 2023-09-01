import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout() {
  return (
    <>
      <Navbar type="normal" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
