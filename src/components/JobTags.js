import React from "react";
import { Box, Chip } from "@mui/material";

const tags = ["Frontend", "Backend", "Graphic Designer"];

const JobTags = () => (
  <Box>
    {tags.map((tag) => (
      <Chip
        onClick={() => console.log(`Clicked on tag: ${tag}`)}
        key={tag}
        label={tag}
        variant="outlined"
        sx={{
          mr: 1,
          mb: 1,
          fontWeight: 500,
          fontSize: 15,
          borderColor: "#bdbdbd",
          color: "#737A91",
          bgcolor: "transparent",
          borderRadius: "6px",
          padding:'2px',
          height: 36,
        }}
      />
    ))}
  </Box>
);

export default JobTags;