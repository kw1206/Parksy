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
import { Link } from "react-router-dom";
import parksy_white from "../assets/logos/parksy_white.png";
import { motion, AnimatePresence } from "framer-motion";
// import HideOn
import { hex } from "../assets/colors";

const pages = ["Home", "About", "Explore", "Guide", "Plan"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState({
    firstName: "kit",
    lastName: "",
  });
  const [scroll, setScroll] = useState(false);
  const [hover, setHover] = useState(false);

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
    // <HideOnScroll threshold={400}>
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
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/${page}`}
                      >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/Home`}
            >
              <motion.img
                id="parksy-appbar-icon"
                alt="parksy-logo"
                src={parksy_white}
                style={{ width: "150px", padding: "15px", left: 0, backgroundColor: hex.green }}
              />
            </Link>
            <Typography
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
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <motion.div
                  initial={false}
                  animate={scroll && !hover ? { opacity: 0 } : { opacity: 1 }}
                >
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Link style={{ textDecoration: "none" }} to={`/${page}`}>
                      {page}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </Box>
            {loggedInUser ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <motion.div
                      initial={false}
                      animate={
                        scroll && !hover ? { opacity: 0 } : { opacity: 1 }
                      }
                    >
                      <Avatar
                        id="avatar"
                        alt={`${loggedInUser.firstName.charAt(0)}`}
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Link to={`/${setting}`} sx={{ color: "black" }}>
                        {setting}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Link to="/Auth" style={{ textDecoration: "none" }}>
                  LOGIN
                </Link>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
    // </HideOnScroll>
  );
}
export default ResponsiveAppBar;
