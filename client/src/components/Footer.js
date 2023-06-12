import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <>
      <div className="footer">
        Footer
        <a>
          <GitHubIcon />
        </a>
        <a>
          <EmailIcon />
        </a>
      </div>
    </>
  );
};

export default Footer;
