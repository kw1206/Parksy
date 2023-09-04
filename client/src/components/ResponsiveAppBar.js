import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import parksy_white from "../assets/logos/parksy_white.png";
import { motion } from "framer-motion";
import { hex } from "../assets/colors";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import axios from "axios";

const pages = ["Home", "About", "Explore", "Guide", "Plan"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [scroll, setScroll] = useState(false);
  const [hover, setHover] = useState(false);
  const [initials, setInitials] = useState([]);
  const { isAuthenticated, user, isLoading } = useAuth0();

  // console.log("user --> ", user.created_at)
  // console.log("user is authenticated --> ", isAuthenticated)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateUserInitials = () => {

    }
  }, [user]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <motion.div
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
    >
      <AppBar id="app-bar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  padding: 0,
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    className="menu-item"
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography>
                      <NavLink
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/${page}`}
                      >
                        {page}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <NavLink
              // style={{ textDecoration: "none", color: "black" }}
              to={`/Home`}
            >
              <motion.img
                id="parksy-appbar-icon"
                alt="parksy-logo"
                src={parksy_white}
                style={{
                  width: "150px",
                  padding: "15px",
                }}
              />
            </NavLink>
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <NavLink style={{ textDecoration: "none" }} to={`/${page}`}>
                    {page}
                  </NavLink>
                </Button>
              ))}
            </Box>
            {!isLoading && user && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <motion.div>
                      <Avatar
                        id="avatar"
                        alt={user.given_name}
                        src="/static/images/avatar/2.jpg"
                      />
                    </motion.div>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <NavLink to="/my-profile" className="account-links">
                      My Profile
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <LogoutButton />
                  </MenuItem>
                </Menu>
              </Box>
            )}
            {!isLoading && !user && (
              <Box sx={{ flexGrow: 0 }}>
                <LoginButton />
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}
export default ResponsiveAppBar;
