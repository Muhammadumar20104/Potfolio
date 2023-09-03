import { Box } from "@mui/material";
import React from "react";
import KnowMe from "./KnowMe";
import Skill from "./Skill";

function About() {
  return (
    <Box sx={{ width: "100%", height: "100%",p:{xs:"12px",sm:"30px",md:"50px"} }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="lg:text-5xl md:text-4xl xs:text-5xl font-bold tex font-roboto mb-16">About Me</h1>
          <p className="xs:text-base md:text-xl  text-gray-600 xs:w-fit md:w-[80%] sm:w-[600px] mb-20">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </Box>
      </Box>
      <Box sx={{ display: "flex",flexDirection:{lg:"row",md:"column",sm:"column",xs:"column"} ,justifyContent:'space-between' ,gap:8}}>
        <KnowMe />
        <Skill />
      </Box>
    </Box>
  );
}

export default About;
