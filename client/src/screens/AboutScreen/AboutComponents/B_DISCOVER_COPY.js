import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MapIcon from "@mui/icons-material/Map";
import { Link } from "react-router-dom";
import { hex } from "../../../assets/colors";
import SmallScrollBounce from "../../../components/SmallScrollBounce";

const B_DISCOVER_COPY = () => {
  return (
    <div className="between-text">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "tween", duration: 2 }}
        className="between-text-content"
      >
        <div className="text">
          <MapIcon sx={{ fontSize: "1em", padding: "40px", margin: "auto" }} />
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
              the National Park Service, weather and travel reports, and social
              media, we help you build an optimized roadmap to reach your
              National Park destination.
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
        <SmallScrollBounce />
      </motion.div>
    </div>
  );
};

export default B_DISCOVER_COPY;
