import { Avatar, Button, ButtonGroup, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, { useState } from "react";
function Display() {
  const [hovered, setHovered] = useState(false);
  const [linkIn, setLink] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const [tiwwiter, setTiwwiter] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [git, setGit] = useState(false);

  const LinkedIn = {
    color: "#0A66C2",
    fontSize: linkIn ? "45px" : "40px",
  };
  const Youtube = {
    color: "red",
    fontSize: youtube ? "50px" : "40px",
  };
  const Tiwwiter = {
    color: "#1DA1F2",
    fontSize: tiwwiter ? "50px" : "40px",
  };
  const FaceBook = {
    color: "#4867AA",
    fontSize: facebook ? "50px" : "40px",
  };
  const GitHub = {
    color: "black",
    fontSize: git ? "50px" : "40px",
  };

  const buttonStyle = {
    backgroundColor: hovered ? "#272727" : "#F9CA0B", // Dark background on hover
    color: hovered ? "white" : "black",
    fontSize: "large",
    fontWeight: "bold",
  };
  return (
    <>
      <div className=" xs:hidden lg:block">
        <div className="absolute  flex flex-col  justify-center h-[90%]   ">
          <ButtonGroup
            style={{ position: "", backgroundColor: "whiteF" }}
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained"
          >
            <IconButton
              onMouseEnter={() => setLink(true)}
              onMouseLeave={() => setLink(false)}
            >
              <LinkedInIcon variant="" style={LinkedIn} />
            </IconButton>
            <IconButton
              onMouseEnter={() => setYoutube(true)}
              onMouseLeave={() => setYoutube(false)}
            >
              <YouTubeIcon variant="" style={Youtube} />
            </IconButton>
            <IconButton
              onMouseEnter={() => setTiwwiter(true)}
              onMouseLeave={() => setTiwwiter(false)}
            >
              <TwitterIcon variant="" style={Tiwwiter} />
            </IconButton>
            <IconButton
              onMouseEnter={() => setFacebook(true)}
              onMouseLeave={() => setFacebook(false)}
            >
              <FacebookIcon variant="" style={FaceBook} />
            </IconButton>
            <IconButton
              onMouseEnter={() => setGit(true)}
              onMouseLeave={() => setGit(false)}
            >
              <GitHubIcon style={GitHub} />
            </IconButton>
          </ButtonGroup>
        </div>
      </div>
      <div className="relative  w-full h-fit grid grid-rows-3 justify-center ">
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
          <div className="md:w-[600px] xs:w-fit text-gray-700 text-center text-lg justify-center flex p-8  font-semibold">
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
      <div className=" flex justify-center ">
        <div class="box-content h-0 w-20 rounded-2xl   border-2 border-slate-950 "></div>
      </div>
    </>
  );
}

export default Display;
