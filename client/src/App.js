import React from "react";
// COMPONENTS
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import AnimatedRoutes from "./components/AnimatedRoutes";
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
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
