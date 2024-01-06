import {
  AppBar,
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  colors,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Bolt } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import Slider from "./Slider";
import CancelIcon from "@mui/icons-material/Cancel";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
const options = ["Home", "Project", "About"];
const ITEM_HEIGHT = 48;

function Navbar() {
  const [openn, setOpen] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const isSmallScreen = () => window.innerWidth <= 600;

  const toggleSlider = () => {
    setOpen(!openn);
    setShowSlider(!showSlider);
  };
  function scrollToTop() {
    window.scrollTo({
      top: -1,
      behavior: "smooth", // Smooth scroll
    });
  }
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <ThemeProvider theme={darkTheme}>
      <Box p={"35px"} display={"flex"} color={"black"}>
        <AppBar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Toolbar>
            {/* <Box display={"flex"}> */}
            <EmojiEmotionsIcon
              fontSize="large"
              sx={{ display: { xs: "block" }, color: "#F9CA0B" }}
            />

            <Typography
              variant="h6"
              ml={2}
              sx={{
                display: "flex",
                width: { xs: "100%" },
                justifyContent: { md: "start", sm: "start", xs: "center" },
              }}
            >
              Umar's
            </Typography>
            {/* <Box sx={{display: { xs: "block", sm: "none" },}}>
              <div>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      selected={option === "Pyxis"}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </Box> */}
            <Box
              sx={{
                flexGrow: 1,
                "& button": { m: 1 },
                display: { xs: "none", sm: "flex" },
                justifyContent: { md: "center", sm: "end" },
                gap: { md: 15, sm: 5 },
              }}
            >
              <Button size="large" sx={{ color: "#F9CA0B" }}>
                {/* <a href="/" className="font-bold font-roboto">Home</a> */}
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="font-bold font-roboto"
                >
                  Home
                </Link>
              </Button>
              <Button size="large" sx={{ color: "#F9CA0B" }}>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="font-bold font-roboto "
                  onClick={scrollToTop}
                >
                  Projects
                </Link>
              </Button>
              <Button size="large" sx={{ color: "#F9CA0B" }}>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="font-bold font-roboto"
                >
                  About
                </Link>
              </Button>
            </Box>
            {isSmallScreen() && (
              <Button
                onClick={toggleSlider}
                sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
              >
                {showSlider ? <CancelIcon /> : <MenuIcon />}
              </Button>
            )}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                width: { xs: "100%" },
                gap: { xs: 1, md: 2 },
              }}
            >
              <LanguageIcon fontSize="large" />
              <LinkedInIcon
                variant="link"
                fontSize="large"
                sx={{ color: "#0A66C2" }}
                href="www.linkedin.com/in/muhammad-umar-b19323244/"
              />
              <Avatar
                alt="Remy Sharp"
                src="src\Components\W4.jpg"
                onClick={(e) => setOpen(true)}
              />
            </Box>
          </Toolbar>
          {isSmallScreen() && showSlider && (
            <div>
              <Slider setShowSlider={setShowSlider} />
            </div>
          )}
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
