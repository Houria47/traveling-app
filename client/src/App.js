import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import Places from "./pages/Places";
import Services from "./pages/Services";
import Book from "./pages/Book";
import Dirver from "./pages/Driver";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { Provider } from "react-redux";
import ContactMessagesPage from "./pages/Admin/ContactMessagesPage";
import AdminLayout from "./layout/AdminLayout";
import DriversOrders from "./pages/Admin/DriversOrders";
import Settings from "./pages/Admin/Settings";
import { store } from "./store/store";
import Profile from "./pages/Profile";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="places" element={<Places />} />
            <Route path="services" element={<Services />} />
            <Route path="book/*" element={<Book />} />
            <Route path="*" element={<NoPage />} />
            <Route path="driver/*" element={<Dirver />} />
            <Route path="profile/*" element={<Profile />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Settings />} />
            <Route path="usersMessages" element={<ContactMessagesPage />} />
            <Route path="driversOrders" element={<DriversOrders />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
library.add(fab, fas, far);
