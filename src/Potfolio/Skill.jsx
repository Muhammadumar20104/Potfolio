import { Box, Button, Input, Typography, colors } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

function Skill() {
  const [btnchg, setBtnchg] = useState(false);
  const [input, setInput] = useState(null);

    const storedData = JSON.parse(localStorage.getItem('skillData')) || [];
  // const getData = () => {
  //   let newData = localStorage.getItem("skillData");
  //   if (newData == []) {
  //     return [];
  //   } else {
  //     return JSON.parse(newData);
  //   }
  // };
  console.log(storedData);
  const [skillData, setSkilldata] = useState(storedData);
  useEffect(() => {
    localStorage.setItem('skillData', JSON.stringify(skillData));
  }, [skillData]);
  const skillhandle = () => {
    const data = {
      name: input,
    };
    setSkilldata([...skillData, data]);
    setInput(null);
    setBtnchg(false);
  };
  const handleInputChange = (event) => {
    // Update the state with the new input value
    setInput(event.target.value);
  };

  return (
    <>
      <div className="lg:w-[80%] grid grid-rows-1 h-fit gap-3">
        <h1 className="h-fit text-[24px] font-bold font-sans">My Skill</h1>
        <div className="md:w-[100%] lg:w-full flex flex-wrap gap-4">
          {skillData.map((e) => (
            <Button
              key={e.name} // Make sure to add a unique key for each element in the array
              variant="contained"
              size="large"
              sx={{
                width: "Autocomplete",
                height: "45px",
                fontWeight: "bold",
                color: "gray",
                bgcolor: "black",
              }}
              disabled
            >
              <Typography
                sx={{ fontWeight: "bold", color: "gray", fontSize: "15px" }}
              >
                {e.name}
              </Typography>
            </Button>
          ))}
          {/* <Button
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
          </Button> */}
        </div>
        {btnchg ? (
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onFocus={true}
            className="border border-slate-950 rounded-md"
          />
        ) : (
          <button
            className="border rounded-md bg-[#7843E9] text-lg font-sans font-semibold"
            onClick={() => setBtnchg(true)}
          >
            New Skill
          </button>
        )}
        {btnchg && (
          <button
            className="border rounded-md bg-[#7843E9] text-lg font-sans font-semibold"
            onClick={skillhandle}
          >
            Save
          </button>
        )}
      </div>
    </>
  );
}

export default Skill;
