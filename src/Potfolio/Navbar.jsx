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
      <Box p={5} display={"flex"} color={"black"}>
        <AppBar>
          <Toolbar>
            {/* <Box display={"flex"}> */}
            <EmojiEmotionsIcon

              fontSize="large"
              sx={{ display: { xs: "none", md: "block" } ,color:"#F9CA0B"}}
            />
            <MenuIcon sx={{ display: { xs: "block", md: "none" } }} />

            <Typography
              variant="h6"
              ml={2}
              sx={{
                display: "flex",
                width: { xs: "100%" },
                justifyContent: { xs: "end", md: "start" },
              }}
            >
              Umar's
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                "& button": { m: 1 },
                display: { xs: "none", md: "flex" },
              }}
              //   display={"flex"}
              justifyContent={"center"}
              gap={15}
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
            <Box
              sx={{
                display: { xs: "flex" },
                justifyContent: "flex-end",
                width: { xs: "100%" },
                gap: { xs: 1, md: 2 },
              }}
            >
              <LanguageIcon fontSize="large" />
              <LinkedInIcon variant="link" fontSize="large" sx={{color:"blue"}} href="www.linkedin.com/in/muhammad-umar-b19323244/"/>
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
