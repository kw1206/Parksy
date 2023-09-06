import React, { useState, useEffect } from "react";
import axios from "axios";
// mui form imports
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
// date picker imports
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Autocomplete } from "@mui/material";
import { FormGroup, FormControl, FormLabel, InputLabel } from "@mui/material";
require("../ParkReviewScreen.css");

const BasicReview = (params) => {
  const {
    park,
    tripStart,
    tripEnd,
    overallRating,
    setPark,
    setTripStart,
    setTripEnd,
    setOverallRating,
    paginate,
  } = params;

  const [allParks, setAllParks] = useState([]);
  const [selectedPark, setSelectedPark] = useState("");

  useEffect(() => {
    const fetchAllParks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/parks");
        const parkNames = res.data.map((park) => park.park_name);
        setAllParks(parkNames);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllParks();
  }, []);

  return allParks.length > 0 ? (
    <div
      className="review-section-container"
      style={{ boxShadow: "0px 0px 300px 50px #0d6f5c" }}
    >
      <div
        style={{
          backgroundColor: "#0d6f5c",
          padding: "20px",
          borderRadius: "4px",
        }}
      >
        <div className="review-header">Overall Experience</div>
        <p>Share the basics of your trip</p>
      </div>
      <table>
        <tbody>
          <tr className="basic-tr">
            <td>Park</td>
            <td>
              <FormControl>
                <Autocomplete
                  inputValue={selectedPark}
                  options={allParks}
                  sx={{ width: "300px" }}
                  onChange={(e) => {
                    setPark(e.target.textContent);
                    setSelectedPark(e.target.textContent);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="National Park"
                      inputProps={{
                        ...params.inputProps,
                        style: { color: "white" }, // Apply the text color here as well
                      }}
                      // label={<span className="form-label">park visited</span>}
                    />
                  )}
                />
              </FormControl>
            </td>
          </tr>
          <tr className="basic-tr">
            <td>Trip dates</td>
            <td>
              <div className="date-picker-div">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <FormControl>
                    <DatePicker
                      required
                      // label={<span className="form-label">start</span>}
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                      }}
                      // placeholder="start"
                      onChange={(newStart) => setTripStart(newStart)}
                      value={tripStart}
                    />
                  </FormControl>
                  <p style={{ padding: "5px" }}>to</p>
                  <FormControl>
                    <DatePicker
                      required
                      // label={<span className="form-label">end</span>}
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                      }}
                      onChange={(newEnd) => setTripEnd(newEnd)}
                      value={tripEnd}
                    />
                  </FormControl>
                </LocalizationProvider>
              </div>
            </td>
          </tr>
          <tr className="basic-tr">
            <td>Overall rating</td>
            <td>
              <FormControl>
                <Rating
                  value={Number(overallRating)}
                  label={<span className="form-label">rating</span>}
                  onChange={(e) => {
                    setOverallRating(Number(e.target.value));
                  }}
                />
              </FormControl>
            </td>
          </tr>
        </tbody>
      </table>
      {park && tripStart && tripEnd && overallRating && (
        <div className="back-next-buttons" style={{ justifyContent: "center" }}>
          <div
            onClick={() => paginate(1)}
            className="next-button"
            id="basic-next"
          >
            Next
          </div>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default BasicReview;
