import React from "react";
import { useState } from "react";
import { ImPhone } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { VscTriangleDown } from "react-icons/vsc";
import Logo from "../../assets/images/logo1.png";
import ProfilePic from "../../assets/images/man.png";
import "./Navbar.css";
import Socials from "../socials/Socials";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const isUser = useSelector((state) => state.isUser.value);
  const amount = useSelector((state) => state.cart.value.length);
  const [activeNav, setActiveNav] = useState("home");
  return (
    <header style={{ marginBottom: "0" }}>
      <div className="nav-container ">
        <div className="nav-inner">
          <div className="top" onClick={console.log("clickedHere")}>
            <div className="top-left flex">
              <div className="flex contact-mail">
                <ImPhone />
                <p>+92 321706116</p>
              </div>
              <div className="flex contact-mail">
                <GrMail />
                <p>umairshub@gmail.com</p>
              </div>
            </div>

            <div className="top-right flex ">
              <Socials bgClr="#000000" clr="#fff" width="24px" fSize="16px" />
            </div>
          </div>
        </div>
        <div className="container-fluid hr"></div>
        <div className="nav-inner">
          <div className="bottom">
            <a href="/">
              {" "}
              <h1 id="logo">Umair's Hub</h1>
            </a>

            <div className="bottom-right">
              <nav>
                <ul className="fs-200 bottom-nav">
                  <li className="nav-padding ">
                    <a
                      href="/"
                      className={activeNav === "home" ? "bold" : ""}
                      onClick={() => {
                        setActiveNav("/");
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-padding">
                    <a
                      href="/about"
                      className={activeNav === "About" ? "bold" : ""}
                      onClick={() => {
                        setActiveNav("About");
                      }}
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-padding">
                    <a
                      href="/store"
                      className={activeNav === "Store" ? "bold" : ""}
                      onClick={() => {
                        setActiveNav("Store");
                      }}
                    >
                      Store
                    </a>
                  </li>
                  <li className="nav-padding">
                    <a
                      href="/contact"
                      className={activeNav === "Contact" ? "bold" : ""}
                      onClick={() => {
                        setActiveNav("Contact");
                      }}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
              <div className={`buttons ${isUser ? "buttonsHide" : ""}`}>
                <a
                  href="/signup"
                  className="btn-outline transition btn-shadow"
                  onClick={() => {
                    setActiveNav("signup");
                  }}
                >
                  Sign Up
                </a>
                <a
                  href="/login"
                  className="btn-contain transition btn-shadow"
                  onClick={() => {
                    setActiveNav("login");
                  }}
                >
                  Login
                </a>
                <Link to="/cart">
                  <AiOutlineShoppingCart
                    style={{
                      height: "50px",
                      marginLeft: "20px",
                      marginRight: "10px",
                    }}
                  />
                  {amount}
                </Link>
              </div>

              <div
                className={`profile ${isUser ? "" : "profileHide"}`}
                style={{
                  alignItems: "center",
                  gap: "22px",
                }}
              >
                <div
                  className="profile"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={ProfilePic} alt="" />
                  <ul style={{ margin: "0", padding: "0" }}>
                    <li className="profile-dropdown">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "6px 0",
                          gap: "4px",
                          cursor: "pointer",
                        }}
                      >
                        <p
                          className="fs-100 bold clr-black-light"
                          style={{
                            marginBottom: "0",
                          }}
                        >
                          Umair Azmat
                        </p>
                        <VscTriangleDown style={{ width: "8px" }} />
                      </div>
                      <ul className="profile-submenu">
                        <li className="upper-items bold fs-200 clr-black-main">
                          Umair's Store
                        </li>
                        <li className="upper-items bold fs-200 clr-black-main">
                          Favourites
                        </li>
                        <li className="upper-items bold fs-200 clr-black-main">
                          Inbox (5)
                        </li>
                        <li className="upper-items bold fs-200 clr-black-main">
                          Notifications (3)
                        </li>
                        <li
                          style={{
                            width: "100%",
                            height: "1px",
                            backgroundColor: "#505046",
                          }}
                        ></li>
                        <li className="fs-100 clr-black-extralight">Account</li>
                        <li className="fs-100 clr-black-extralight">Help</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
