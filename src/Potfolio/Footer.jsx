import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="bg-black w-[100%] h-[100%] text-white p-10">
      <div className="flex flex-col gap-6 w-[100%] h-[100%]">
        <div className="flex flex-col  gap-3 w-full">
          <div className="flex justify-center text-3xl font-bold font-roboto">Social</div>
          <div className="flex justify-center gap-3">
            <div className="">
              <LinkedInIcon className="text-[#0A66C2]"/>
            </div>
            <div>
              <GitHubIcon />
            </div>
            <div>
              <TwitterIcon className="text-[#1DA1F2]"/>
            </div>
            <div>
              <YouTubeIcon className="text-[#FF0000] text-5xl"/>
            </div>
            <div>
              <FacebookIcon className="text-[#4867AA]"/>
            </div>
          </div>
        </div>

        <div>
          <hr />
        </div>
        <div className="flex flex-col justify-center text-center text-xs h-20  ">
          © Copyright 2023. Made by Muhammad Umar
        </div>
      </div>
    </div>
  );
}

export default Footer;
