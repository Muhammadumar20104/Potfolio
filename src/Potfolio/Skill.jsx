import { Box, Button, Typography, colors } from "@mui/material";
import React from "react";

function Skill() {
  return (
    <>
      <div className="lg:w-[80%] grid grid-rows-1 h-fit gap-3">
        <h1 className="h-fit text-[24px] font-bold font-sans">My Skill</h1>
        <div className="md:w-[100%] lg:w-full grid lg:grid-cols-5 gap-3 md:grid-cols-5  xs:grid-cols-3">
          <Button
            variant="contained"
            size="large"
            sx={{ width: "Autocomplete", height: "45px" ,fontWeight:"bold",color:"gray",bgcolor:"black"}}
            disabled
          >
            <Typography
               sx={{ fontWeight: "bold", color: "gray", fontSize: "15px" }}>

              HTML
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "Autocomplete", height: "45px" }}
            disabled
          >
            <Typography
              sx={{ fontWeight: "bold", color: "gray ", fontSize: "15px" }}
            >
              CSS
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ width: "full", height: "45px",p:"" }}
            disabled
          >
            <Typography
              sx={{ fontWeight: "bold", color: "gray  ", fontSize:{lg:"15px",sm:"15px",xs:"11px"} }}
            >
              JavaScript
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "Autocomplete", height: "45px" }}
            disabled
          >
            <Typography
              sx={{ fontWeight: "bold", color: "gray  ", fontSize: "15px" }}
            >
              React
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "Autocomplete", height: "45px" }}
            disabled
          >
            <Typography
              sx={{ fontWeight: "bold", color: "gray  ", fontSize: "15px" }}
            >
              SASS
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "Autocomplete", height: "45px" }}
            disabled
          >
            <Typography
              sx={{ fontWeight: "bold", color: "gray  ", fontSize: "15px" }}
            >
              Git
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "Autocomplete", height: "45px" }}
            disabled
          >
            <Typography
              sx={{ fontWeight: "bold", color: "gray  ", fontSize: "15px" }}
            >
              Github
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "Autocomplete", height: "45px" }}
            disabled
          >
            <Typography
              sx={{ fontWeight: "bold", color: "gray", fontSize: "13px" }}
            >
              Responsive Design
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "Autocomplete", height: "45px" }}
            disabled
          >
            <Typography
              sx={{ fontWeight: "bold", color: "gray  ", fontSize: "15px" }}
            >
              SEO
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "Autocomplete", height: "45px" }}
            disabled
          >
            <Typography
              sx={{ fontWeight: "bold", color: "gray  ", fontSize: "15px" }}
            >
              Terminal
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "Autocomplete", height: "45px" }}
            disabled
          >
            <Typography
              sx={{ fontWeight: "bold", color: "gray  ", fontSize: "15px" }}
            >
              Express Basics
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "Autocomplete", height: "45px" }}
            disabled
          >
            <Typography
              sx={{ fontWeight: "bold", color: "gray  ", fontSize: "15px" }}
            >
              SQL Basics
            </Typography>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Skill;
