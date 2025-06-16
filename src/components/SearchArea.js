import React from "react";
import { Box, Typography } from "@mui/material";
import JobSearchBar from "./JobSearchBar";
import JobTags from "./JobTags";

const SearchArea = () => (
  <Box sx={{ bgcolor: "#f5f5f5", borderRadius: 3, p: 3, mb: 2 }}>
    <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
      Find your Dream Job, <span style={{ color: "#2563eb" }}>Albert!</span>
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
      Explore the latest job openings and apply for the best opportunities available today!
    </Typography>
    <JobSearchBar />
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
        Similar:
      </Typography>
      <JobTags />
    </Box>
  </Box>
);

export default SearchArea;