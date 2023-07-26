import React, { useState, useEffect } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";
import bcrypt from "bcryptjs";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
require("./Auth.css");

const Register = () => {
  
  const [onScreenComponent, setOnScreenComponent] = useState(["loading"]);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOnScreenComponent(["default"]);
    }, 3000);
  });

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pw, setPw] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [visible, setVisible] = useState(false);

  const [loginOrRegister, setLoginOrRegister] = useState("login");

  const [loginRegisterMessage, setLoginRegisterMessage] = useState("");

  const clear = () => {
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setPw("");
    setEmailOrPhone("");
  };

  const toggleLoginRegister = () => {
    clear();
    setLoginRegisterMessage("");
    if (loginOrRegister === "login") return setLoginOrRegister("register");
    return setLoginOrRegister("login");
  };

  const togglePasswordVisibility = () => {
    visible ? setVisible(false) : setVisible(true);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const salt = bcrypt.genSaltSync(10);
    const hashedPw = bcrypt.hashSync(pw, salt);

    const newUserData = [fname, lname, email, phone, hashedPw];

    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/register",
        newUserData
      );

      if (data.code === "ER_DUP_ENTRY")
        return setLoginRegisterMessage(
          "An account with that email or password already exists. Please enter a different email and/or phone to sign up."
        );

      if (data.code === "ERR_NETWORK")
        return setLoginRegisterMessage(
          "A network error occurred while registering your account.  Please try again."
        );

      return setLoginRegisterMessage(
        `Account created! Click "Login" above to get started.`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // test if the user input credential is an email or phone number
    let loginMethod;
    const lettersOrPunctuation = /[a-zA-Z!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    if (
      emailOrPhone.includes("@") &&
      emailOrPhone.charAt(emailOrPhone.length - 4) === "."
    ) {
      loginMethod = "email";
    } else if (
      emailOrPhone.toString().length === 10 &&
      !lettersOrPunctuation.test(emailOrPhone)
    ) {
      loginMethod = "phone";
    } else {
      setLoginRegisterMessage("Invalid email or phone");
      return console.log(loginRegisterMessage);
    }

    // attempt login
    try {
      const { data } = await axios.post("http://localhost:3001/api/login/", {
        loginMethod: loginMethod,
        emailOrPhone: emailOrPhone.toString(),
        pw: pw,
      });

      // if the returned data contains a property called "errorMessage", set the loginRegisterMessage to the errorMessage
      if (data.errorMessage) return setLoginRegisterMessage(data.errorMessage);

      // if there is no error, set the token in the local storage
      window.localStorage.setItem("token", data.token);
      return console.log("data --> ", data);
    } catch (error) {
      // if there is any other kind of error during login
      setLoginRegisterMessage(`Login attempted failed. Please try again.`);
      return console.log(error);
    }
  };

  return (
    <>
      <AnimatePresence>
        {onScreenComponent[0] === "loading" ? (
          <LoadingAnimation />
        ) : (
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="login-register-container">
              {loginOrRegister === "login" ? (
                <motion.div
                  className="login-box"
                  initial={{ scale: 0 }}
                  animate={loginOrRegister === "login" && { scale: 1 }}
                  exit={loginOrRegister !== "login" && { scale: 0 }}
                >
                  <LoginIcon fontSize="large" />
                  <h1>Login</h1>
                  <form className="auth-form" onSubmit={(e) => handleLogin(e)}>
                    <input
                      type="text"
                      placeholder="email or phone"
                      required
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                    />
                    <div className="password-input">
                      <input
                        type={visible ? "text" : "password"}
                        placeholder="password"
                        required
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                      />
                      <div
                        className="eye"
                        onClick={() => togglePasswordVisibility()}
                      >
                        {visible ? (
                          <VisibilityOffIcon sx={{ color: "#000000" }} />
                        ) : (
                          <VisibilityIcon sx={{ color: "#000000" }} />
                        )}
                      </div>
                    </div>
                    <button className="login-button" type="submit">
                      Login
                    </button>
                  </form>
                  <div className="switch-login-register">
                    <p>Don't have an account?</p>
                    <button
                      className="switch-to-register"
                      onClick={() => toggleLoginRegister()}
                    >
                      Register
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="register-box"
                  initial={{ scale: 0 }}
                  animate={loginOrRegister === "register" && { scale: 1 }}
                  exit={loginOrRegister !== "register" && { scale: 0 }}
                >
                  <AppRegistrationIcon fontSize="large" />
                  <h1>Register</h1>
                  <form
                    className="auth-form"
                    onSubmit={(e) => handleRegister(e)}
                  >
                    <input
                      type="text"
                      placeholder="first name"
                      required
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="last name"
                      required
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <div className="password-input">
                      <input
                        type={visible ? "text" : "password"}
                        placeholder="password"
                        required
                        minLength={8}
                        maxLength={20}
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                      />
                      <div
                        className="eye"
                        onClick={() => togglePasswordVisibility()}
                      >
                        {"   "}
                        {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </div>
                    </div>
                    <p>password must be between 8 and 25 characters long</p>
                    <button className="register-button" type="submit">
                      Register
                    </button>
                    <button className="clear-form" onClick={() => clear()}>
                      Clear form
                    </button>
                  </form>
                  <div className="switch-login-register">
                    <p>Already have an account?</p>
                    <button
                      className="switch-to-login"
                      onClick={() => toggleLoginRegister()}
                    >
                      Login
                    </button>
                  </div>
                </motion.div>
              )}
              <div className="error-message">
                <h4>{loginRegisterMessage}</h4>
              </div>
            </div>
          </motion.div>
        )}{" "}
      </AnimatePresence>
    </>
  );
};

export default Register;
