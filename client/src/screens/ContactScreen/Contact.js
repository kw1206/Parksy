import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";
require("./Contact.css");
const Contact = () => {
  return (
    <div className="contact-page">
      {/* <motion.div
        animate={!loading && { x: "-200%" }}
        exit="hidden"
        transition={{ delay: 2, duration: 1 }}
      >
        <LoadingAnimation />
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={!loading && { x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      > */}
      <div>
        <div className="about-me">
          <h1>Thank you for visiting Parksy</h1>
          <br />
          <br />
          <p>
            I created Parksy because I am an avid traveler who loves planning
            ahead as much as seizing the moment. I strive to make the most of my
            time, budget, and the landscape around me, which requires thoughtful
            analysis of a number of factors to ensure the best travel
            experience. From person to person and even from trip to trip, every
            traveler has a different goals and needs. With Parksy, I have set
            out to build a tool that helps cut through the overwhelming number
            of travel guides and advice so you can easily access the information
            that is most relevant to you.
            <br />
            <br />
            With the climate crisis looming, I feel a personal urgency to see
            and experience the natural world as much as I can. I believe
            visiting (and{" "}
            <a style={{textDecoration: "underline"}} href="https://give.nationalparks.org/site/Donation2;jsessionid=00000000.app20006b?5240.donation=form1&idb=102672453&df_id=5240&mfc_pref=T&NONCE_TOKEN=1A2A31FE40F56EA1847A6787DA8A7D08&rc=CKNPF-PROS-GOOGLE-GS-ALL-US-NONBRAND-All-18t65P&s_subsrc=23D00WWD-X0G1X&utm_campaign=2023CKADS&utm_source=ck-ad&utm_medium=Google&gclid=CjwKCAjwhJukBhBPEiwAniIcNZHMwm0_mOPtQefQ2YIsLmozwAAKP5xBYgL2PtndGlbr1Qq7tQ-TvRoCZF4QAvD_BwE">
              supporting
            </a>
            ) U.S. National Parks is an important way to deepen our appreciation
            for our planet and motivate us into action to protect critical
            ecosystems and inigenous communities. What's more is that doing so
            is good for us as individuals: good for our physical health, mental
            health, and good for making amazingly fun memories.
            <br />
            <br />
            Parksy is a passion project I have undertaken as a way for
            sharpening my software engineering skillset. I eagerly welcome any
            and all feedback to improve this product and amplify the positive impact of responsibly
            visiting U.S. National Parks. Please contact me with any questions
            or comments. <br /> <br />
            Happy trails!
          </p>
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default Contact;
