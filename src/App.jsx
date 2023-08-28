import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Temp from "./Components/Temp";
import Form from "./Components/Form";
import MUI from "./Components/MUI";
import Sold from "./Components/Sold";
import Ship from "./Components/Ship";
import Navbar from "./Potfolio/Navbar";
import Display from "./Potfolio/Display";
import { Button, ButtonGroup } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from '@mui/icons-material/Facebook';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Display />
      <div className="relative  ">
        <div className="absolute  flex flex-col justify-center h-full md:bottom-96 xs:bottom-[350px]">
          <ButtonGroup
          style={{position:"fixed"}}
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained"
          >
            <LinkedInIcon variant="" style={{fontSize:{md:"40",xs:"10"}}}>Tiwwter</LinkedInIcon>
            <YouTubeIcon variant="contained" style={{fontSize:{md:"40",xs:"10"}}}>Tiwwter</YouTubeIcon>
            <TwitterIcon variant="contained" style={{fontSize:{md:"40",xs:"10"}}}>Tiwwter</TwitterIcon>
            <FacebookIcon variant="contained" style={{fontSize:{md:"40",xs:"10"}}}></FacebookIcon>
          </ButtonGroup>
        </div>
      </div>
      {/* <div className=" p-1 ">
        <MUI />
        <Sold />
      </div> */}
      {/* <Demo/> */}
      {/* <Form/> */}
      {/* <div className=" w-screen ">
        <div className="relative top-24 flex justify-center p-2">
          <div className="absolute  border border-gray-950 w-80  h-[450px] rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
            <Temp />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
