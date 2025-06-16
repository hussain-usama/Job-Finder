import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import JobCard from "./JobCard";

const JobSection = ({ title, promotedCount = 2 }) => (
  <Box sx={{ mb: 4 }}>
    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
      <Typography variant="h6" fontWeight={600} sx={{ mr:1, fontSize: 18 }}>
        {title}
      </Typography>
      <Link href="#" underline="hover" sx={{ fontWeight: 500, fontSize: 15 }}>
        See {title}
      </Link>
    </Box>
    <Grid
      container
      spacing={2}
      sx={{
        '@media (min-width:1200px)': { maxWidth: '100%' },
      }}
    >
      {[...Array(5)].map((_, i) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          key={i}
          sx={{
            flexBasis: { xs: '100%', sm: '50%', md: '33.33%', lg: '25%' },
            maxWidth: { xs: '100%', sm: '50%', md: '33.33%', lg: '25%' },
            display: 'flex',
          }}
        >
          <JobCard promoted={i < promotedCount} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default JobSection;