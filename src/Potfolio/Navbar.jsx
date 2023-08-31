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
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Bolt } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={darkTheme}>
      <Box p={"35px"} display={"flex"} color={"black"}>
        <AppBar>
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
                justifyContent: { md: "start",sm:"start",xs:"center" },
              }}
            >
              Umar's
            </Typography>
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
                Home{" "}
              </Button>
              <Button size="large" sx={{ color: "#F9CA0B" }}>
                Potfolio{" "}
              </Button>
              <Button size="large" sx={{ color: "#F9CA0B" }}>
                About{" "}
              </Button>
            </Box>
            <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
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
            {/* </Box> */}
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              //   anchorEl={true}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
              onClose={(e) => setOpen(false)}
              //   TransitionComponent={true}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
