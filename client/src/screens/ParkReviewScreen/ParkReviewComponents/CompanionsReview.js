import React from "react";
import Slider from "@mui/material/Slider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
require("../ParkReviewScreen.css");

const CompanionsReview = (params) => {
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
    fitnessLevel,
    setFitnessLevel,
    tripActivityLevel,
    setTripActivityLevel,
    paginate,
  } = params;

  // Helper function to update state when traveler type is clicked
  const handleCompanionClick = (type, adultCount, kidCount, adultAges) => {
    setCompanions(type);
    setAdults(adultCount);
    setKids(kidCount);
    setAdultsAges(adultAges);
  };

  return (
    <div
      className="review-section-container"
      style={{ boxShadow: "0px 0px 300px 50px #0298c9" }}
    >
      <div
        style={{
          backgroundColor: "#0298c9",
          padding: "20px",
          borderRadius: "4px",
        }}
      >
        <div className="review-header">Traveler Profile</div>
        <p>Who went?</p>
      </div>
      <table>
        <tbody>
          <tr className="companions-tr">
            <td>Traveler type</td>
            <td>
              <div className="companion-options">
                {[
                  {
                    type: "solo",
                    label: "solo",
                    adultCount: 1,
                    kidCount: 0,
                    adultAges: [0, 0],
                  },
                  {
                    type: "couple",
                    label: "couple",
                    adultCount: 2,
                    kidCount: 0,
                    adultAges: [0, 0],
                  },
                  {
                    type: "family",
                    label: "family",
                    adultCount: 1,
                    kidCount: 0,
                    adultAges: [0, 0],
                  },
                  {
                    type: "friends",
                    label: "friends",
                    adultCount: 1,
                    kidCount: 0,
                    adultAges: [0, 0],
                  },
                ].map((item) => (
                  <div
                    key={item.type}
                    className={`${
                      companions === item.type
                        ? `${item.type}-selected companion-div`
                        : "companion-not-selected companion-div"
                    }`}
                    onClick={() =>
                      handleCompanionClick(
                        item.type,
                        item.adultCount,
                        item.kidCount,
                        item.adultAges
                      )
                    }
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </td>
          </tr>
          {companions === "couple" && (
            <tr>
              <td>
                <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                  <li>Adults age range</li>
                </ul>
              </td>
              <td>
                <Slider
                  getAriaLabel={() => "Adults age range"}
                  value={adultsAges}
                  onChange={(e) => setAdultsAges(e.target.value)}
                  valueLabelDisplay="auto"
                  min={18}
                  max={100}
                />
              </td>
            </tr>
          )}
          {(companions === "family" || companions === "friends") && (
            <>
              <tr>
                <td>
                  <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                    <li>Number of adults</li>
                  </ul>
                </td>
                <td>
                  <Select
                    id="demo-simple-select-autowidth"
                    value={adults > 0 ? adults : ""}
                    onChange={(e) => setAdults(e.target.value)}
                    inputProps={{ style: { color: "white" } }}
                    autoWidth
                    renderValue={(value) => (
                      <p style={{ color: "white", textAlign: "center" }}>
                        {value}
                      </p>
                    )}
                    MenuProps={{
                      style: {
                        maxHeight: "300px", // Set the maximum height for the dropdown
                      },
                    }}
                  >
                    {[...Array(21).keys()].map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>
                </td>
              </tr>
              <tr>
                <td>
                  <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                    <li>Adults age range</li>
                  </ul>
                </td>
                <td>
                  <Slider
                    getAriaLabel={() => "Adults age range"}
                    value={adultsAges}
                    onChange={(e) => setAdultsAges(e.target.value)}
                    valueLabelDisplay="auto"
                    min={18}
                    max={100}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                    <li>Number of kids</li>
                  </ul>
                </td>
                <td>
                  <Select
                    value={kids}
                    onChange={(event) => {
                      setKids(event.target.value);
                    }}
                    style={{ color: "white" }}
                    inputProps={{ style: { color: "white" } }}
                    autoWidth
                    placeholder="kids"
                    renderValue={(value) => (
                      <p style={{ color: "white", textAlign: "center" }}>
                        {value}
                      </p>
                    )}
                    MenuProps={{
                      style: {
                        maxHeight: "300px", // Set the maximum height for the dropdown
                      },
                    }}
                  >
                    {[...Array(21).keys()].map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>
                </td>
              </tr>
              <tr>
                <td>
                  <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                    <li>Kids age range</li>
                  </ul>
                </td>
                <td>
                  <Slider
                    getAriaLabel={() => "Kids age range"}
                    value={kidsAges}
                    onChange={(e) => setKidsAges(e.target.value)}
                    valueLabelDisplay="auto"
                    min={0}
                    max={17}
                  />
                </td>
              </tr>
            </>
          )}
          <tr className="companions-tr">
            <td>
              Average fitness level of group
              <p style={{ fontSize: "10px" }}>(0 = beginner / 5 = elite)</p>
            </td>
            <td>
              <Slider
                defaultValue={0}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={5}
                value={fitnessLevel}
                onChange={(e) => setFitnessLevel(e.target.value)}
              />
            </td>
          </tr>
          <tr className="companions-tr">
            <td>
              Trip activity level
              <p style={{ fontSize: "10px" }}>(0 = relaxed / 5 = active)</p>
            </td>
            <td>
              <Slider
                defaultValue={0}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={5}
                value={tripActivityLevel}
                onChange={(e) => setTripActivityLevel(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="back-next-buttons">
        <div onClick={() => paginate(-1)} className="back-button">
          Back
        </div>
        <div onClick={() => paginate(1)} className="next-button" id="companions-next">
          Next
        </div>
      </div>
    </div>
  );
};

export default CompanionsReview;
