import { Box, Typography } from "@mui/material";
import React from 'react';
import BlogCard from "../components/BlogCard"
import { useFetch } from '../helpers/functions';

const Dashboard = () => {
  const {contentList,isLoading} = useFetch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 2,
          color: "primary",
        }}
      >
        <Typography variant="h4" component="div" gutterBottom>
          ──── DASHBOARD ────
        </Typography>
      </Box>
      <div className="blog-card d-flex justify-content-center flex-wrap">
        {isLoading ? (
          <div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          contentList?.map((item, index) => <BlogCard key={index} {...item} />)
        )}
      </div>

      {/* <Grid container spacing={2}>
        <Grid item xs={8}></Grid>
      </Grid> */}
    </Box>
  );
}

export default Dashboard