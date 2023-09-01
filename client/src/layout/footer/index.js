import React from "react";

import clasess from "./mainFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className={clasess.footer}>
      <div className={clasess.box}>
        <h3>travelling</h3>
        <p>
          Itinerary Planner is designed to meet the needs of all types of
          travelers, whether you're a solo explorer, an adventure junkie, or a
          family looking to spend quality time together....
        </p>
      </div>
      <div className={clasess.box}>
        <h3>quick links</h3>
        <Link to="/">home</Link>
        <Link to="/book">book</Link>
        <Link to="/places">places</Link>
        <Link to="/services">services</Link>
        <Link to="/contact">contact</Link>
      </div>
      <div className={clasess.box}>
        <h3>follow us</h3>
        <a href="/" className={clasess.fb}>
          <FontAwesomeIcon icon="fab fa-facebook-f" /> facebook
        </a>
        <a href="/" className={clasess.inst}>
          <FontAwesomeIcon icon="fab fa-instagram" /> instagram
        </a>
        <a href="/" className={clasess.tw}>
          <FontAwesomeIcon icon="fab fa-twitter" /> twitter
        </a>
        <a href="/" className={clasess.yt}>
          <FontAwesomeIcon icon="fab fa-youtube" /> youtube
        </a>
      </div>
    </section>
  );
};

export default Footer;
