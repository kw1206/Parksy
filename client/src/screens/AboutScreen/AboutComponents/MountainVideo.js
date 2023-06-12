import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ParkIcon from "@mui/icons-material/Park";
import mountain1 from "../../../assets/videos/mountain1.mp4";

const MountainVideo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <motion.div
        ref={targetRef}
        style={{ opacity }}
        className="video-container"
      >
        <video className="scroll-video" src={mountain1} autoPlay loop muted />
        <div className="video-copy">
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
          >
            let's go
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
          <ParkIcon fontSize="inherit" />
          <div className="text">
            <h1>
              The United States is home
              <br />
              to 63 National Parks
            </h1>
            <p>
              With so much to see and do, right now is always the right time to
              visit the right US National Park for you.
            </p>
            <p>
              Every season offers visitors a different experience. Depending
              on your travel needs and goals, figuring out when and where
              to visit can be a challenge.
            </p>
            <p>Let us help you get there. Keep scrolling to find out how.</p>
          </div>
          <div className="scroll-icon-small">
            <KeyboardDoubleArrowDownIcon fontSize="inherit" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default MountainVideo;
