import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";
import bcrypt from "bcryptjs";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
require("./Auth.css");

const Register = () => {
  const [loading, setLoading] = useState(true);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pword, setPword] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [loginOrRegister, setLoginOrRegister] = useState("login");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useLayoutEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handlePageLoad);
    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  const togglePasswordVisibility = () => {
    visible ? setVisible(false) : setVisible(true);
  };
  // const formatPhone = (e) => {
  //   if (!e.target.value) return e.target.value;
  //   const phoneNum = e.target.value.replace(/[^\d]/g, "");
  //   if (phoneNum.length < 4) return setEmailOrPhone(phoneNum);
  //   if (phoneNum.length < 7) {
  //     return setEmail(`(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3)}`);
  //   }
  //   return setEmailOrPhone(`(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3, 6)}-${phoneNum.slice(
  //     6,
  //     10
  //   )}`);
  // };

  const handleRegister = async (e) => {
    e.preventDefault();

    const salt = bcrypt.genSaltSync(10);
    const hashedPword = bcrypt.hashSync(pword, salt);

    const newUserData = [fname, lname, email, phone, hashedPword];
    console.log(newUserData);

    await axios
      .post("http://localhost:3001/api/register", newUserData)
      .then((response) => {
        console.log(response);
      });

    // can use below if decide to combine register and login forms
    // window.localStorage.setItem('login', JSON.stringify({email, hashedPword}))

    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setPword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const lettersOrPunctuation = /[a-zA-Z!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    if (
      emailOrPhone.includes("@") &&
      emailOrPhone.charAt(emailOrPhone.length - 4) === "."
    ) {
      console.log("valid email entered");
      // try {
      //   await axios.get(`http://localhost:3001/api/${email}`).then((res) => {
      //     if (res.data.exists()) {
      //       let hashedPword = res.data[0].columns.password;
      //       console.log("hashedPword --> ", hashedPword);

      //       if (bcrypt.compareSync(pword, hashedPword)) {
      //         console.log("login successful");
      //       } else {
      //         console.log("login failed");
      //       }
      //     } else {
      //       console.log("user does not exist");
      //     }
      //   });
      // } catch (error) {
      //   console.log(error);
      // }
    } else if (
      emailOrPhone.toString().length === 10 &&
      !lettersOrPunctuation.test(emailOrPhone)
    ) {
      console.log("valid phone number entered");
      // try {
      //   await axios.get(`http://localhost:3001/api/${phone}`).then((res) => {
      //     if (res.data.exists()) {
      //       let hashedPword = res.data[0].columns.password;
      //       console.log("hashedPword --> ", hashedPword);

      //       if (bcrypt.compareSync(pword, hashedPword)) {
      //         console.log("login successful");
      //       } else {
      //         console.log("login failed");
      //       }
      //     } else {
      //       console.log("user does not exist");
      //     }
      //   });
      // } catch (error) {
      //   console.log(error);
      // }
    } else {
      console.log("invalid input");
    }
  };

  return loading ? (
    <motion.div
      className="loading-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LoadingAnimation />
    </motion.div>
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
              {/* <br /> */}
              <div className="password-input">
                <input
                  type={visible ? "text" : "password"}
                  placeholder="password"
                  required
                  value={pword}
                  onChange={(e) => setPword(e.target.value)}
                />
                <div className="eye" onClick={() => togglePasswordVisibility()}>
                  {visible ? (
                    <VisibilityOffIcon sx={{ color: "#000000" }} />
                  ) : (
                    <VisibilityIcon sx={{ color: "#000000" }} />
                  )}
                </div>
              </div>
              {/* <br /> */}
              <button className="login-button" type="submit">
                Login
              </button>
            </form>
            <div className="switch-login-register">
              <p>Don't have an account?</p>
              <button
                className="switch-to-register"
                onClick={() => setLoginOrRegister("register")}
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
            <form className="auth-form" onSubmit={(e) => handleRegister(e)}>
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
                  value={pword}
                  onChange={(e) => setPword(e.target.value)}
                />
                <div className="eye" onClick={() => togglePasswordVisibility()}>{"   "}
                  {visible ? (
                    <VisibilityOffIcon  />
                  ) : (
                    <VisibilityIcon  />
                  )}
                </div>
              </div>
              <p>password must be between 8 and 25 characters long</p>
              <button className="register-button" type="submit">
                Register
              </button>
              {/* <br /> */}
              <button className="clear-form">Clear form</button>
            </form>
            <div className="switch-login-register">
              <p>Already have an account?</p>
              <button
                className="switch-to-login"
                onClick={() => setLoginOrRegister("login")}
              >
                Login
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Register;