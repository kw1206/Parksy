import React from "react";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const LargeScrollBounce = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "tween", duration: 2, delay: 2 }}
      className="scroll-icon"
    >
      <motion.div
        className="large-scroll-bounce"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <KeyboardDoubleArrowDownIcon fontSize="inherit" />
      </motion.div>
    </motion.div>
  );
};

export default LargeScrollBounce;
