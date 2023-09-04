import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import EditIcon from "@mui/icons-material/Edit";
import propic from "/Users/katherinewallace/Code/Personal/nps/client/src/assets/propic.jpeg";
require("./Profile.css");

const Profile = () => {
  // const { user, isAuthenticated } = useAuth0();

  const user = {
    fname: "Kit",
    lname: "Wallace",
    username: "",
    gender: "woman",
    pronouns: "she / her",
    dob: [12, 6, 1990],
  };

  return (
    // isAuthenticated && ()
    <div className="page-container">
      <div
        className="my-profile-info"
        style={{
          borderWidth: "2px",
          borderColor: "red",
          borderStyle: "solid",
        }}
      >
        <div
          className="welcome-to-profile"
          style={{
            borderWidth: "2px",
            borderColor: "blue",
            borderStyle: "solid",
            display: "flex",
          }}
        >
          <h1>My Profile</h1>
        </div>
        <div
          className="my-info"
          style={{
            borderWidth: "2px",
            borderColor: "blue",
            borderStyle: "solid",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <table className="profile-table">
            <tbody>
              <tr>
                <td className="profile-table">First name:</td>
                <td>{user.fname}</td>
              </tr>
              <tr>
                <td>Last name:</td>
                <td>{user.lname}</td>
              </tr>
              <tr>
                <td>Display name:</td>
                {user.username === "" ? (
                  <td>Add a display name</td>
                ) : (
                  <td>{user.username}</td>
                )}
                <td>
                  <EditIcon sx={{ height: "20px" }} />
                </td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{user.gender}</td>
                <td>
                  <EditIcon sx={{ height: "20px" }} />
                </td>
              </tr>
              <tr>
                <td>Pronouns:</td>
                <td>{user.pronouns}</td>
                <td>
                  <EditIcon sx={{ height: "20px" }} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="propic-container">
            <img src={propic} style={{ borderRadius: "50%", width: "200px" }} />
            <p>
              Edit profile picture <EditIcon sx={{ height: "20px" }} />
            </p>
          </div>
        </div>
        <div
          className="my-past-trips"
          style={{
            borderWidth: "2px",
            borderColor: "blue",
            borderStyle: "solid",
            display: "flex",
          }}
        >
          <h2>My Past Trips</h2>
        </div>
        <div
          className="my-travel-wishlist"
          style={{
            borderWidth: "2px",
            borderColor: "blue",
            borderStyle: "solid",
            display: "flex",
          }}
        >
          <h2>My Travel Wishlist</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
