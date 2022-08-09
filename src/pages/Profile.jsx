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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={placeholder}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {currentUser.displayName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Not Found
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Email
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {currentUser.email}
        </Typography>
      </CardContent>
      <CardActions className="home-button">
        <Button size="large" onClick={() => navigate("/")}>
          HOME
        </Button>
      </CardActions>
    </Card>
  );
}
