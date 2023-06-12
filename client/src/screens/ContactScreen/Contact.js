import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(setLoading(false), 2000);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <motion.div
        animate={!loading && { x: "-200%" }}
        exit="hidden"
        transition={{ delay: 2, duration: 1 }}
      >
        <LoadingAnimation />
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={!loading && { x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div>Contact me please!!!</div>
      </motion.div>
    </div>
  );
};

export default Contact;
