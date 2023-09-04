import React, { useState, useEffect } from "react";
// mui form imports
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
require("../ParkReviewScreen.css");

const YourParty = (params) => {
  const {
    companions,
    setCompanions,
    adults,
    setAdults,
    adultsAges,
    setAdultsAges,
    kids,
    setKids,
    kidsAges,
    setKidsAges,
  } = params;

  return (
    <div
      className="your-party"
      style={{
        border: "2px solid red",
        height: "fit-content",
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Your party</h1>
      <div className="companion-options">
        <div
          className={
            companions === "solo"
              ? "solo-selected companion-div"
              : "companion-not-selected companion-div"
          }
          onClick={() => setCompanions("solo")}
        >
          solo
        </div>
        <div
          className={
            companions === "couple"
              ? "couple-selected companion-div"
              : "companion-not-selected companion-div"
          }
          onClick={() => setCompanions("couple")}
        >
          couple
        </div>
        <div
          className={
            companions === "family"
              ? "family-selected companion-div"
              : "companion-not-selected companion-div"
          }
          onClick={() => setCompanions("family")}
        >
          family
        </div>
        <div
          className={
            companions === "friends"
              ? "friends-selected companion-div"
              : "companion-not-selected companion-div"
          }
          onClick={() => setCompanions("friends")}
        >
          friends
        </div>
      </div>
      {companions === "couple" ? (
        <TextField
          id="outlined-basic"
          label={<span className="form-label">Adults age range</span>}
          variant="standard"
        />
      ) : companions === "family" || companions === "friends" ? (
        <>
          <Select
            label={<span className="form-label">Adults</span>}
            id="demo-simple-select-autowidth"
            value={adults > 0 ? adults : ""}
            onChange={(e) => setAdults(e.target.value)}
            inputProps={{ style: { color: "white" } }}
            autoWidth
          >
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={17}>17</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </div>
          </Select>
          <Slider
            value={adultsAges}
            label={<span className="form-label">adult age range</span>}
            onChange={(e) => setAdultsAges(e.target.value)}
            valueLabelDisplay="auto"
            min={18}
          />
          <Select
            label={<span className="form-label">kids</span>}
            value={kids > 0 ? kids : ""}
            onChange={(e) => setKids(e.target.value)}
            inputProps={{ style: { color: "white" } }}
            autoWidth
          >
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={17}>17</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </div>
          </Select>
          <Slider
            value={kidsAges}
            label={<span className="form-label">kids age range</span>}
            onChange={(e) => setKidsAges(e.target.value)}
            valueLabelDisplay="auto"
            min={0}
            max={17}
          />
        </>
      ) : (
        <></>
      )}
      <TextField
        id="outlined-basic"
        label={<span className="form-label">Fitness level</span>}
        variant="standard"
      />
    </div>
  );
};

export default YourParty;
