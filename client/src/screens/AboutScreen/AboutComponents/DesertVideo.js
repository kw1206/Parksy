import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import desert1 from "../../../assets/videos/desert1.mp4";
import { Link } from "react-router-dom";
import hex from "../../../assets/colors";

const DesertVideo = () => {
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
        <video className="scroll-video" src={desert1} autoPlay loop muted />
        <div className="video-copy">
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
          >
            adventure awaits
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
          <HourglassBottomIcon
            sx={{ fontSize: "1em", padding: "40px", margin: "auto" }}
            />
            <div className="header">
              <h1>It's time</h1>
            </div>
            <div className="body-content">
              <p>
                Adventure awaits you -- but you shouldn't wait! Time spent
                outdoors not only{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8125471/">
                  benefits our health and wellbeing
                </a>
                , it also reminds us of the urgent need to protect natural
                habitats and indigenous communities. Take care of yourself,
                nature, and your community by prioritizing time outside.
              </p>
              <p>
                Whether you're strategizing a long-term bucketlist or have a
                near-term opportunity to up and go, it's important to get
                planning. Make the most of the time you have by making a plan:
                travel now or travel later -- just not never.
              </p>
            </div>
            <Link to="/Plan" className="about-link-button">
              <motion.div
                className="about-link-hover"
                whileHover={{
                  background: `linear-gradient(to bottom right, ${hex.orange}, ${hex.rust})`,
                }}
              >
                <h2>Plan your trip</h2>
              </motion.div>
            </Link>
          </div>
          <div className="scroll-icon-small">
            <KeyboardDoubleArrowDownIcon fontSize="inherit" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DesertVideo;
