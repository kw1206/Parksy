import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// SCREENS
import Home from "./screens/HomeScreen/Home";
import About from "./screens/AboutScreen/About";
import Plan from "./screens/PlanScreen/Plan";
import Explore from "./screens/ExploreScreen/Explore";
import Contact from "./screens/ContactScreen/Contact";
import GuideMe from "./screens/GuideMeScreen/GuideMe";
// COMPONENTS
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
// STYLING
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Plan" element={<Plan />} />
        <Route path="Explore" element={<Explore />} />
        <Route path="Guide Me" element={<GuideMe />}/>
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;