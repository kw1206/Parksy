import React from "react";
import under_construction from "../../src/assets/icons/under_construction.png";

const UnderConstruction = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>This page is a work in progress</h2>
      <br/>
      <br/>
      <img
        src={under_construction}
        style={{ width: "150px" }}
        alt="under construction"
      />
    </div>
  );
};

export default UnderConstruction;
