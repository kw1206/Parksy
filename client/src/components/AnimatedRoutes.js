import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// SCREENS
import Home from "../screens/HomeScreen/Home";
import About from "../screens/AboutScreen/About";
import Plan from "../screens/PlanScreen/Plan";
import Explore from "../screens/ExploreScreen/Explore";
import Contact from "../screens/ContactScreen/Contact";
import Guide from "../screens/GuideScreen/Guide";
import Auth from "../screens/AuthScreen/Auth";

import { AnimatePresence } from "framer-motion";
import UnderConstruction from "../screens/UnderConstruction";
import ParkScreen from "../screens/ParkScreen/ParkScreen";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Plan" element={<UnderConstruction />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Guide" element={<UnderConstruction />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Auth" element={<UnderConstruction />}/>
        <Route path="/map" element={<UnderConstruction />}/>
        <Route path="/parks/:id" element={<ParkScreen />}/>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
