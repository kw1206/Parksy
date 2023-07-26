import React from "react";
import SmallScrollBounce from "./SmallScrollBounce";
import { Link } from "react-router-dom";
import hex from "../../../assets/colors";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { motion, useScroll, useTransform } from "framer-motion";

const C_ADVENTURE_COPY = () => {
  return (
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
        <SmallScrollBounce />
      </motion.div>
    </div>
  );
};

export default C_ADVENTURE_COPY;
