import React from "react";
import { Box, Typography } from "@mui/material";
import JobSearchBar from "./JobSearchBar";
import JobTags from "./JobTags";

const SearchArea = () => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h5" fontWeight={600} sx={{ mb: 1,  mt: { xs: 2, sm: 2,md:0 }, }}>
      Find your Dream Job, <span style={{ color: "#0154AA" }}>Albert!</span>
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
      Explore the latest job openings and apply for the best opportunities available today!
    </Typography>
    <JobSearchBar />
    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
      <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
        Similar:
      </Typography>
      <JobTags />
    </Box>
  </Box>
);

export default SearchArea;