import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import HikingIcon from "@mui/icons-material/Hiking";
import { Link } from "react-router-dom";

const D_GET_GOING_COPY = () => {
  
  return (
    <div className="between-text">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "tween", duration: 2 }}
      className="between-text-content"
    >
      <div className="text">
        <HikingIcon
          sx={{ fontSize: "1em", padding: "40px", margin: "auto" }}
        />
        <div className="header">
          <h1>Start here</h1>
        </div>
        <div className="body-content">
          <p>
            Are you ready to hit the trail? Click the icon below to start
            planning your National Park visit.
          </p>
        </div>
        <Link to="/Home">
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="scroll-icon-small"
          >
            <PlayCircleFilledIcon fontSize="inherit" color="inherit" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  </div>  )
}

export default D_GET_GOING_COPY