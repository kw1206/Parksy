import React, { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";
import sky1 from "../../assets/videos/sky1.mp4";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Q1Dates from "./GuideComponents/Q1Dates";
import Q2Keywords from "./GuideComponents/Q2Keywords";
import Q3Activity from "./GuideComponents/Q3Activity";
import { hex } from "../../assets/colors";
require("./Guide.css");

const Guide = () => {
  // state for animation
  const [onScreenComponent, setOnScreenComponent] = useState(["loading"]);

  // date
  const [datesEntry, setDatesEntry] = useState({});
  const [dateFlexibility, setDateFlexibility] = useState("");
  const [tripDates, setTripDates] = useState([]);
  const [month, setMonth] = useState(null);
  const [duration, setDuration] = useState(null);
  const [datesPriority, setDatesPriority] = useState("");
  // keywords
  const [keywordsEntry, setKeywordsEntry] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [keywordsPriority, setKeywordsPriority] = useState("");
  // activityLevel
  const [activityLevelEntry, setActivityLevelEntry] = useState({});
  const [activity, setActivity] = useState("");
  const [activityLevelPriority, setActivityLevelPriority] = useState("");
  // weather
  const [weatherToleranceEntry, setWeatherToleranceEntry] = useState({});
  const [weatherPriority, setWeatherPriority] = useState("");
  // crowd
  const [crowdToleranceEntry, seCrowdToleranceEntry] = useState({});
  const [crowdPriority, setCrowdPrioirty] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOnScreenComponent(["default"]);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  console.log("onScreenComponent --> ", onScreenComponent);
  console.log(
    "onScreenComponent LAST INDEX --> ",
    onScreenComponent[onScreenComponent.length - 1]
  );

  // useLayoutEffect(() => {
  //   const handlePageLoad = () => {
  //     setLoading(false);
  //   };

  //   window.addEventListener("load", handlePageLoad);
  //   return () => window.removeEventListener("load", handlePageLoad);
  // }, []);

  const completeQ1Dates = () => {
    const userInput = {
      submitted: true,
      dateFlexibility: dateFlexibility, // strict, month, flexible
      tripDates: tripDates,
      month: month,
      priority: datesPriority,
    };
    console.log("userInput for dates --> ", userInput);
    setDatesEntry(userInput);
    setOnScreenComponent([...onScreenComponent, "q2"]);
  };

  const completeQ2Keywords = () => {
    const userInput = {
      submitted: true,
      keywords: [keywords],
      priority: keywordsPriority,
    };
    setKeywordsEntry(userInput);
    setOnScreenComponent([...onScreenComponent, "q3"]);
  };

  const completeQ3Activity = () => {
    const userInput = {
      submitted: true,
      activity: activity,
      priority: activityLevelPriority,
    };
    setActivityLevelEntry(userInput);
    setOnScreenComponent([...onScreenComponent, "q4"]);
  };
  return (
    <>
      {/* ////////// */}
      {/* ////////// */}
      {/* ////////// */}
      {/* LOADING */}
      {/* ////////// */}
      {/* ////////// */}
      {/* ////////// */}
      <AnimatePresence>
        {onScreenComponent[0] === "loading" && (
          <motion.div
            className="loading-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingAnimation />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {onScreenComponent[0] === "default" && (
          <div className="guide-me-screen">
            <motion.div
              className="page-container"
              initial={{ y: 5000 }}
              animate={{ y: 0 }}
              exit={{ x: -5000 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="guide-video-container"
                initial={{ height: "50vh" }}
                animate={
                  onScreenComponent[onScreenComponent.length - 1] === "q1" && {
                    height: "100vh",
                  }
                }
                transition={{ duration: 1 }}
              >
                <video className="sky-video" src={sky1} autoPlay loop muted />
                <div className="video-copy">
                  <AnimatePresence>
                    {onScreenComponent.length === 1 && (
                      <motion.p
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 1 }}
                      >
                        GUIDE
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {onScreenComponent[onScreenComponent.length - 1] ===
                      "q1" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                      >
                        <div className="custom-q">
                          <div className="qHeader">
                            <CalendarMonthIcon sx={{ fontSize: "75px" }} />
                            <h1>Dates</h1>
                            <h2>When do you plan on traveling?</h2>
                          </div>

                          <div className="date-flexibility-options">
                            {/* I HAVE SPECIFIC DATES */}
                            <motion.div
                              whileHover={
                                dateFlexibility === "strict"
                                  ? { backgroundColor: hex.blue, scale: 1.1 }
                                  : {
                                      scale: 1.1,
                                    }
                              }
                              animate={
                                dateFlexibility === "strict"
                                  ? {
                                      backgroundColor: hex.blue,
                                    }
                                  : {}
                              }
                              className="date-flexibility-box"
                              onClick={() => setDateFlexibility("strict")}
                            >
                              <h2>"I have specific dates"</h2>
                            </motion.div>

                            {/* I HAVE A GENERAL IDEA */}
                            <motion.div
                              whileHover={
                                dateFlexibility === "month"
                                  ? {
                                      backgroundColor: hex.purple,
                                      scale: 1.1,
                                    }
                                  : {
                                      scale: 1.1,
                                    }
                              }
                              animate={
                                dateFlexibility === "month"
                                  ? {
                                      backgroundColor: hex.purple,
                                    }
                                  : {}
                              }
                              className="date-flexibility-box"
                              onClick={() => setDateFlexibility("month")}
                            >
                              <h2>"I have a general idea"</h2>
                            </motion.div>

                            {/* I'M FLEXIBLE */}
                            <motion.div
                              whileHover={
                                dateFlexibility === "year"
                                  ? {
                                      backgroundColor: hex.pink,
                                      scale: 1.1,
                                    }
                                  : {
                                      scale: 1.1,
                                    }
                              }
                              animate={
                                dateFlexibility === "year"
                                  ? {
                                      backgroundColor: hex.pink,
                                    }
                                  : {}
                              }
                              className="date-flexibility-box"
                              onClick={() => setDateFlexibility("year")}
                            >
                              <h2>"I'm flexible"</h2>
                            </motion.div>
                          </div>

                          <div className="button-div">
                            <motion.div
                              initial={{ opacity: 0, borderRadius: "25px" }}
                              whileHover={
                                dateFlexibility === "strict"
                                  ? { backgroundColor: hex.blue }
                                  : dateFlexibility === "month"
                                  ? { backgroundColor: hex.purple }
                                  : { backgroundColor: hex.pink }
                              }
                              whileTap={{ scale: 1.1 }}
                              animate={
                                dateFlexibility !== "" && {
                                  backgroundColor: "#000000",
                                  // border: "2px solid white",
                                  borderRadius: "25px",
                                  opacity: 1,
                                }
                              }
                              onClick={
                                dateFlexibility === "strict"
                                  ? () =>
                                      setOnScreenComponent([
                                        ...onScreenComponent,
                                        "strict",
                                      ])
                                  : dateFlexibility === "month"
                                  ? () =>
                                      setOnScreenComponent([
                                        ...onScreenComponent,
                                        "month",
                                      ])
                                  : () =>
                                      setOnScreenComponent([
                                        ...onScreenComponent,
                                        "year",
                                        "q2",
                                      ])
                              }
                            >
                              <h2 className="save-continue">continue</h2>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CHOOSE DATES */}
                  <AnimatePresence>
                    {onScreenComponent[onScreenComponent.length - 1] ===
                      "strict" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                      >
                        <div className="custom-q">
                          <div className="qHeader">
                            <CalendarMonthIcon sx={{ fontSize: "75px" }} />
                            <h2>"I have specific dates"</h2>
                          </div>
                          <h3>enter dates</h3>
                          <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            adapterLocale="en"
                          >
                            <DatePicker
                              label="start"
                              calendars={1}
                              value={tripDates[0]}
                              onChange={(newValue) => setTripDates([newValue])}
                            />
                            <DatePicker
                              label="end"
                              calendars={1}
                              value={tripDates[1]}
                              onChange={(newValue) =>
                                setTripDates([...tripDates, newValue])
                              }
                            />
                          </LocalizationProvider>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CHOOSE MONTH + DURATION */}
                  {/* <AnimatePresence>
                          {dateFlexibility === "month" && (
                            <motion.div
                              inital={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              // exit={{ scale: 0 }}
                              transition={{ duration: 0.5 }}
                              className="enter-dates"
                            >
                              <h3>Select your preferred month for travel</h3>
                              <select
                                value={month || "Select month"}
                                onChange={(e) => {
                                  setMonth(e.target.value);
                                }}
                              >
                                <option>Select month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                              </select>
                              <h3>Select duration of your trip</h3>
                              <select
                                value={duration || "Select duration"}
                                onChange={(e) => setDuration(e.target.value)}
                              >
                                <option>Select duration</option>
                                <option>1-3 days</option>
                                <option>3-5 days</option>
                                <option>5-7 days</option>
                                <option>7+ days</option>
                              </select>
                            </motion.div>
                          )}
                        </AnimatePresence> */}
                </div>
              </motion.div>

              <AnimatePresence>
                {!onScreenComponent[1] && (
                  <motion.div
                    className="guide-intro-copy"
                    initial={{ y: 0 }}
                    exit={{ y: "201%", scale: 0, height: "0vh" }}
                    transition={{ duration: 1 }}
                  >
                    <h1>Let's navigate together</h1>
                    <p>
                      Tell us what kind of National Park experience you're
                      dreaming of, and we'll do the rest. <br />
                      <br />
                      Simply answer a few simple questions so we can show you
                      which <br />
                      National Park itineraries are the best match to your
                      travel goals and needs.
                      <br />
                      <br /> Press the button below to get started. .
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="scroll-icon-small"
                    >
                      <PlayCircleFilledIcon
                        onClick={() =>
                          setOnScreenComponent([...onScreenComponent, "q1"])
                        }
                        fontSize="inherit"
                        color="inherit"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Guide;
