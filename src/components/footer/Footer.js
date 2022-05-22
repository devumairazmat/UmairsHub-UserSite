import React from "react";
import { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [activeNav, setActiveNav] = useState("home");
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <span>
          <a href="/">
            {" "}
            <h1 id="logo">Umair's Hub</h1>
          </a>
        </span>

        <p className="footer-links">
          <a
            href="/"
            className={activeNav === "home" ? "bold" : ""}
            onClick={() => {
              setActiveNav("/");
            }}
          >
            Home
          </a>
          |
          <a
            href="/about"
            className={activeNav === "About" ? "bold" : ""}
            onClick={() => {
              setActiveNav("About");
            }}
          >
            About Us
          </a>
          |
          <a
            href="/store"
            className={activeNav === "Store" ? "bold" : ""}
            onClick={() => {
              setActiveNav("Store");
            }}
          >
            Store
          </a>
          |
          <a
            href="/contact"
            className={activeNav === "Contact" ? "bold" : ""}
            onClick={() => {
              setActiveNav("Contact");
            }}
          >
            Contact Us
          </a>
        </p>

        <p className="footer-company-name">© copyright 2022 Dev Umair Azmat</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>309 - Rupa Solitaire, Bldg. No. A - 1, Sector - 1</span>
            Smanabad , Faisalabad , Pasakistan
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+92 3217061116</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="/">umairshub@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          We are selling Different Life Products Find it, love it, buy it.
        </p>
        <div className="footer-icons">
          <a href="www.facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
