import { Button } from "@mui/material";
import React from "react";

function Projects() {
  return (
    <>
      <div className="w-[100%] h-auto mt-20 md:p-14">
        <div className="p-2">
          <div className="text-center text-5xl font-bold font-roboto">
            Projects
          </div>
          <div className="flex justify-center">
            <div className=" md:w-[60%] text-lg text-center font-roboto text-gray-600 mt-8">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-20">
            <div className="flex lg:flex-row xs:flex-col  lg:gap-20 md:gap-5">
              <div className="lg:w-[50%] md:w-[100%] h-[100%]">
                <img
                  src="src\Potfolio\dopefolio.jpeg"
                  alt=""
                  className="object-cover "
                />
              </div>
              <div className="lg:w-[50%] md:w-[100%] flex flex-col gap-5 justify-center text-center ">
                <div className="text-3xl  flex justify-center md:w-full font-bold font-roboto lg:w-fit">
                  Dopefolio
                </div>
                <div className="text-lg font-roboto text-gray-600">
                  Dopefolio is a successful Open-Source project that I created
                  which have been featured on some of the biggest tech sites
                  like CSS-Tricks, Hostinger, etc & used by thousands of
                  developers globally
                </div>
                <div className="lg:w-fit md:w-full animate-bounce">
                  <Button
                    variant="contained"
                    size=""
                    sx={{
                      bgcolor: "purple",
                      fontSize: { lg: "20px", xs: "15px" },
                    }}
                  >
                    CASE STUDY
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row xs:flex-col  lg:gap-20 md:gap-5">
              <div className="lg:w-[50%] md:w-[100%] h-[100%]">
                <img
                  src="src\Potfolio\wilsonport.jpeg"
                  alt=""
                  className="object-cover "
                />
              </div>
              <div className="lg:w-[50%] md:w-[100%] flex flex-col gap-5 justify-center text-center ">
                <div className="text-3xl  flex justify-center md:w-full font-bold font-roboto lg:w-fit">
                  Wilsonport
                </div>
                <div className="text-lg font-roboto text-gray-600">
                  Wilsonport is a multiservice logistics and transport company
                  and I created their website from scratch using the frontend
                  tools I know.
                </div>
                <div className="lg:w-fit md:w-full animate-bounce">
                  <Button
                    variant="contained"
                    size=""
                    sx={{
                      bgcolor: "purple",
                      fontSize: { lg: "20px", xs: "15px" },
                    }}
                  >
                    CASE STUDY
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row xs:flex-col  lg:gap-20 md:gap-5">
              <div className="lg:w-[50%] md:w-[100%] h-[100%]">
                <img
                  src="src\Potfolio\boreal-coffee-clone.jpeg"
                  alt=""
                  className="object-cover "
                />
              </div>
              <div className="lg:w-[50%] md:w-[100%] flex flex-col gap-5 justify-center text-center ">
                <div className="text-3xl  flex justify-center md:w-full font-bold font-roboto lg:w-fit">
                  Boreal Coffee Clone
                </div>
                <div className="text-lg font-roboto text-gray-600">
                  I re-created the frontend of Boreal Coffee's official web app
                  because I got attracted to their beautiful UI. It was a great
                  experience for me to build the entire frontend.
                </div>
                <div className="lg:w-fit md:w-full animate-bounce">
                  <Button
                    variant="contained"
                    size=""
                    sx={{
                      bgcolor: "purple",
                      fontSize: { lg: "20px", xs: "15px" },
                    }}
                  >
                    CASE STUDY
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row xs:flex-col  lg:gap-20 md:gap-5">
              <div className="lg:w-[50%] md:w-[100%] h-[100%]">
                <img
                  src="src\Potfolio\crown-template.jpeg"
                  alt=""
                  className="object-cover "
                />
              </div>
              <div className="lg:w-[50%] md:w-[100%] flex flex-col gap-5 justify-center text-center ">
                <div className="text-3xl  flex justify-center md:w-full font-bold font-roboto lg:w-fit">
                  Crown Template
                </div>
                <div className="text-lg font-roboto text-gray-600">
                  Crown is a web template that I created targeting the
                  restaurant and food industry which anyone can use to present
                  their business online.
                </div>
                <div className="lg:w-fit md:w-full animate-bounce">
                  <Button
                    variant="contained"
                    size=""
                    sx={{
                      bgcolor: "purple",
                      fontSize: { lg: "20px", xs: "15px" },
                    }}
                  >
                    CASE STUDY
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
