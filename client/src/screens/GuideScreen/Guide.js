import React, { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";
import Sky1 from "./GuideComponents/Sky1Video.js";
import sky1 from "../../assets/videos/sky1.mp4";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
require("./Guide.css");

const Guide = () => {
  const [loading, setLoading] = useState(true);
  const [onScreenComponent, setOnScreenComponent] = useState(["loading"]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOnScreenComponent(["default"]);
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
          <div className="guide-me-screen">
            <motion.div
              className="page-container"
              initial={{ y: 5000 }}
              animate={{ y: 0 }}
              exit={{ x: -5000 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="guide-video-container"
                initial={{ height: "50vh" }}
                animate={onScreenComponent[1] === "q1" && { height: "100vh" }}
                transition={{ duration: 2 }}
              >
                <video className="sky-video" src={sky1} autoPlay loop muted />
                <div className="video-copy">
                  <motion.p
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      onScreenComponent[1] === "q1"
                        ? { scale: 0, opacity: 0 }
                        : { scale: 1, opacity: 1 }
                    }
                    transition={{ duration: 2 }}
                  >
                    GUIDE
                  </motion.p>
                </div>
              </motion.div>
              <motion.div
                className="guide-intro-copy"
                initial={{ height: "50vh" }}
                animate={
                  onScreenComponent[1] === "q1" && { scale: 0, height: 0 }
                }
                transition={{ duration: 2 }}
              >
                <h1>Let's navigate together</h1>
                <p>
                  Tell us what kind of National Park experience you're dreaming
                  of, and we'll do the rest. <br />
                  <br />
                  Simply answer a few simple questions so we can show you which{" "}
                  <br />
                  National Park itineraries are the best match to your travel
                  goals and needs.
                  <br />
                  <br /> Press the button below to get started. .
                </p>
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="scroll-icon-small"
                >
                  <PlayCircleFilledIcon
                    onClick={() =>
                      setOnScreenComponent([...onScreenComponent, "q1"])
                    }
                    fontSize="inherit"
                    color="inherit"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="q1"
              initial={
                onScreenComponent.length === 2 ? { x: "-200%" } : { x: "200%" }
              }
              animate={onScreenComponent.length === 2 ? { x: 0 } : { x: 5000 }}
              transition={{ delay: 1, duration: 2 }}
            ></motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* <AnimatePresence>
       {onScreenComponent === "q1" && (

       )} 
      </AnimatePresence> */}
    </>
  );
};

export default Guide;
