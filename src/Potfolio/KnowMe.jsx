import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

function KnowMe() {
  function scrollToTop() {
    window.scrollTo({
      top: 1,
      behavior: "smooth", // Smooth scroll
    });
  }
  return (
    <Box sx={{ width: { lg: "50%", md: "100%" } }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: "28px" }}>
        Get to know me!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontSize: "large",
          color: "gray",
          width: { lg: "550px", md: "700px", sm: "530px" },
        }}
      >
        <Typography>
          I'm a Frontend Web Developer building the Front-end of Websites and
          Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section.
        </Typography>
        <Typography>
          I also like sharing content related to the stuff that I have learned
          over the years in Web Development so it can help other people of the
          Dev Community. Feel free to Connect or Follow me on my{" "}
          <Link
            href="https://www.linkedin.com/in/muhammad-umar-b19323244/"
            sx={{ fontWeight: "bold" }}
          >
            {" "}
            Linkedin
          </Link>{" "}
          where I post useful content related to Web
        </Typography>
        <Typography>
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ color: "white", bgcolor: "#7843E9", width: "140px" }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="font-bold font-roboto "
            onClick={scrollToTop}
          >
            Contact Us
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

export default KnowMe;
