import React from "react";
import { Box, TextField, Button, MenuItem, Grid, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const locations = ["Select Locations", "Seattle, USA", "Remote"];
const jobTypes = ["Job Type", "Full Time", "Part Time", "Contract"];

const searchFieldStyle = {
  backgroundColor: "#fff",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    color:'#585D6E',
    backgroundColor: "#fff",
    "& fieldset": {
      borderColor: "#fff",
    },
     "& input::placeholder": {
      color: "#585D6E",
    }
  }
}
const JobSearchBar = () => (
  <Box sx={{ bgcolor: "#fff", borderRadius: 3, p: 3, boxShadow: 1, mb: 2 }}>
    <Grid container spacing={2} alignItems="center">
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} >

        <TextField
          fullWidth
          placeholder="Job Title, Company, or Keywords"
          variant="outlined"
          size="small"
          sx={searchFieldStyle}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2, lg: 2, xl: 2 }}>
        <TextField
          select
          fullWidth
          defaultValue={locations[0]}
          variant="outlined"
          size="small"
          sx={searchFieldStyle}
        >
          {locations.map((loc) => (
            <MenuItem key={loc} value={loc}>{loc}</MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2, lg: 2, xl: 2 }}>
        <TextField
          select
          fullWidth
          defaultValue={jobTypes[0]}
          variant="outlined"
          size="small"
          sx={searchFieldStyle}
        >
          {jobTypes.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2, lg: 2, xl: 2 }}>
        <Button variant="contained" fullWidth sx={{ height: "40px", borderRadius: '8px', bgcolor: "#0154AA", textTransform: "none", padding: '0 2rem', fontWeight: '500', fontSize: '14px' }}>
          <IconButton size="small">
            <SearchIcon sx={{ color: "#fff" }} />
          </IconButton>
          Search
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default JobSearchBar;