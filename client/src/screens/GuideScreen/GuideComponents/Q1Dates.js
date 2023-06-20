import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

const Q1Dates = (props) => {

  return (
    <div className="custom-q">
      <h1>1. Dates</h1>
      <h2>When do you plan on traveling?</h2>

      {/* CHOOSE SPECIFIC DATES */}
      <div className="date-flexibility-box">
        <h2>"I have specific dates in mind"</h2>
        <h3>enter dates</h3>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
          <DatePicker
            label="start"
            calendars={1}
            value={props.tripStart}
            onChange={(newValue) => props.setTripStart(newValue)}
          />
          <DatePicker
            label="end"
            calendars={1}
            value={props.tripEnd}
            onChange={(newValue) => props.setTripEnd(newValue)}
          />
        </LocalizationProvider>
      </div>

      {/* CHOOSE MONTH */}
      <div className="date-flexibility-box">
        <h2>"I have a general idea"</h2>
        <h3>Select your preferred month for travel</h3>
        <select
          value={props.month || "Select month"}
          onChange={(e) => {
            props.setMonth(e.target.value);
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
          value={props.duration || "Select duration"}
          onChange={(e) => props.setDuration(e.target.value)}
        >
          <option>Select duration</option>
          <option>1-3 days</option>
          <option>3-5 days</option>
          <option>5-7 days</option>
          <option>7+ days</option>
        </select>
      </div>

      {/* CHOOSE YEAR */}
      <div className="date-flexibility-box">
        <h2>"I'm flexible"</h2>
      </div>

      <button onClick={props.setOnScreenComponent([...props.onScreenComponent, "q2"])}>save and continue</button>
    </div>
  );
};

export default Q1Dates;
