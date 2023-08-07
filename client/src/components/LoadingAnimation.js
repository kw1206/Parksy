import React from "react";
import mountain_white from "../assets/logos/mountain_white.png";
import { motion } from "framer-motion";
import { hex } from "../assets/colors";
require("./loading.css");

const LoadingAnimation = () => {
  return (
    <motion.div
      className="loading-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-animation">
        <motion.div
          className="loading-animation-bg"
          initial={{ backgroundColor: hex.green }}
          animate={{
            background: [
              `radial-gradient(${hex.green}, ${hex.green})`,
              `radial-gradient(${hex.green}, ${hex.lightGreen})`,
              `radial-gradient(${hex.lightGreen}, ${hex.blue})`,
              `radial-gradient(${hex.blue}, ${hex.darkBlue})`,
              `radial-gradient(${hex.darkBlue}, ${hex.purple})`,
              `radial-gradient(${hex.purple}, ${hex.pink})`,
              `radial-gradient(${hex.pink}, ${hex.orange})`,
              `radial-gradient(${hex.orange}, ${hex.rust})`,
              `radial-gradient(${hex.rust}, ${hex.rust})`,
              `radial-gradient(${hex.rust}, ${hex.orange})`,
              `radial-gradient(${hex.orange}, ${hex.pink})`,
              `radial-gradient(${hex.pink}, ${hex.purple})`,
              `radial-gradient(${hex.purple}, ${hex.darkBlue})`,
              `radial-gradient(${hex.darkBlue}, ${hex.blue})`,
              `radial-gradient(${hex.blue}, ${hex.lightGreen})`,
              `radial-gradient(${hex.lightGreen}, ${hex.green})`,
              `radial-gradient(${hex.green}, ${hex.green})`,
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.img src={mountain_white} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
