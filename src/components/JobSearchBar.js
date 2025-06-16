import React from "react";
import { Box, TextField, Button, MenuItem, Grid } from "@mui/material";

const locations = ["All Locations", "Seattle, USA", "Remote"];
const jobTypes = ["All Types", "Full Time", "Part Time", "Contract"];

const JobSearchBar = () => (
  <Box sx={{ bgcolor: "#fff", borderRadius: 3, p: 3, boxShadow: 1, mb: 2 }}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={5}>
        <TextField
          fullWidth
          placeholder="Job Title, Company, or Keywords"
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <TextField
          select
          fullWidth
          defaultValue={locations[0]}
          variant="outlined"
          size="small"
        >
          {locations.map((loc) => (
            <MenuItem key={loc} value={loc}>{loc}</MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={6} md={2}>
        <TextField
          select
          fullWidth
          defaultValue={jobTypes[0]}
          variant="outlined"
          size="small"
        >
          {jobTypes.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} md={2}>
        <Button variant="contained" fullWidth sx={{ height: "40px", bgcolor: "#2563eb" }}>
          Search
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default JobSearchBar;