import React from "react";

import { Routes, Route } from "react-router-dom";

import classes from "./Profile.module.css";
import Sidebar from "./Sidebar/Sidebar";
import InfoTab from "./InfoTab/InfoTab";
import SettingsTab from "./SettingsTab/SettingsTab";
import MyTripTab from "./SettingsTab/MyTripsTab/MyTripsTab";

const Profile = () => {
  return (
    <div className={classes.profileContainer}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<InfoTab />} />
        <Route path="pass" element={<SettingsTab />} />
        <Route path="trips" element={<MyTripTab />} />
      </Routes>
    </div>
  );
};
export default Profile;
