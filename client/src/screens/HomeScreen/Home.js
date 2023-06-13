import React, { useState, useEffect, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import forest1 from "../../assets/videos/forest1.mp4";
import parksy_white from "../../assets/logos/parksy_white.png";
import { Link } from "react-router-dom";
import LoadingAnimation from "../../components/LoadingAnimation.js";
require("./Home.css");

const Home = () => {
  const [loading, setLoading] = useState(true);

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
      <div className="video-container">
        <video className="home-video" src={forest1} autoPlay loop muted />
        <div className="home-video-copy">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              welcome to
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 2 }}
            >
              <img src={parksy_white} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 2 }}
            >
              National Park planning made easy
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
              className="parksy-options"
            >
              <Link to="/Explore" className="explore-parks">
                <motion.div
                  whileHover={{
                    background:
                      "linear-gradient(to top right, #44707f, #0298c9)",
                  }}
                  className="explore-hover"
                >
                  <h2>Explore parks</h2>
                </motion.div>
              </Link>
              <Link to="/Guide Me" className="guide-me">
                <motion.div
                  whileHover={{
                    background: "linear-gradient(to right, #a376bb, #d37ad6)",
                  }}
                  className="plan-trip-hover"
                >
                  <h2>Guide me</h2>
                </motion.div>
              </Link>
              <Link to="/Plan" className="plan-your-trip">
                <motion.div
                  whileHover={{
                    background:
                      "linear-gradient(to bottom right, #ff8838, #bd523a)",
                  }}
                  className="plan-trip-hover"
                >
                  <h2>Plan your trip</h2>
                </motion.div>
              </Link>
            </motion.div>
            <Link to="/About">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 2 }}
              >
                how it works
              </motion.p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
