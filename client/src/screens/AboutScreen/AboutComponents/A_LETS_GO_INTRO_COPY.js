import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import SmallScrollBounce from "../../../components/SmallScrollBounce";
import { Link } from "react-router-dom";
import hex from "../../../assets/colors";
import ParkIcon from "@mui/icons-material/Park";

const A_LETS_GO_INTRO_COPY = () => {
  return (
<div className="between-text">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", duration: 2 }}
          className="between-text-content"
        >
          <div className="text">
            <ParkIcon
              sx={{ fontSize: "1em", padding: "40px", margin: "auto" }}
            />
            <div className="header">
              <h1>
                The United States is home
                <br /> to 63 National Parks
              </h1>
            </div>
            <div className="body-content">
              <p>
                With so much to see and do, right now is always the right time
                to visit the right US National Park for you.
              </p>
              <p>
                Every season offers visitors a different experience. Depending
                on your travel needs and goals, figuring out when and where to
                visit can be a challenge.
              </p>
              <p>Let us help you get there. Keep scrolling to find out how.</p>
            </div>
            <Link to="/Explore" className="about-link-button">
              <motion.div
                className="about-link-hover"
                whileHover={{
                  background: `linear-gradient(to top right, ${hex.darkBlue}, ${hex.blue})`,
                }}
              >
                <h2>Explore parks</h2>
              </motion.div>
            </Link>
          </div>
          <SmallScrollBounce />
        </motion.div>
      </div>  )
}

export default A_LETS_GO_INTRO_COPY