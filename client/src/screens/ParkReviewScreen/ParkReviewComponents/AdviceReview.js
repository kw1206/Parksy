import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// mui form imports
import Box from "@mui/material/Box";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
// date picker imports
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { set } from "react-hook-form";
import { FormGroup, FormControl, FormLabel, InputLabel } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
require("../ParkReviewScreen.css");

const AdviceReview = (params) => {
  const {
    park,
    page,
    paginate,
    advice1,
    advice2,
    advice3,
    setAdvice1,
    setAdvice2,
    setAdvice3,
  } = params;

  const [advice1Category, setAdvice1Category] = useState("");
  const [advice2Category, setAdvice2Category] = useState("");
  const [advice3Category, setAdvice3Category] = useState("");
  const [advice1Advice, setAdvice1Advice] = useState("");
  const [advice2Advice, setAdvice2Advice] = useState("");
  const [advice3Advice, setAdvice3Advice] = useState("");

  const adviceCategories = [
    "General",
    "Kids",
    "Safety",
    "Transportation",
    "Parking",
    "Weather",
    "BIPOC",
    "LGBTQIA+",
    "Women",
    "Seasonal",
    "Food",
    "Accommodations",
    "Park activities",
  ];

  return (
    <div
      className="review-section-container"
      style={{ boxShadow: "0px 0px 300px 50px #ff8838" }}
    >
      <div
        style={{
          backgroundColor: "#ff8838",
          padding: "20px",
          borderRadius: "4px",
        }}
      >
        <div className="review-header">Advice</div>
        <p>Share your top three tips from your trip</p>
      </div>
      <FormControl>
        <table>
          <tbody>
            <tr className="advice-tr">
              <td>Tip #1</td>
              <td>
                <Autocomplete
                  options={adviceCategories.sort()}
                  sx={{ width: 300 }}
                  inputValue={advice1Category}
                  onChange={(e, newValue) => {
                    console.log(newValue);
                    setAdvice1({ ...advice1, category: newValue });
                    setAdvice1Category(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="tip #1 category"
                      value={advice1Category}
                      inputProps={{
                        ...params.inputProps,
                        style: { color: "white" }, // Apply the text color here as well
                      }}
                    />
                  )}
                />
                <TextField
                  id="outlined-basic"
                  placeholder="tip #1 advice"
                  style={{ width: "300px" }}
                  sx={{
                    "& input": {
                      color: "white",
                      width: "300px", // Make the input text white
                    },
                  }}
                  value={advice1Advice}
                  onChange={(e) => {
                    setAdvice1({ ...advice1, advice: e.target.value });
                    setAdvice1Advice(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr className="advice-tr">
              <td>Tip #2</td>
              <td>
                <Autocomplete
                  options={adviceCategories.sort()}
                  sx={{ width: 300 }}
                  inputValue={advice2Category}
                  onChange={(e) => {
                    setAdvice2({
                      category: e.target.textContent,
                      advice: advice2.advice,
                    });
                    setAdvice2Category(e.target.textContent);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="tip #2 category"
                      inputProps={{
                        ...params.inputProps,
                        style: { color: "white" }, // Apply the text color here as well
                      }}
                    />
                  )}
                />
                <TextField
                  id="outlined-basic"
                  placeholder="tip #2 advice"
                  style={{ width: "300px" }}
                  sx={{
                    "& input": {
                      color: "white",
                      width: "300px", // Make the input text white
                    },
                  }}
                  value={advice2Advice}
                  onChange={(e) => {
                    setAdvice2({
                      category: advice2.category,
                      advice: e.target.value,
                    });
                    setAdvice2Advice(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr className="advice-tr">
              <td>Tip #3</td>
              <td>
                <Autocomplete
                  options={adviceCategories.sort()}
                  sx={{ width: 300 }}
                  inputValue={advice3Category}
                  onChange={(e) => {
                    setAdvice3({
                      category: e.target.textContent,
                      advice: advice3.advice,
                    });
                    setAdvice3Category(e.target.textContent);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="tip #3 category"
                      inputProps={{
                        ...params.inputProps,
                        style: { color: "white" }, // Apply the text color here as well
                      }}
                    />
                  )}
                />
                <TextField
                  id="outlined-basic"
                  placeholder="tip #3 advice"
                  style={{ width: "300px" }}
                  sx={{
                    "& input": {
                      color: "white",
                      width: "300px", // Make the input text white
                    },
                  }}
                  value={advice3Advice}
                  onChange={(e) => {
                    setAdvice3({
                      category: advice3.category,
                      advice: e.target.value,
                    });
                    setAdvice3Advice(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </FormControl>
      <div className="back-next-buttons">
        <div onClick={() => paginate(-1)} className="back-button">
          <p>Back</p>
        </div>
        <div onClick={() => paginate(1)} className="next-button">
          <p>Review and submit</p>
        </div>
      </div>
    </div>
  );
};

export default AdviceReview;
