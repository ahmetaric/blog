import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import placeholder from "../assets/placeholder.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MediaCard() {
  const  currentUser  = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(currentUser);
  return (
    <Card
      sx={{ maxWidth: 500, m: 17, height: 450, textAlign: "center" }}
      className="profile-card"
    >
      <CardMedia
        component="img"
        height="300"
        image={placeholder}
        alt="profile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {currentUser.email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {currentUser && (
            <>
              <h5 className="mb-0 text-capitalize text-center">
                {currentUser.displayName}
              </h5>
            </>
          )}
        </Typography>
      </CardContent>


      <CardActions className="home-button">
        <Button variant="contained" size="large" onClick={() => navigate("/")}>
          HOME
        </Button>
      </CardActions>
    </Card>
  );
}
