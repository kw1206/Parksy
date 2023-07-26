import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Hiker2Video from "./ExploreComponents/Hiker2Video";
import { TextField } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import ParkCard from "./ExploreComponents/ParkCard";
import LoadingAnimation from "../../components/LoadingAnimation";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
require("./Explore.css");

const icon = (
  <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "black" }} />
);
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Explore = () => {
  const [onScreenComponent, setOnScreenComponent] = useState(["loading"]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOnScreenComponent(["default"]);
    }, 3000);
  });

  const [parks, setParks] = useState([]);
  const [filteredParks, setFilteredParks] = useState([]);
  const [autoResultsParks, setAutoResultsParks] = useState([]);
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [autoResultsActivities, setAutoResultsActivities] = useState([]);

  // fetch parks data
  useEffect(() => {
    const fetchAllParks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/parks");
        setParks(res.data);
        setFilteredParks(res.data);
        setAutoResultsParks(res.data.map((park) => park.park_name).sort());
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllParks();
  }, []);

  // fetch activity data
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/activities");
        setActivities(res.data);
        setFilteredActivities(res.data);
        setAutoResultsActivities(
          res.data.map((activities) => activities.activity).sort()
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchActivities();
  }, []);

  const filterParks = (e) => {
    console.log("text input --> ", e.target.value);
    const filteredSearch = parks.filter((park) =>
      park.park_name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setFilteredParks(filteredSearch);
  };

  // const handleAddKeyword = (event, value) => {
  //   props.setKeywords([...props.keywords, value]);
  //   console.log("keywords --> ", props.keywords);
  // };

  return (
    <AnimatePresence>
      {onScreenComponent[0] === "loading" ? (
        <LoadingAnimation />
      ) : (
        <motion.div
          className="page-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hiker2Video />
          <motion.div
            className="explore-intro-copy"
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 2 }}
          >
            <h1>Discover places to explore</h1>
            <p>
              Browse summaries of all 63 U.S. National Parks at the links below.
              <br />
              Refine your destination options by filtering for criteria that
              suits your needs and goals.
            </p>
            <div>
              <h2>See the big picture</h2>
              <p>Click <Link to="/map">here</Link> to view all parks on an interactive map.</p>
            </div>

            <KeyboardDoubleArrowDownIcon sx={{ fontSize: "3rem" }} />
          </motion.div>

          <div className="explore-bar">
            <div className="search-box">
              <p>Search by park name</p>
              <div className="search-field">
                <Autocomplete
                  className="autocomplete-field"
                  // sx={{ width: '225px' }}
                  options={autoResultsParks}
                  renderInput={(params) => (
                    <TextField
                      sx={{
                        color: "black", // Set text color of the text box
                        backgroundColor: "white", // Set background color of the text box
                        borderRadius: "5px",
                      }}
                      {...params}
                      onChange={(e) => filterParks(e)}
                    />
                  )}
                />
                {/* <div className="search-button">
              <SearchIcon />
            </div> */}
              </div>
            </div>
            <div className="search-box">
              <p>Filter by activity</p>
              <div className="search-field">
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  // onChange={(event, value) => handleAddKeyword(event, value)}
                  options={autoResultsActivities}
                  disableCloseOnSelect
                  limitTags={10}
                  getOptionLabel={(option) => option.activity}
                  renderOption={(props, option, { selected }) => (
                    <li
                      {...props}
                      className="keywordOption"
                      style={{
                        color: selected ? "white" : "black",
                        backgroundColor: selected ? "#065749" : "white",
                      }}
                    >
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{
                          marginRight: 8,
                          borderWidth: "2px",
                          borderColor: "black",
                        }}
                        checked={selected}
                      />
                      {option.activity}
                    </li>
                  )}
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "5px",
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Activities"
                      sx={{ color: "black" }}
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
            {filteredParks.map((park) => (
              <ParkCard park={park} key={park.id} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Explore;
