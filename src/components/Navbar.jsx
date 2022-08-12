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
import AdbIcon from "@mui/icons-material/Adb";
import clarusway from "../assets/cw.jpeg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Login from "../pages/Login";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { logOut } from "../helpers/firebase";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Login", "Register"];

const hover = {
  "&:hover": {
    backgroundColor: "rgb(7, 177, 77, 0.42)",
  },
};

const Navbar = () => {
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

  const handleLogOut = () => {
    logOut(navigate);
  };

  return (
    <AppBar
      className="appBar"
      sx={{
        backgroundColor: "warning",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="toolbar">
          <Box
            sx={{ width: "50px", height: "75px" }}
            component="a"
            onClick={() => navigate("/")}
          >
            <img
              src={clarusway}
              alt="clarusway"
              style={{ width: "50px", height: "50px", marginTop: "1rem" }}
            />
          </Box>

          <Typography
            variant="h5"
            noWraps
            // component="a"
            onClick={() => navigate("/")}
            sx={{
              fontFamily: "Girassol",
              color: "inherit",
              textDecoration: "none",
              fontSize: "3rem",
            }}
          >
            {`--- <ahmet/> Blog ---`}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (
                <>
                  <div>
                    <MenuItem>
                      <Typography
                        onClick={() => navigate("about")}
                        textAlign="center"
                      >
                        About
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography
                        onClick={() => navigate("newblog")}
                        textAlign="center"
                      >
                        New Blog
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography
                        onClick={() => navigate("profile")}
                        textAlign="center"
                      >
                        Profile
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography onClick={handleLogOut} textAlign="center">
                        Logout
                      </Typography>
                    </MenuItem>
                  </div>
                </>
              ) : (
                <div>
                  <MenuItem>
                    <Typography
                      onClick={() => navigate("/login")}
                      textAlign="center"
                    >
                      Login
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography
                      onClick={() => navigate("/register")}
                      textAlign="center"
                    >
                      Register
                    </Typography>
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
