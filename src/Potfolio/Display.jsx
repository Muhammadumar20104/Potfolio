import { Avatar, Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
function Display() {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: hovered ? "#272727" : "#F9CA0B", // Dark background on hover
    color: hovered ? "white" : "black",
    fontSize: "large",
    fontWeight: "bold",
  };
  return (
    <div className="relative  w-full h-fit grid grid-rows-3 justify-center">
      <div className="flex justify-center ">
        <Avatar
          style={{
            height: "200px",
            width: "200px",
            display: "flex",
            justifyContent: "center",
          }}
          alt="Remy Sharp"
          src="src\Components\W4.jpg"
        />
      </div>

      <div className="flex flex-col justify-center md:text-6xl xs:text-4xl font-bold h-full">
        <div className="flex justify-center p-5">Hey I'm Umar</div>
        <div className="md:w-[600px] xs:w-fit text-gray-700 text-lg justify-center flex p-8  font-semibold">
          A Frontend Web Developer Focused on Responsive Design And Build A
          Attractive Website For our Client
        </div>
      </div>
      <div className="flex justify-center h-fit p-3">
        <Button
          variant="contained"
          style={buttonStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Project
        </Button>
      </div> 
    </div>
  );
}

export default Display;
