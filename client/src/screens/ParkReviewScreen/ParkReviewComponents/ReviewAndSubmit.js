import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Rating from "@mui/material/Rating";

const ReviewAndSubmit = (params) => {
  const {
    page,
    paginate,
    park,
    tripStart,
    tripEnd,
    overallRating,
    companions,
    adults,
    adultsAges,
    kids,
    kidsAges,
    fitnessLevel,
    tripActivityLevel,
    activities,
    advice1,
    advice2,
    advice3,
    enterTrip,
  } = params;

  const [advice, setAdvice] = useState([advice1, advice2, advice3]);

  return (
    <div
      className="review-section-container"
      style={{
        boxShadow: "0px 0px 300px 50px #ff8838",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
      >
        <div style={{ padding: "5px", width: "250px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#0d6f5c",
              padding: "10px 15px",
              borderRadius: "4px",
            }}
          >
            <p>Basic info</p>
            <EditIcon onClick={() => paginate(-3)} />
          </div>
          <table className="review-table">
            <tbody>
              <tr>
                <td>Park visited</td>
                <td>{park}</td>
              </tr>
              <tr>
                <td>Trip dates</td>
                <td>
                  {tripStart.$d.toLocaleDateString()} to{" "}
                  {tripEnd.$d.toLocaleDateString()}
                </td>
              </tr>
              <tr>
                <td>Overall rating</td>
                <td>
                  <Rating value={Number(overallRating)} readOnly />
                </td>
              </tr>
            </tbody>
          </table>
          {!companions && !fitnessLevel && !tripActivityLevel && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#0298c9",
                padding: "10px 15px",
                margin: "10px 0px",
                borderRadius: "4px",
              }}
            >
              <p>Add traveler profile</p>
              <EditIcon onClick={() => paginate(-2)} />
            </div>
          )}
          {activities.length === 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#d37ad6",
                padding: "10px 15px",
                margin: "10px 0px",
                borderRadius: "4px",
              }}
            >
              <p>Add activities</p>
              <EditIcon onClick={() => paginate(-1)} />
            </div>
          )}
        </div>
        {(companions || fitnessLevel || tripActivityLevel) && (
          <div style={{ padding: "5px", width: "250px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#0298c9",
                padding: "10px 15px",
                borderRadius: "4px",
              }}
            >
              <p>Traveler Profile</p>
              <EditIcon onClick={() => paginate(-2)} />
            </div>{" "}
            <table className="review-table">
              <tbody>
                {companions && (
                  <tr>
                    <td>Traveler profile</td>
                    <td>{companions}</td>
                  </tr>
                )}
                {companions && companions !== "solo" && (
                  <>
                    <tr>
                      <td>Adults</td>
                      <td>{adults}</td>
                    </tr>
                    {adultsAges[0] !== 0 && adultsAges[1] !== 0 && (
                      <tr>
                        <td>Adults age range</td>
                        <td>
                          {adultsAges[0]} to {adultsAges[1]}
                        </td>
                      </tr>
                    )}
                  </>
                )}
                {kids > 0 && (
                  <>
                    <tr>
                      <td>Kids</td>
                      <td>{kids}</td>
                    </tr>
                    {kidsAges[1] > 0 && (
                      <tr>
                        <td>Kids age range</td>
                        <td>
                          {kidsAges[0]} to {kidsAges[1]}
                        </td>
                      </tr>
                    )}
                  </>
                )}
                {fitnessLevel && (
                  <tr>
                    <td>Average fitness level</td>
                    <td>{fitnessLevel}</td>
                  </tr>
                )}
                {tripActivityLevel && (
                  <tr>
                    <td>Trip activity level</td>
                    <td>{tripActivityLevel}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        {activities.length > 0 && (
          <div style={{ padding: "5px", width: "250px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#d37ad6",
                padding: "10px 15px",
                borderRadius: "4px",
              }}
            >
              <p>Activities</p>
              <EditIcon onClick={() => paginate(-1)} />
            </div>
            <table className="review-table">
              <tbody>
                <tr>
                  <td>
                    <ul
                      style={{ listStyleType: "circle", paddingLeft: "20px" }}
                    >
                      {activities.map((activity) => (
                        <li key={activity.indexOf()}>{activity}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {/* <div style={{ padding: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#ff8838",
              padding: "10px 15px",
              borderRadius: "4px",
            }}
          >
            <p>Tips</p>
            <EditIcon />
          </div>
          <table className="review-table">
            <tbody>
              {advice.map((tip) => (
                <tr key={tip.advice}>
                  <td>{tip.category}</td>
                  <td>{tip.advice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
      <div className="back-next-buttons" style={{ justifyContent: "center" }}>
        <div onClick={() => enterTrip()} className="back-button">
          Submit
        </div>
      </div>
    </div>
  );
};

export default ReviewAndSubmit;
