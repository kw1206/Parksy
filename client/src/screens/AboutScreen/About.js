import React, { useEffect, useState, useRef } from "react";
import A_LETS_GO_INTRO from "./AboutComponents/A_LETS_GO_INTRO";
import B_DISCOVER from "./AboutComponents/B_DISCOVER";
import C_ADVENTURE from "./AboutComponents/C_ADVENTURE";
import D_GET_GOING from "./AboutComponents/D_GET_GOING";
import { AnimatePresence, motion } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";
import A_LETS_GO_INTRO_COPY from "./AboutComponents/A_LETS_GO_INTRO_COPY";
import B_DISCOVER_COPY from "./AboutComponents/B_DISCOVER_COPY";
import C_ADVENTURE_COPY from "./AboutComponents/C_ADVENTURE_COPY";
import D_GET_GOING_COPY from "./AboutComponents/D_GET_GOING_COPY";
require("./About.css");

const About = () => {
  const [onScreenComponent, setOnScreenComponent] = useState(["loading"]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOnScreenComponent(["default"]);
    }, 3000);
  });

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
            <div className="about">
              <A_LETS_GO_INTRO />
              <A_LETS_GO_INTRO_COPY />
              <B_DISCOVER />
              <B_DISCOVER_COPY />
              <C_ADVENTURE />
              <C_ADVENTURE_COPY />
              <D_GET_GOING />
              <D_GET_GOING_COPY />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
