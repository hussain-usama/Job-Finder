import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  Link,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TeamsIcon from '../assets/TeamsIcon.png'
const JobCard = ({ promoted }) => (
  <Card
    sx={{
      borderRadius: 3,
      boxShadow: "0 2px 8px 0 rgba(60,72,88,0.06)",
      border: "1px solid #eee",
      minHeight: 210,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      bgcolor: "#fff",
    }}
  >
    <CardContent sx={{ pb: "16px!important" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        {promoted && (
           <Typography fontSize={12} fontWeight={600}>
            Promoted
          </Typography>
        )}
      </Box>
      <Box sx={{ display: "flex" }}>
        <img src={TeamsIcon} width="40px" height="40px" alt="Home" />
        <Typography fontSize={16} style={{ marginLeft:'10px'}}>
          UI/UX Designer
          <br />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: 14 }}>
            Teams
          </Typography>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <LocationOnIcon sx={{ fontSize: 16, color: "#888", mr: 0.5 }} />
        <Typography variant="body2" color="text.secondary" fontSize={13}>
          Seattle, USA (Remote)
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <AccessTimeIcon sx={{ fontSize: 16, color: "#888", mr: 0.5 }} />
        <Typography variant="body2" color="text.secondary" fontSize={13}>
          1 day ago
        </Typography>
        <GroupIcon sx={{ fontSize: 16, color: "#888", ml: 2, mr: 0.5 }} />
        <Link href="#" underline="hover" color="#2563eb" fontSize={13}>
          22 applicants
        </Link>
      </Box>
    </CardContent>
    <Box sx={{ display: "flex", alignItems: "center", px: 2, pb: 2 }}>
      <Button
        variant="contained"
        size="small"
        sx={{
          bgcolor: "#0154AA",
          flexGrow: 1,
          fontWeight: 500,
          fontSize: 12,
          borderRadius: 2,
          boxShadow: "none",
          textTransform: "none",
          padding:'8px 0 ',
          "&:hover": { bgcolor: "#2563eb" },
        }}
      >
        Apply Now
      </Button>
      <IconButton sx={{ ml: 1, color: "#888" }}>
        <BookmarkBorderIcon />
      </IconButton>
    </Box>
  </Card>
);

export default JobCard;