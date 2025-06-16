import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import JobCard from "./JobCard";

const JobSection = ({ title, promotedCount = 2 }) => (
  <Box sx={{ mb: 2 }}>
    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
      <Typography variant="h6" fontWeight={600} sx={{ mr:1, fontSize: 18 }}>
        {title}
      </Typography>
      <Link href="#" underline="hover" sx={{ fontWeight: 500, fontSize: 15 }}>
        See {title}
      </Link>
    </Box>
    <Box>
      <Grid container spacing={{ xs: 2, md: 2 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} >
          <JobCard promoted={5 < promotedCount} />
        </Grid>
         <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} >
          <JobCard promoted={5 < promotedCount} />
        </Grid>
         <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} >
          <JobCard promoted={5 < promotedCount} />
        </Grid>
         {/* <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} >
          <JobCard promoted={5 < promotedCount} />
        </Grid>
         <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} >
          <JobCard promoted={5 < promotedCount} />
        </Grid> */}
      </Grid>
    </Box>
    {/* <Grid container spacing={{ xs: 2, md: 2 }}>
      {[...Array(5)].map((_, i) => (
        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }} >
          <JobCard promoted={i < promotedCount} />
          </Grid>
      ))}
    </Grid> */}
  </Box>
);

export default JobSection;