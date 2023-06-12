import React from "react";
import mountain_white from "../assets/logos/mountain_white.png";
import { motion } from "framer-motion";

const LoadingAnimation = () => {
  return (
    <div className="loading-animation">
      <motion.div
        className="loading-animation-bg"
        initial={{ backgroundColor: "#065749" }}
        animate={{
          background: [
            "radial-gradient(#065749, #065749)",
            "radial-gradient(#065749, #628e87)",
            "radial-gradient(#628e87, #0298c9)",
            "radial-gradient(#0298c9, #44707f)",
            "radial-gradient(#44707f, #a376bb)",
            "radial-gradient(#a376bb, #d37ad6)",
            "radial-gradient(#d37ad6, #ff8838)",
            "radial-gradient(#ff8838, #bd523a)",
            "radial-gradient(#bd523a, #bd523a)",
            "radial-gradient(#bd523a, #ff8838)",
            "radial-gradient(#ff8838, #d37ad6)",
            "radial-gradient(#d37ad6, #a376bb)",
            "radial-gradient(#a376bb, #44707f)",
            "radial-gradient(#44707f, #0298c9)",
            "radial-gradient(#0298c9, #628e87)",
            "radial-gradient(#628e87, #065749)",
            "radial-gradient(#065749, #065749)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.img src={mountain_white} />
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;
