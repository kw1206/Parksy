import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
require("./footer.css")

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/Contact" className="link-to-contact">
        <EmailIcon />
        <p>Contact</p>
      </Link>
    </div>
  );
};

export default Footer;
