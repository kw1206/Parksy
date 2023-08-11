import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  
  return (
    isAuthenticated && (
      <>
        <div>Profile</div>
        <div>Profile</div>
        <div>Profile</div>
        <div>Profile</div>
        <div>Profile</div>
        <div>Profile</div>
        <div>Profile</div>
        <div>Profile</div>
        <div>Profile</div>
        <div>{user?.picture && <img src={user.picture} alt={user.name} />}</div>
        <div>{user?.email}</div>
      </>
    )
  );
};

export default Profile;
