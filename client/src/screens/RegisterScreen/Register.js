import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";
require("./Register.css");

const Register = () => {
  const [loading, setLoading] = useState(true);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pword, setPword] = useState("");

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

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUserData = [fname, lname, email, phone, pword];
    console.log(newUserData);

    await axios
      .post("http://localhost:3001/api/register", newUserData)
      .then((response) => {
        console.log(response);
      });

    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setPword("");
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
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={(e) => handleRegister(e)}>
          <label>first name</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <br />
          <label>last name</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <br />
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label>password</label>
          <input
            type="password"
            value={pword}
            onChange={(e) => setPword(e.target.value)}
          />
          <br />
          <button className="register-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Register;
