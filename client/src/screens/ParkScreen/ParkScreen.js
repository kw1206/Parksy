import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import SmallScrollBounce from "../../components/SmallScrollBounce";
import { Map } from "react-map-gl";
require("./ParkScreen.css");

// const TOKEN = process.env.MAP_TOKEN;
const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json";

const ParkScreen = () => {
  const { id } = useParams();
  const [park, setPark] = useState({});
  const [activityIDs, setActivityIDs] = useState([]);
  const [activities, setActivities] = useState([]);
  const [viewState, setViewState] = useState({});
  const [toDo, setToDo] = useState([]);
  const [toSee, setToSee] = useState([]);

  useEffect(() => {
    const fetchPark = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/parks/${id}`);
        setPark(res.data[0]);
        setViewState({
          latitude: res.data[0].latitude,
          longitude: res.data[0].longitude,
          zoom: Math.round(res.data[0].area / 10),
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPark();

    const fetchActivities = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/parks/${id}/activities`
        );
        setActivities(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActivities();
}, [id]);

useEffect(() => {
    const getActivityDetails = () => {
      const toDoActivities = activities.filter(activity => activity.do === 1);
      setToDo(toDoActivities);
      const toSeeActivities = activities.filter(activity => activity.see === 1);
      setToSee(toSeeActivities);
    };
    getActivityDetails();
}, [activities])

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="park-banner">
        <img
          className="park-banner-image"
          alt={`${park.park_name}`}
          src={park.photo}
        />
        <div className="park-banner-copy">
          <motion.p className="park-banner-title">{park.park_name}</motion.p>
          <p className="park-banner-state">{park.state}</p>
          <SmallScrollBounce />
        </div>
      </div>
      <div className="park-copy">
        <div className="park-info-header">
          <p>Explore {park.park_name}</p>
        </div>
        <div className="park-info-container">
          <div className="park-facts">
            <p id="about-park">About</p>
            <motion.p>{park.desc}</motion.p>
            <p>
              {park.state} ({park.latitude}, {park.longitude})
            </p>
            <p>Established {park.est}</p>
            <p>
              Visit the <a href={park.url}>official site</a>
            </p>
            {/* <Map
                initalViewState={viewState}
                mapStyle={MAP_STYLE}
                mapboxAccessToken={TOKEN}
                ></Map> */}
          </div>
          <div className="park-visit">
            <p>Visit</p>
            <p>Recommended stay: {park.rec_stay}</p>
            <p>Things to do</p>
            <ul>
              {toDo.map((el) => (
                <li key={(el.activity_id)}>{el.activity}</li>
              ))}
            </ul>
            <p>Things to see</p>
            <ul>
              {toSee.map((el) => (
                <li key={(el.activity_id)}>{el.activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ParkScreen;
