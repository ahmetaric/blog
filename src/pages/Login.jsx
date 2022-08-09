
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
import {signIn, signUpProvider} from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import google from "../assets/google.png";

const theme = createTheme();

export default function SignIn({email,setEmail}) {
   
   const [password, setPassword] = useState();
   const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const displayName= `${email}`;
    signIn(email,password,navigate,displayName);
  };

  const handleProviderLogin = ()=>{
    signUpProvider(navigate);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xxl"
        style={{
          backgroundImage: "url(https://picsum.photos/1600/900)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="login-container"
      >
        <Box
          sx={{
            backgroundColor: "white",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.61)",
            borderRadius: "10px",
            height: "%100",
            width: "450px",
            marginBottom: "-5rem",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            sizes="100px"
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "primary.dark",
                height: "250px",
                width: "250px",
              }}
            >
              <img src={blog} alt={blog} />
            </Avatar>
            <Typography component="h1" variant="h5">
              ── LOGIN ──
            </Typography>
            <Box
              component="form"
              onSubmit={handleLogin}
              noValidate
              sx={{ m: 1, display: "flex", flexDirection: "column", gap: "2" }}
            >
              <TextField
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ width: "350px" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                className="btn"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 1, backgroundColor: "white", color: "black" }}
                onClick={handleProviderLogin}
              >
                WITH &nbsp; <img src={google} style={{ width: "75px" }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
