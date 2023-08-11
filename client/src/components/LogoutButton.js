import React from "react";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <Button className="account-links" onClick={() => logout()}>
        Log out
      </Button>
    )
  );
};

export default LogoutButton;
