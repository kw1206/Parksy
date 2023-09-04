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

const BasicTripInfo = (params) => {
  const {
    park,
    tripStart,
    tripEnd,
    rating,
    setPark,
    setTripStart,
    setTripEnd,
    setRating,
  } = params;

  const [allParks, setAllParks] = useState(null);

  useEffect(() => {
    const fetchAllParks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/parks");
        const parkNames = res.data.map((park) => park.park_name);
        setAllParks(parkNames);
        console.log(parkNames);
        // setAutoResultsParks(res.data.map((park) => park.park_name).sort());
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllParks();
  }, []);

  return (
    <div
      className="basic-trip-info"
      style={{
        border: "2px solid red",
        margin: 'auto'
        // display: "flex",
        // flexDirection: "column",
      }}
    >
      <h1>How was your National Park visit?</h1>
      <h3>Please share some basic information about your trip to begin your review.</h3>
      <table>
        <tbody>
          <tr>
            <td>Park</td>
            <td>
              <FormControl>
                <Autocomplete
                  label={<span className="form-label">park visited</span>}
                  disablePortal
                  options={allParks}
                  sx={{ width: 300 }}
                  onChange={(e) => {
                    setPark(e.target.textContent);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        style: { color: "white" }, // Apply the text color here as well
                      }}
                      label={<span className="form-label">park visited</span>}
                    />
                  )}
                />
              </FormControl>
            </td>
          </tr>
          <tr>
            <td>Trip dates</td>
            <td>
              <div className="date-picker-div">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <FormControl>
                    <DatePicker
                      required
                      label={<span className="form-label">start</span>}
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                      }}
                      onChange={(newStart) => setTripStart(newStart)}
                      value={tripStart}
                    />
                  </FormControl>
                  <FormControl>
                    <DatePicker
                      required
                      label={<span className="form-label">end</span>}
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
          <tr>
            <td>Overall rating</td>
            <td>
              <FormControl>
                <Rating
                  value={rating}
                  label={<span className="form-label">rating</span>}
                  onChange={(e) => {
                    setRating(e.target.value);
                  }}
                />
              </FormControl>
            </td>
          </tr>
        </tbody>
      </table>
      {park && tripStart && tripEnd && rating ? <button>Next</button> : null}
    </div>
  );
};

export default BasicTripInfo;
