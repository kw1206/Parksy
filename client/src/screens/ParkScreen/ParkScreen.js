import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import SmallScrollBounce from "../../components/SmallScrollBounce";
import { Map } from "react-map-gl";
import { getWeeksBetweenDates } from "../ParkReviewScreen/helper";
import ParkDataViz from "./ParkScreenComponents/ParkDataViz";
require("./ParkScreen.css");

// const TOKEN = process.env.MAP_TOKEN;
const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json";

const ParkScreen = () => {
  return (
    <ParkDataViz />
  );
};

// const ParkScreen = () => {
//   const { id } = useParams();
//   const [park, setPark] = useState({});
//   const [activityIDs, setActivityIDs] = useState([]);
//   const [activities, setActivities] = useState([]);
//   const [viewState, setViewState] = useState({});
//   const [toDo, setToDo] = useState([]);
//   const [toSee, setToSee] = useState([]);
//   const [trips, setTrips] = useState([]);

//   useEffect(() => {
//     const fetchPark = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3001/api/parks/id/${id}`);
//         setPark(res.data[0]);
//         setViewState({
//           latitude: res.data[0].latitude,
//           longitude: res.data[0].longitude,
//           zoom: Math.round(res.data[0].area / 10),
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchPark();

//     const fetchActivities = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:3001/api/parks/${id}/activities`
//         );
//         setActivities(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchActivities();

//     const fetchTrips = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:3001/api/trips/park-id/${id}`
//         );
//         console.log(res.data);
//         setTrips(res.data);
//       } catch (error) {}
//     };
//     fetchTrips();
//   }, [id]);

//   useEffect(() => {
//     const getActivityDetails = () => {
//       const toDoActivities = activities.filter((activity) => activity.do === 1);
//       setToDo(toDoActivities);
//       const toSeeActivities = activities.filter(
//         (activity) => activity.see === 1
//       );
//       setToSee(toSeeActivities);
//     };
//     getActivityDetails();
//   }, [activities]);

//   return (
//     park.park_name && (
//       <motion.div
//         className="page-container"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="park-banner">
//           <img
//             className="park-banner-image"
//             alt={`${park.park_name}`}
//             src={park.photo}
//           />
//           <div className="park-banner-copy">
//             <motion.p className="park-banner-title">{park.park_name}</motion.p>
//             <p className="park-banner-state">{park.state}</p>
//             <SmallScrollBounce />
//           </div>
//         </div>
//         <div className="park-copy">
//           <div className="park-info-header">
//             <p>Explore {park.park_name}</p>
//           </div>
//           <div className="park-info-container">
//             <div className="park-facts">
//               <div
//                 style={{
//                   border: "2px solid orange",
//                   // backgroundColor: "green",
//                   width: "50%",
//                 }}
//               >
//                 {" "}
//                 <p id="about-park">About</p>
//                 <motion.p>{park.desc}</motion.p>
//                 <p>
//                   {park.state} ({park.latitude}, {park.longitude})
//                 </p>
//                 <p>Established {park.est}</p>
//                 <p>
//                   Visit the <a href={park.url}>official site</a>
//                 </p>
//               </div>
//               <div
//                 style={{
//                   border: "2px solid white",
//                   backgroundColor: "green",
//                   width: "50%",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   borderRadius: "4px",
//                   height: "500px",
//                 }}
//               >
//                 MAP TK
//               </div>
//               {/* <Map
//                 initalViewState={viewState}
//                 mapStyle={MAP_STYLE}
//                 mapboxAccessToken={TOKEN}
//                 ></Map> */}
//             </div>
//             <div className="park-facts">
//               <div>
//                 <div className="park-info-header">
//                   <p>Parksy {park.park_name}</p>
//                 </div>{" "}
//                 <div style={{ border: "2px solid white" }}>
//                   <h3>Best overall</h3>
//                   <p>
//                     The highest-rated time to visit {park.park_name} is the
//                     ___th week of the year
//                   </p>
//                   <p>During the best travel week, the weather was ___.</p>
//                   <p>During the best travel week, the crowds were ___.</p>
//                   <p>The most popular activities are ___.</p>
//                 </div>
//                 <div style={{ border: "2px solid white" }}>
//                   <h3>See other times to travel</h3>
//                   <p>..........</p>
//                 </div>
//                 <div style={{ border: "2px solid white" }}>
//                   <h3>Top Tips</h3>
//                   <p>..........</p>
//                 </div>
//               </div>
//             </div>
//             <div className="park-visit">
//               <p>Visit</p>
//               <p>Recommended stay: {park.rec_stay}</p>
//               <p>Things to do</p>
//               <ul>
//                 {toDo.map((el) => (
//                   <li key={el.activity_id}>{el.activity}</li>
//                 ))}
//               </ul>
//               <p>Things to see</p>
//               <ul>
//                 {toSee.map((el) => (
//                   <li key={el.activity_id}>{el.activity}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     )
//   );
// };

export default ParkScreen;
