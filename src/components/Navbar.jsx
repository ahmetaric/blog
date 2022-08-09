import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import clarusway from "../assets/cw.jpeg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Login from "../pages/Login";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";
import {useContext} from "react";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Login", "Register"];

const hover = {
  "&:hover": {
    backgroundColor: "rgb(7, 177, 77, 0.42)",
  },
};

const Navbar = () => {
  // const currentUser = { displayName: "yasin gultekin" };
  // // const currentUser = false;

  const currentUser = useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        // mr: 2,
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            mr: 2,
            // display: "flex",
            // justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "50px", height: "75px" }} component="a" href="/">
            <img
              src={clarusway}
              alt="a"
              style={{ width: "50px", height: "50px", marginTop: "1rem" }}
            />
          </Box>

          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              // mr: 2,
              // display: { xs: "none", md: "flex" },
              // justifyContent: "center",
              // textAlign: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {` <gultekin/> Blog`}
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <IconButton
              // size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: "flex",
              alignItems:"center",
              // flexGrow: { xs: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {`--- <ahmet/> Blog ---`}
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box> */}
          <div className="d-flex text white align-items-center">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize">
                  {currentUser.displayName}
                </h5>
                <Box sx={{ flexGrow: 0 }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ pr: 0 }}>
                    <AccountCircleIcon />
                  </IconButton>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "5rem",
                      }}
                    >
                      <NavLink to="profile" style={{ textDecoration: "none" }}>
                        <Typography textAlign="center" m=".5rem">
                          Profile
                        </Typography>
                      </NavLink>
                      <NavLink to="newblog" style={{ textDecoration: "none" }}>
                        <Typography textAlign="center" mb=".5rem">
                          New
                        </Typography>
                      </NavLink>
                      <NavLink to="login" style={{ textDecoration: "none" }}>
                        <Typography
                          textAlign="center"
                          mb=".5rem"
                          onClick={() => logOut()}
                        >
                          Logout
                        </Typography>
                      </NavLink>
                    </Box>
                    {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
                  </Menu>
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ flexGrow: 0 }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ pr: 0 }}>
                    <AccountCircleIcon />
                  </IconButton>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "5rem",
                      }}
                    >
                      <NavLink to="login" style={{ textDecoration: "none" }}>
                        <Typography textAlign="center" m=".5rem">
                          Login
                        </Typography>
                      </NavLink>
                      <NavLink to="register" style={{ textDecoration: "none" }}>
                        <Typography textAlign="center">Register</Typography>
                      </NavLink>
                    </Box>
                    {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
                  </Menu>
                </Box>
              </>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;