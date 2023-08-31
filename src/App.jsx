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
import { Button, ButtonGroup, IconButton } from "@mui/material";

import About from "./Potfolio/About";

function App() {


  return (
    <>
      <Navbar />
      <Display />
      <About />
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
