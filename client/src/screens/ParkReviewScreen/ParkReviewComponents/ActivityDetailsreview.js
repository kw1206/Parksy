import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// mui form imports
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import { FormGroup, FormControl, FormLabel, InputLabel } from "@mui/material";
import Rating from "@mui/material/Rating";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import StarIcon from "@mui/icons-material/Star";
require("../ParkReviewScreen.css");

const ActivityDetailsreview = (params) => {
  const { kids, activities, page, paginate } = params;
  const [kidFriendly, setKidFriendly] = useState(false);
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <div
      className="review-section-container"
      style={{ boxShadow: "0px 0px 300px 50px #a376bb" }}
    >
      <div
        style={{
          backgroundColor: "#a376bb",
          padding: "20px",
          borderRadius: "4px",
        }}
      >
        <div className="review-header">Activity Details</div>
        <p>What did you think of the activities you participated in?</p>
      </div>
      <table>
        <tbody>
          <tr className="activity-details-tr">
            <td></td>
            <td className="activty-detail-td">Overall rating</td>
            <td className="activty-detail-td">
              Activity level
              <p style={{ fontSize: "10px", textAlign: "center" }}>
                (0 = relaxed / <br /> 10 = active)
              </p>
            </td>
            {kids > 0 && <td className="activty-detail-td">Kid friendly</td>}
          </tr>
          {activities.map((activity) => (
            <tr className="activity-details-tr">
              <td>{activity}</td>
              <td className="activty-detail-td">
                <FormControl>
                  <Rating
                    // value={rating}
                    label={<span className="form-label">rating</span>}
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                    // sx={
                    //   rating === 1
                    //     ? {
                    //         "& .MuiRating-iconFilled": {
                    //           color: "#EDE4F1",
                    //         },
                    //       }
                    //     : rating === 2
                    //     ? {
                    //         "& .MuiRating-iconFilled": {
                    //           color: "#DAC8E4",
                    //         },
                    //       }
                    //     : rating === 3
                    //     ? {
                    //         "& .MuiRating-iconFilled": {
                    //           color: "#C8ADD6",
                    //         },
                    //       }
                    //     : rating === 4
                    //     ? {
                    //         "& .MuiRating-iconFilled": {
                    //           color: "#B591C9",
                    //         },
                    //       }
                    //     : rating === 5
                    //     ? {
                    //         "& ..MuiRating-iconFilled": {
                    //           color: "#A376BB",
                    //         },
                    //       }
                    //     : {}
                    // }
                  />
                </FormControl>
              </td>
              <td className="activty-detail-td">
                <Slider
                  defaultValue={0}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  // sx={
                  //   value === 1
                  //     ? {
                  //         "& .MuiSlider-thumb": {
                  //           color: "#EDE4F1",
                  //         },
                  //       }
                  //     : value === 2
                  //     ? {
                  //         "& .MuiSlider-thumb": {
                  //           color: "#DAC8E4",
                  //         },
                  //       }
                  //     : value === 3
                  //     ? {
                  //         "& .MuiSlider-thumb": {
                  //           color: "#C8ADD6",
                  //         },
                  //       }
                  //     : value === 4
                  //     ? {
                  //         "& .MuiSlider-thumb": {
                  //           color: "#B591C9",
                  //         },
                  //       }
                  //     : value === 5
                  //     ? {
                  //         "& .MuiSlider-thumb": {
                  //           color: "#A376BB",
                  //         },
                  //       }
                  //     : {}
                  // }
                />
              </td>
              {kids > 0 && (
                <td className="activty-detail-td">
                  <Switch
                    checked={kidFriendly}
                    onChange={() => setKidFriendly(!kidFriendly)}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={
                      kidFriendly
                        ? {
                            "& .MuiSwitch-thumb": {
                              color: "#a376bb",
                              border: "2px solid #a376bb",
                            },
                          }
                        : {
                            "& .MuiSwitch-thumb": {
                              color: "black",
                              border: "2px solid white",
                            },
                          }
                    }
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="back-next-buttons">
        <div onClick={() => paginate(-1)} className="back-button">
          Back
        </div>
        <div onClick={() => paginate(1)} className="next-button">
          Next
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailsreview;
