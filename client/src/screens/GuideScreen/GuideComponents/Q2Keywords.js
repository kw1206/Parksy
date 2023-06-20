import React from "react";
import keywordOptions from "./keywordOptions.js";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: 'black' }} />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Q2Keywords = (props) => {
  // const
  // const logParams = () => {
  //     console.log()
  // }
const handleAddKeyword = (event, value) => {
    props.setKeywords([...props.keywords, value])
    console.log("keywords --> ", props.keywords)
}
//   console.log(params)
  return (
    <div className="custom-q">
      <h1>2. Keywords</h1>
      <h2>What would you like to see and do on your trip?</h2>
      <h3>Enter up to 7 keywords</h3>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        onChange={(event, value) => handleAddKeyword(event, value)}
        options={keywordOptions}
        disableCloseOnSelect
        limitTags={10}
        getOptionLabel={(option) => option.keyword}
        renderOption={(props, option, { selected }) => (
          <li
            {...props}
            className="keywordOption"
            style={{
              color: selected ? "white" : "black",
              backgroundColor: selected ? "#065749" : "white",
            }}
          >
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8, borderWidth: "2px", borderColor: "black" }}
              checked={selected}
            />
            {option.keyword}
          </li>
        )}
        sx={{ width: "90%", backgroundColor: "white", color: "black" }}
        renderInput={(params) => (
            <TextField
            {...params}
            placeholder="Keywords"
            sx={{color: "black"}}
          />
        )}
      />
    </div>
  );
};

export default Q2Keywords;
