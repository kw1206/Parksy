import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { getWeeksBetweenDates } from "./helper.js";
import BasicReview from "./ParkReviewComponents/BasicReview.js";
import CompanionsReview from "./ParkReviewComponents/CompanionsReview.js";
import RaftingVideo from "./ParkReviewComponents/RaftingVideo.js";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ActivityReview from "./ParkReviewComponents/ActivityReview.js";
import ActivityDetailsreview from "./ParkReviewComponents/ActivityDetailsreview.js";
import AdviceReview from "./ParkReviewComponents/AdviceReview.js";
import Slider from "@mui/material/Slider";
import ReviewAndSubmit from "./ParkReviewComponents/ReviewAndSubmit.js";

require("./ParkReviewScreen.css");
require("./MUIstyling.css");

const ParkReviewScreen = () => {
  const ref = useRef(null);
  const [park, setPark] = useState("");
  const [parkID, setParkID] = useState(null);
  const [tripStart, setTripStart] = useState(null);
  const [tripEnd, setTripEnd] = useState(null);
  const [overallRating, setOverallRating] = useState(null);
  const [companions, setCompanions] = useState(null);
  const [adults, setAdults] = useState(1);
  const [adultsAges, setAdultsAges] = useState([0, 0]);
  const [kids, setKids] = useState(0);
  const [kidsAges, setKidsAges] = useState([0, 0]);
  const [fitnessLevel, setFitnessLevel] = useState(null); // TODO
  const [tripActivityLevel, setTripActivityLevel] = useState(null); // TODO
  const [activities, setActivities] = useState([]); // TODO
  // TODO individual activies reviews
  const [advice1, setAdvice1] = useState({ category: "", advice: "" });
  const [advice2, setAdvice2] = useState({ category: "", advice: "" });
  const [advice3, setAdvice3] = useState({ category: "", advice: "" });
  const [[page, direction], setPage] = useState([0, 0]);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleClickOpen = () => {
    console.log("open dialog");
    setOpenConfirm(true);
  };

  const handleClose = () => {
    console.log("close dialog");
    setOpenConfirm(false);
  };

  const seeTripData = (e) => {
    e.preventDefault();
    const tripData = {
      park: park,
      tripStart: tripStart.$d,
      tripEnd: tripEnd.$d,
      duration: Math.ceil(
        Math.abs(tripStart - tripEnd) / (24 * 60 * 60 * 1000)
      ),
      weeks: getWeeksBetweenDates(tripStart, tripEnd),
      overallRating: Number(overallRating),
      companions: companions,
      adults:
        adults === 0 && companions === "solo"
          ? 1
          : adults === 0 && companions === "couple"
          ? 2
          : adults,
      adultsAges: adultsAges,
      kids: kids,
      kidAges: kidsAges,
      fitness_level: fitnessLevel,
      tripActivityLevel: tripActivityLevel,
      activities: activities,
      advice1: advice1,
      advice2: advice2,
      advice3: advice3,
    };
    console.log(tripData);
    getWeeksBetweenDates(tripStart, tripEnd);
  };

  const enterTrip = async () => {
    const trip = {
      user_id: 1,
      park_id: parkID,
      trip_start: tripStart.$d,
      trip_end: tripEnd.$d,
      duration: Math.ceil(
        Math.abs(tripStart - tripEnd) / (24 * 60 * 60 * 1000)
      ),
      overall_rating: overallRating,
      traveler_type: companions,
      adults: adults,
      adults_ages_low: adultsAges[0],
      adults_ages_high: adultsAges[1],
      kids: kids,
      kids_ages_low: kidsAges[0],
      kids_ages_high: kidsAges[1],
      fitness_level: fitnessLevel,
      trip_activity_level: tripActivityLevel,
      avg_week: getWeeksBetweenDates(tripStart, tripEnd),
    };

    console.log("Before setOpenConfirm(true):", openConfirm);
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/trips/add-trip",
        trip
      );
      data.res.send();
      // if (data) {
      // }
      console.log(data);
      // if (data) {
      // setOpenConfirm(true); // Set openConfirm to true if the request is successful
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tripEnd && tripEnd < tripStart) {
      alert("Make sure you have entered a valid end date for your trip.");
      setTripEnd(null);
    }
  }, [tripStart, tripEnd]);

  useEffect(() => {
    const fetchParkID = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/parks/name/${park}`
        );
        setParkID(res.data[0].park_id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchParkID();
  }, [park]);

  const scrollToNext = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction) => {
      return {
        scale: 0,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        scale: 0,
        opacity: 0,
      };
    },
  };

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
          Every time you share feedback on a National Park visit, you help other
          Parksy members make informed travel decisions.
          <br />
          <br />
          Thanks for taking a few minutes to help your fellow travelers.
        </p>
        <div>
          <h2>Start your review</h2>
        </div>

        <KeyboardDoubleArrowDownIcon
          sx={{ fontSize: "3rem" }}
          onClick={scrollToNext}
        />
      </motion.div>
      <div ref={ref} className="review-container">
        <AnimatePresence>
          <motion.div
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 1 }}
          >
            {page === 0 && (
              <BasicReview
                park={park}
                tripStart={tripStart}
                tripEnd={tripEnd}
                overallRating={overallRating}
                setPark={setPark}
                setTripStart={setTripStart}
                setTripEnd={setTripEnd}
                setOverallRating={setOverallRating}
                page={page}
                paginate={paginate}
              />
            )}

            {page === 1 && (
              <CompanionsReview
                park={park}
                companions={companions}
                setCompanions={setCompanions}
                adults={adults}
                setAdults={setAdults}
                adultsAges={adultsAges}
                setAdultsAges={setAdultsAges}
                kids={kids}
                setKids={setKids}
                kidsAges={kidsAges}
                setKidsAges={setKidsAges}
                fitnessLevel={fitnessLevel}
                setFitnessLevel={setFitnessLevel}
                tripActivityLevel={tripActivityLevel}
                setTripActivityLevel={setTripActivityLevel}
                page={page}
                paginate={paginate}
              />
            )}
            {page === 2 && (
              <ActivityReview
                park={park}
                activities={activities}
                setActivities={setActivities}
                page={page}
                paginate={paginate}
              />
            )}
            {/* {page === 3 && (
              <ActivityDetailsreview
                kids={kids}
                park={park}
                activities={activities}
                page={page}
                paginate={paginate}
              />
            )}
            {page === 4 && (
              <AdviceReview
                page={page}
                park={park}
                paginate={paginate}
                advice1={advice1}
                advice2={advice2}
                advice3={advice3}
                setAdvice1={setAdvice1}
                setAdvice2={setAdvice2}
                setAdvice3={setAdvice3}
              />
            )} */}
            {page === 3 && (
              <ReviewAndSubmit
                page={page}
                paginate={paginate}
                park={park}
                companions={companions}
                setCompanions={setCompanions}
                adults={adults}
                setAdults={setAdults}
                adultsAges={adultsAges}
                setAdultsAges={setAdultsAges}
                kids={kids}
                setKids={setKids}
                kidsAges={kidsAges}
                setKidsAges={setKidsAges}
                fitnessLevel={fitnessLevel}
                setFitnessLevel={setFitnessLevel}
                tripActivityLevel={tripActivityLevel}
                setTripActivityLevel={setTripActivityLevel}
                activities={activities}
                setActivities={setActivities}
                tripStart={tripStart}
                tripEnd={tripEnd}
                overallRating={overallRating}
                advice1={advice1}
                advice2={advice2}
                advice3={advice3}
                enterTrip={enterTrip}
              />
            )}
          </motion.div>
        </AnimatePresence>
        {/* <button
          onClick={(e) => seeTripData(e)}
          style={{ alignSelf: "baseline" }}
        >
          see trip data
        </button> */}
      </div>
      {/* <Button onClick={handleClickOpen}>open dialog</Button> */}
      <Dialog
        open={openConfirm}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Thank you for reviewing {park}!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your review will help Parsky community members travel with more
            ease, confidence, and fun. <br />
            <br /> Way to pay it forward!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus id="close-dialog">
            <Link to="/Home">Take me home</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ParkReviewScreen;
