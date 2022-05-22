import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import auth from "../../config/Config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { GoogleLogin } from "react-google-login";
import "./Signup.css";
const Signup = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <>
      {" "}
      <Navbar />
      <div className="signup-container mt-4 mb-4">
        <div className="signup-outer mt-4 mb-4">
          <div className="signup-inner mt-4 mb-4">
            <h2 className="signup-heading">Sign Up</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <label htmlFor="Name" style={{ fontSize: "14px" }}>
                Name
              </label>
              <input
                type="name"
                className="signup-input"
                name="name"
                id="name"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <label htmlFor="email" style={{ fontSize: "14px" }}>
                Email
              </label>
              <input
                type="email"
                className="signup-input"
                name="mail"
                id="email"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <label htmlFor="password" style={{ fontSize: "14px" }}>
                Password
              </label>
              <input
                type="password"
                className="signup-input"
                name=""
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <label htmlFor="password" style={{ fontSize: "14px" }}>
                Repeat Password
              </label>
              <input
                type="password"
                className="signup-input"
                name="password"
                id="password"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <label htmlFor="password" style={{ fontSize: "14px" }}>
                Country
              </label>
              <input
                type="Country"
                className="signup-input"
                name="country"
                id="password"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <label htmlFor="password" style={{ fontSize: "14px" }}>
                State
              </label>
              <input
                type="State"
                className="signup-input"
                name="State"
                id="state"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <label htmlFor="password" style={{ fontSize: "14px" }}>
                City
              </label>
              <input
                type=" City"
                className="signup-input"
                name=" City"
                id=" city"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <label htmlFor="password" style={{ fontSize: "14px" }}>
                Postal Code
              </label>
              <input
                type="Postal Code"
                className="signup-input"
                name="Postal Code"
                id="PostalCode"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <label htmlFor="password" style={{ fontSize: "14px" }}>
                Mobile Number
              </label>
              <input
                type="Mobile Number"
                className="signup-input"
                name="Mobile Number"
                id="MobileNumber"
              />
            </div>
            <button
              className="signup-button"
              onClick={async () => {
                let data = {
                  user: user,
                  password: password,
                };
                console.log(data);
                const auth = getAuth();
                try {
                  console.log(data.user, "user");
                  const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    data.user,
                    data.password
                  );
                  const user = userCredential.user;
                  // ...
                  console.log(user);
                  alert("User Registered successfully");
                } catch (error) {
                  console.log(error);
                  alert("User Registration failed");
                }
              }}
            >
              Sign Up
            </button>

            {/* <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Sign Up"
                        className="google-signup"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                    /> */}
            <span>
              Already have an account? <a href="/">Sign Up here</a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
