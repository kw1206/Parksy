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
        >
          <MapIcon fontSize="inherit" />
          <div className="text">
            <h1>Find your way</h1>
            <p>
              Time, weather, distance, budget, recreation, and visitation
              activity have huge impacts on a traveler's experience. Balancing
              these factors and planning ahead can help ensure your National
              Park visit aligns with your travel priorities. We provide the
              tools to help you find your way.
            </p>
            <p>
              By distilling data compiled from a variety of sources, including
              the National Park Service, weather and travel reports, and social
              media, we help you build an optimized roadmap to reach your
              National Park destination.
            </p>
            <motion.div
              className="about-link-button"
              whileHover={{
                background:
                  `linear-gradient(to bottom right, ${hex.pink}, ${hex.orange})`,
              }}
            >
              <Link to="/Guide">
                <h2>Guide</h2>
              </Link>
            </motion.div>
          </div>
          <div className="scroll-icon-small">
            <KeyboardDoubleArrowDownIcon fontSize="inherit" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default OceanVideo;
