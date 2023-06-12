import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, useScroll, useTransform } from "framer-motion";
import Hiker2Video from "./ExploreComponents/Hiker2Video";
import { TextField } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import ParkCard from "./ExploreComponents/ParkCard";
import LoadingAnimation from "../../components/LoadingAnimation";
require("./Explore.css");

const Explore = () => {
  const [loading, setLoading] = useState(true);
  const [parks, setParks] = useState([]);
  const [autoResults, setAutoResults] = useState([]);

  useEffect(() => {
    const fetchAllParks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/parks");
        setParks(res.data);
        setAutoResults(res.data.map((park) => park.park_name).sort());
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchAllParks();
  }, []);

  const filterParks = (e) => {
    const filteredParks = parks.filter((park) =>
      park.park_name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setParks(filteredParks);
  };

  return (
    <div style={{overflowX: "hidden"}}>
      <motion.div
        animate={!loading && { x: "-200%" }}
        exit="hidden"
        transition={{ delay: 2, duration: 1 }}
      >
        <LoadingAnimation/>
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={!loading && { x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Hiker2Video />
        <div className="explore-intro-copy">
          <h1>Discover places to explore</h1>
          <p>
            On this page you can browse summaries of all 63 U.S. National Parks.
            <br />
            Refine your destination options by filtering for criteria that suits
            your needs and goals.
          </p>
          <div>
            <h2>See the big picture</h2>
            <p>Click here to view all parks on an interactive map.</p>
          </div>

          <KeyboardDoubleArrowDownIcon sx={{ fontSize: "3rem" }} />
        </div>

        <div className="explore-bar">
          <div className="search-box">
            <p>Search by park name</p>
            <div className="search-field">
              <Autocomplete
                className="autocomplete-field"
                sx={{ width: 300, color: "white" }}
                options={autoResults}
                renderInput={(params) => (
                  <TextField
                    sx={{ color: "white" }}
                    {...params}
                    onChange={filterParks}
                  />
                )}
              />
              <div className="search-button">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="park-card-container">
          {parks.map((park) => (
            <ParkCard park={park} key={park.id} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Explore;
