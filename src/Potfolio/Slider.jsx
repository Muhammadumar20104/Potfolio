import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@mui/material";
function Slider(setShowSlider) {
  return (
    <div className="md:hidden sm:block ">
      <motion.div
        animate={{ width: "250px", height: "400px" }}
        className="bg-[#272727] z-10 absolute right-0 mt-2 rounded-l-3xl"
      >
        <div className="flex  flex-col gap-4 text-xl font-roboto font-bold ml-2 text-[#F9CA0B] mt-2">
          <Button onClick={()=>{setShowSlider(false)}} sx={{fontWeight:"40"}}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="font-bold font-roboto"
            >
              Home
            </Link>
          </Button>
          <hr />
          <div><Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="font-bold font-roboto"
                >
                  Projects
                </Link></div>
          <hr />
          <div><Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="font-bold font-roboto"
                >
                  About
                </Link></div>
          <hr />
          <div><Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="font-bold font-roboto"
                >
                  Contact
                </Link></div>
          <hr />
        </div>
      </motion.div>
    </div>
  );
}

export default Slider;
