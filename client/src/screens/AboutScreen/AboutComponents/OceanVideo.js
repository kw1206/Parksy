import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import MapIcon from "@mui/icons-material/Map";
import ocean1 from "../../../assets/videos/ocean1.mp4";
import { Link } from "react-router-dom";
import hex from "../../../assets/colors";

const OceanVideo = () => {
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
        <video className="scroll-video" src={ocean1} autoPlay loop muted />
        <div className="video-copy">
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
          >
            discover
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
          className="between-text-content"
        >
          <div className="text">
            <MapIcon
              sx={{ fontSize: "1em", padding: "40px", margin: "auto" }}
            />
            <div className="header">
              <h1>Find your way</h1>
            </div>
            <div className="body-content">
              <p>
                Time, weather, distance, budget, recreation, and visitation
                activity have huge impacts on a traveler's experience. Balancing
                these factors and planning ahead can help ensure your National
                Park visit aligns with your travel priorities. We provide the
                tools to help you find your way.
              </p>
              <p>
                By distilling data compiled from a variety of sources, including
                the National Park Service, weather and travel reports, and
                social media, we help you build an optimized roadmap to reach
                your National Park destination.
              </p>
            </div>
            <Link to="/Guide" className="about-link-button">
              <motion.div
                className="about-link-hover"
                whileHover={{
                  background: `linear-gradient(to right, ${hex.purple}, ${hex.pink})`,
                }}
              >
                <h2>Get guidance</h2>
              </motion.div>
            </Link>
          </div>
          <motion.div className="scroll-icon-small" whileHover={{ scale: 1.3 }}>
            <KeyboardDoubleArrowDownIcon fontSize="inherit" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default OceanVideo;
