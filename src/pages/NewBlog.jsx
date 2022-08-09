import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blog from "../assets/blok.png";
import { useState } from "react";
import { createUser, signUpProvider } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function NewBlog({ info, setInfo, handleSubmit }) {
  const navigate = useNavigate();
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xxl"
        sx={{ backgroundColor: "white" }}
        className="new-blog-container"
      >
        <Box>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "primary.dark",
                height: "250px",
                width: "250px",
              }}
            >
              <img src={blog} />
            </Avatar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                m: 2,
                color: "primary",
              }}
            >
              <Typography variant="h4" component="div" gutterBottom>
                ──── NEW BLOG ────
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ m: 1, display: "flex", flexDirection: "column", gap: "2" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={info.title}
                autoComplete="title"
                autoFocus
                sx={{ width: "350px" }}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="img"
                value={info.img}
                label="Image URL"
                type="text"
                id="imageURL"
                autoComplete="imageURL"
                onChange={handleChange}
              />
              <TextField
                style={{ marginTop: "1rem" }}
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                fullWidth
                name="content"
                value={info.content}
                label="Content"
                type="info"
                id="info"
                multiline
                rows={7}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SUBMIT
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
