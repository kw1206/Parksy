import React from "react";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const SmallScrollBounce = () => {
  return (
      <motion.div
        className="small-scroll-bounce"
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
  );
};

export default SmallScrollBounce;
