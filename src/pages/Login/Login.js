import React, { useState } from "react";
// import { GoogleLogin } from "react-google-login";
import "./Login.css";
import { auth } from "../../config/Config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [userData, setUser] = useState("");
  const [password, setPassword] = useState("");
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="login-container">
      <div className="login-outer">
        <div className="login-inner">
          <h2 className="login-heading">Login In</h2>
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
              className="login-input"
              name=""
              id="email"
              onChange={(e) => {
                setUser(e.target.value);
              }}
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
              className="login-input"
              name=""
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="login-button mt-4"
            onClick={async () => {
              const auth = getAuth();
              try {
                let userCredential = await signInWithEmailAndPassword(
                  auth,
                  userData,
                  password
                );

                const user = userCredential.user;
                alert("Login successful");
                // ...
              } catch (error) {
                console.log(error);
                alert("Login failed");
              }
            }}
          >
            Login
          </button>
          {/* <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Login"
                        className="google-login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                    /> */}
          <span>
            Don't have an account? <a href="/">Sign up here</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
