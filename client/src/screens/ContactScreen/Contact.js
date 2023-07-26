import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
require("./Contact.css");

const Contact = () => {
  const nps_support =
    "https://give.nationalparks.org/site/Donation2;jsessionid=00000000.app20006b?5240.donation=form1&idb=102672453&df_id=5240&mfc_pref=T&NONCE_TOKEN=1A2A31FE40F56EA1847A6787DA8A7D08&rc=CKNPF-PROS-GOOGLE-GS-ALL-US-NONBRAND-All-18t65P&s_subsrc=23D00WWD-X0G1X&utm_campaign=2023CKADS&utm_source=ck-ad&utm_medium=Google&gclid=CjwKCAjwhJukBhBPEiwAniIcNZHMwm0_mOPtQefQ2YIsLmozwAAKP5xBYgL2PtndGlbr1Qq7tQ-TvRoCZF4QAvD_BwE";

  const linkedIn = "https://www.linkedin.com/in/kit-wallace/"
  const gitHub = "https://github.com/kw1206/Parksy"

  return (
    <div className="contact-page">
      <div>
        <div className="about-me">
          <h1>Thank you for visiting Parksy</h1>
          <br />
          <br />
          <p>
            As an avid traveler, I appreciate the importance of planning and the
            joy and excitement of seizing the moment. I created Parksy to allow
            travelers to do both, and to help them make the most of their time,
            budget, and the natural landscape. Parksy cuts through the
            overwhelming travel advice and guides on the internet and provides
            relevant information tailored to the user's goals and needs.
            <br />
            <br />
            With the climate crisis in mind, I feel a personal urgency to
            experience and do my part to protect the natural world. If you feel
            the same way, or if you're just becoming curious about National
            Parks, I hope Parksy will help you fulfill these personal goals.
            U.S. National Parks offer an opportunity to appreciate our planet
            and{" "}
            <a style={{ textDecoration: "underline" }} href={nps_support} target="_blank">
              support
            </a>{" "}
            critical ecosystems and indigenous communities. On an individual
            level, time in nature benefits our physical and mental health while
            creating lasting memories. With Parksy, I sought to create a tool
            that makes getting outside and faster and simpler.
            <br />
            <br />
            Parksy is a passion project and an opportunity for me to enhance my
            software engineering skills. I value feedback to improve this
            product and maximize the positive impact of responsible travel.
            Please reach out with any questions or comments.
            <br /> <br />
            Happy trails!
            <br /> <br />- Kit
          </p>
          <br />
          <div className="contact-icons">
            <a href={linkedIn} target="_blank"><LinkedInIcon /></a>
            <a href={gitHub} target="_blank"><GitHubIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
