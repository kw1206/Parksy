import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import forest1 from "../../assets/videos/forest1.mp4";
import parksy_white from "../../assets/logos/parksy_white.png";
import { Link } from "react-router-dom";
import LoadingAnimation from "../../components/LoadingAnimation.js";
import hex from "../../assets/colors";
require("./Home.css");

const Home = () => {
  const [onScreenComponent, setOnScreenComponent] = useState(["loading"]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOnScreenComponent(["default"]);
    }, 3000);
  });

  return (
    <>
      <AnimatePresence>
        {onScreenComponent[0] === "loading" && (
          <motion.div
            className="loading-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingAnimation />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {onScreenComponent[0] === "default" && (
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
                <div className="intro-copy">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 2 }}
                  >
                    <img src={parksy_white} />
                  </motion.div>
                  <div className="park-planning-easy">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 2 }}
                    >
                      National Park planning made easy
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="parksy-options"
                  >
                    <Link to="/Explore" className="explore-parks">
                      <motion.div
                        whileHover={{
                          background: `linear-gradient(to top right, ${hex.darkBlue}, ${hex.blue})`,
                        }}
                        className="explore-hover"
                      >
                        <h2>Explore parks</h2>
                      </motion.div>
                    </Link>
                    <Link to="/Guide" className="guide-me">
                      <motion.div
                        whileHover={{
                          background: `linear-gradient(to right, ${hex.purple}, ${hex.pink})`,
                        }}
                        className="plan-trip-hover"
                      >
                        <h2>Get guidance</h2>
                      </motion.div>
                    </Link>
                    <Link to="/Plan" className="plan-your-trip">
                      <motion.div
                        whileHover={{
                          background: `linear-gradient(to bottom right, ${hex.orange}, ${hex.rust})`,
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
                      style={{ textDecoration: "underline" }}
                    >
                      how it works
                    </motion.p>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
