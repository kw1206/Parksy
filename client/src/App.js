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
import Auth0ProviderWithHistory from "./Auth0Provider";

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div className="App">
        <div className="AppContent">
          <ResponsiveAppBar />
          <AnimatedRoutes />
        </div>
        {/* <Footer /> */}
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
