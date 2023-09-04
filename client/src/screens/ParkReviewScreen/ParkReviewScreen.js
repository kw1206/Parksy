import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// mui form imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
// date picker imports
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { set } from "react-hook-form";
import { getWeeksBetweenDates } from "./helper.js";
import { FormGroup, FormControl, FormLabel, InputLabel } from "@mui/material";
import BasicTripInfo from "./ParkReviewComponents/BasicTripInfo.js";
import YourParty from "./ParkReviewComponents/YourParty.js";
import RaftingVideo from "./ParkReviewComponents/RaftingVideo.js";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
require("./ParkReviewScreen.css");

const ParkReviewScreen = () => {
  const [park, setPark] = useState(null);
  const [tripStart, setTripStart] = useState(null);
  const [tripEnd, setTripEnd] = useState(tripStart);
  const [rating, setRating] = useState(0);
  const [companions, setCompanions] = useState(null);
  const [adults, setAdults] = useState(0);
  const [adultsAges, setAdultsAges] = useState([18, 100]);
  const [kids, setKids] = useState(0);
  const [kidsAges, setKidsAges] = useState([0, 17]);

  const seeTripData = (e) => {
    e.preventDefault();
    const tripData = {
      park: park,
      tripStart: {
        month: tripStart.$M + 1,
        day: tripStart.$D,
        year: tripStart.$y,
      },
      tripEnd: { month: tripEnd.$M + 1, day: tripEnd.$D, year: tripEnd.$y },
      duration: Math.ceil(
        Math.abs(tripStart - tripEnd) / (24 * 60 * 60 * 1000)
      ),
      weeks: getWeeksBetweenDates(tripStart, tripEnd),
      rating: Number(rating),
      companions: companions,
      adults:
        adults === 0 && companions === "solo"
          ? 1
          : adults === 0 && companions === "couple"
          ? 2
          : adults,
      adultsAges: adultsAges,
      kids: kids,
      kisAges: kidsAges,
    };
    console.log(tripData);
    getWeeksBetweenDates(tripStart, tripEnd);
  };

  useEffect(() => {
    if (tripEnd && tripEnd < tripStart) {
      alert("Make sure you have entered a valid end date for your trip.");
      setTripEnd(null);
    }
    console.log("tripStart -->", tripStart);
    console.log("tripEnd -->", tripEnd);
  }, [tripStart, tripEnd]);

  return (
    <div className="page-container">
      <RaftingVideo />
      <motion.div
        className="explore-intro-copy"
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 2 }}
      >
        <h1>Share your experience with the Parksy community</h1>
        <p>
          Parksy users want to hear about your trip!
          <br />
          <br />
          Every time you share your feedback on a National Park visit, you help
          other Parksy members make informed travel decisions.
          <br />
          <br />
          Thanks for taking a few minutes to help your fellow travelers.
        </p>
        <div>
          <h2>Start your review</h2>
        </div>

        <KeyboardDoubleArrowDownIcon sx={{ fontSize: "3rem" }} />
      </motion.div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
          border: "2px solid blue",
        }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <FormGroup>
            <BasicTripInfo
              park={park}
              tripStart={tripStart}
              tripEnd={tripEnd}
              rating={rating}
              setPark={setPark}
              setTripStart={setTripStart}
              setTripEnd={setTripEnd}
              setRating={setRating}
            />

            <YourParty
              companions={companions}
              setCompanions={setCompanions}
              adults={adults}
              setAdults={setAdults}
              adultsAges={adultsAges}
              setAdultsAges={setAdultsAges}
              kids={kids}
              setKids={setKids}
              kidsAges={setKidsAges}
            />
            <TextField
              id="outlined-basic"
              label={
                <span className="form-label">
                  Three words to describe your trip
                </span>
              }
              variant="standard"
            />
            <TextField
              id="outlined-basic"
              label={<span className="form-label">Advice</span>}
              variant="standard"
            />
          </FormGroup>
        </Box>

        <button onClick={(e) => seeTripData(e)}>see trip data</button>
      </div>
    </div>
  );
};

export default ParkReviewScreen;
