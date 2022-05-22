import React from "react";
import "./Jumbotron.css";
import { useState } from "react";
function Jumbotron() {
  const [activeNav, setActiveNav] = useState("home");
  return (
    <>
      <div className="container mt-4 mb-4 pt-4 pb-4">
        <div className="jumbotron text-center mt-4 mb-4">
          <h1 className="display-4  mt-4 mb-4">
            You deserve a comfortable life
          </h1>
          <p className="lead  mt-4 mb-4">
            We have made quality our habit. It’s not something that we just
            strive for – we live by this principle every day.
          </p>
          <hr className="my-4  mt-4 mb-4" />
          <p className=" mt-4 mb-4">
            While most of the things about the creative process will be
            forgotten, the excellence of our products and services will be
            remembered.
          </p>
          <a
            className="btn btn-primary btn-lg  mt-4 mb-4 btn-donate"
            role="button"
            href="/store"
            onClick={() => {
              setActiveNav("/");
            }}
          >
            Shop Now
          </a>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
