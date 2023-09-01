import React from "react";
import classes from "./Sidebar.module.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  const params = useParams();
  console.log(params["*"]);
  return (
    <aside className={classes.sidebar}>
      <ul>
        <li className={!params["*"] ? classes.active : ""}>
          <Link to="/profile">
            <FontAwesomeIcon icon="fas fa-user" /> Profile Settings
          </Link>
        </li>
        <li className={params["*"] === "pass" ? classes.active : ""}>
          <Link to="/profile/pass">
            <FontAwesomeIcon icon="fas fa-lock" /> Password
          </Link>
        </li>
        <li className={params["*"] === "trips" ? classes.active : ""}>
          <Link to="/profile/trips">
            <FontAwesomeIcon icon="fas fa-location-dot" /> My Trips
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
