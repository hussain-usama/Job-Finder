import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import JobCard from "./JobCard";

const JobSection = ({ title, promotedCount = 2, jobCount=4 }) => (
  <Box sx={{ mb: 4 }}>
    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
      <Typography variant="h6" fontWeight={500} sx={{  fontSize: 18, mr:"10px" }}>
        {title}
      </Typography>
        <Link href="#" underline="" sx={{ fontWeight: 500, fontSize: 15 , color:'#0154AA' }}>
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
      {[...Array(jobCount)].map((_, i) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          key={i}
          sx={{
            flexBasis: { xs: '100%', sm: '48%', md: '33.8%', lg: '23.8%'  },
            // maxWidth: { xs: '100%', sm: '50%', md: '33.8%', lg: '23.8%'  },
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