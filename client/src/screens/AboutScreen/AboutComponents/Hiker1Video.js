import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import hiker1 from "../../../assets/videos/hiker1.mp4";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import HikingIcon from "@mui/icons-material/Hiking";
import { Link } from "react-router-dom";

const Hiker1Video = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "start end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <>
      <motion.div
        ref={targetRef}
        style={{ opacity }}
        className="video-container"
      >
        <video className="scroll-video" src={hiker1} autoPlay loop muted />
        <div className="video-copy">
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
          >
            get going
          </motion.p>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
            className="scroll-icon"
          >
            <motion.div
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              transition={{
                type: "tween",
                duration: 1.5,
                delay: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <KeyboardDoubleArrowDownIcon fontSize="inherit" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <div className="between-text">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", duration: 2 }}
        >
          <HikingIcon fontSize="inherit" />
          <div className="text">
            <h1>Start here</h1>
            <p>
              Are you ready to hit the trail? Click the icon below to start
              planning your National Park visit.
            </p>
          </div>
          <Link to="/Home">
            <motion.div
              whileHover={{ scale: 1.5 }}
              className="scroll-icon-small"
            >
              <PlayCircleFilledIcon fontSize="inherit" color="inherit" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Hiker1Video;
