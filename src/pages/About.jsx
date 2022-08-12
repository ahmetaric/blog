import { Box, CardMedia, Link, Typography } from "@mui/material";
import { Button } from "bootstrap";
import React from "react";
import coding from "../assets/coding.svg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";


const About = () => {
  return (
    <Box
      sx={{
        mt: 13,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={coding}
        alt={coding}
        sx={{ width: "350px", height: "150px", mt: "2rem" }}
      />

      <Typography variant="h4" component="div" gutterBottom sx={{ m: "2rem" }}>
        I'm Ahmet.
      </Typography>
      <Typography variant="body1" gutterBottom>
        I am a front-end developer.
      </Typography>
      <Typography variant="body1" gutterBottom>
        I prefer React for front-end development.
      </Typography>
      <Typography variant="body1" gutterBottom>
        React, Git, GitHub, JavaScript, Python, HTML5, CSS3.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Don't hesitate to ask me about anything that you want to learn.
      </Typography>
      <Typography variant="body1" gutterBottom>
        You can contact me.
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        ahmet.aric1965@gmail.com
      </Typography>
      <Box>
        <Link
          href="https://www.linkedin.com/in/ahmet-aric/"
          underline="none"
          className="img-about"
        >
          <img src={linkedin} className="img-linkedin" alt="linkedin" />{" "}
          <span>LinkedIn Profile</span>
        </Link>
        <Link href="https://github.com/ahmetaric" underline="none">
          <img src={github} className="img-github" alt="github" />{" "}
          <span>GitHub Page</span>
        </Link>
      </Box>
    </Box>
  );
};

export default About;
