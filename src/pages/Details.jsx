import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import placeholder from "../assets/placeholder.png";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFetch,DeleteUser } from "../helpers/functions";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "../contexts/AuthContext";

const Details = ({}) => {
  const navigate = useNavigate();
  const { isLoading, contentList } = useFetch();
  const currentUser = useContext(AuthContext);
  const { state } = useLocation();
  const handleDelete = ()=>{
    DeleteUser(state.id)
    navigate("/");
  }

  // console.log("currentUser", currentUser.email);
  // console.log("state", state.email);

  return (
    <div className="details-container">
      <Box
        sx={{
          m: 1,
          color: "primary",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          className="details-h4"
        >
          ─── DETAILS ───
        </Typography>
        {isLoading ? (
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell colSpan={5} align="center">
              <div className="spinner-border text-primary m-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          <Card sx={{ width: 600, mt: 3 }} className="card-content">
            <CardHeader />

            {state.img ? (
              <CardMedia component="img" height="500" image={state.img} />
            ) : (
              <CardMedia
                component="img"
                height="194"
                image={placeholder}
                alt={state.title}
              />
            )}

            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "1.2rem",
                  color: "black",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                {state.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {state.content}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "1.2rem",
                  color: "black",
                }}
              >
                <AccountCircleRoundedIcon /> {state.email}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>{" "}
              0
              <IconButton aria-label="add to favorites">
                <ModeCommentOutlinedIcon />
              </IconButton>{" "}
              0
            </CardActions>
          </Card>
        )}

        {state.email === currentUser.email && (
          <Stack
            direction="row"
            spacing={2}
            sx={{ m: 4, justifyContent: "center" }}
          >
            <Button variant="outlined">UPDATE</Button>
            <Button
              onClick={handleDelete}
              variant="contained"
              color="error"
              endIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Stack>
        )}
      </Box>
    </div>
  );
};

export default Details;
