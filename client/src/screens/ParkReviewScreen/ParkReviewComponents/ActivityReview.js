import React, { useState, useEffect } from "react";
import axios from "axios";
// mui form imports
import Chip from "@mui/material/Chip";

import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Autocomplete } from "@mui/material";
import { FormGroup, FormControl, FormLabel, InputLabel } from "@mui/material";
require("../ParkReviewScreen.css");

const ActivityReview = (params) => {
  const { park, activities, setActivities, page, paginate } = params;
  const [allActivities, setAllActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleActivitiesChange = (event, newValue) => {
    setSelectedActivities(newValue);
    setActivities(newValue);
    console.log(event.target.value);
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };
  useEffect(() => {
    const fetchAllActivites = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/activities");
        const activityNames = res.data.map((activity) => activity.activity);
        setAllActivities(activityNames);
        // setAutoResultsParks(res.data.map((park) => park.park_name).sort());
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllActivites();
  }, [park]);

  return allActivities.length > 0 ? (
    <div
      className="review-section-container"
      style={{ boxShadow: "0px 0px 300px 50px #d37ad6" }}
    >
      <div
        style={{
          backgroundColor: "#d37ad6",
          padding: "20px",
          borderRadius: "4px",
        }}
      >
        <div className="review-header">Activity</div>
        <p>
          What did you get up to on your trip? <br /> Choose from popular
          activities listed, or add your own.
        </p>
      </div>
      <table>
        <tbody>
          <tr className="activity-tr">
            <td>What activities did you do?</td>
            <td>
              <FormControl>
                <Autocomplete
                  multiple
                  id="activities-autocomplete"
                  options={allActivities}
                  value={selectedActivities}
                  onChange={handleActivitiesChange}
                  inputValue={inputValue}
                  onInputChange={handleInputChange}
                  sx={{ color: "white" }}
                  freeSolo // This allows custom input
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="activities"
                      inputProps={{
                        ...params.inputProps,
                        style: { color: "white", width: "280px" }, // Apply the text color here as well
                      }}
                      // label={<span className="form-label">activities</span>}
                    />
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        label={option}
                        {...getTagProps({ index })}
                        onDelete={() => {
                          const newSelected = [...selectedActivities];
                          newSelected.splice(index, 1);
                          setSelectedActivities(newSelected);
                        }}
                      />
                    ))
                  }
                />
              </FormControl>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="back-next-buttons">
        <div onClick={() => paginate(-1)} className="back-button">
          Back
        </div>
        <div onClick={() => paginate(1)} className="next-button" id="activities-next">
          Next
        </div>
      </div>
    </div>
  ) : (
    // </div>
    <></>
  );
};

export default ActivityReview;
