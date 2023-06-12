import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParkCard = ({ park }) => {
  return (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="park-card"
      key={park.park_id}
    >
      <motion.img
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 1 }}
        src={park.photo}
      />
      <div className="park-card-info">
        <h2>{park.park_name}</h2>
        <h3>{park.state}</h3>
      </div>
    </motion.div>
  );
};

export default ParkCard;
