import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Profile from '../assets/Profile.png'
import ProfileCover from '../assets/ProfileCover.jpg'

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 320,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Profile Card */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          bgcolor: "#fff",
          pb: 2,
          position: "relative",
        }}
      >
        {/* Cover Image */}
        <Box
          sx={{
            width: "100%",
            height: 70,
            background: `url(${ProfileCover}) center/cover no-repeat`,
            position: "relative",
          }}
        />
        {/* Avatar */}
        <Avatar
          src={Profile}
          sx={{
            width: 72,
            height: 72,
            border: "4px solid #fff",
            position: "absolute",
            top: 36,
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow: 2,
          }}
        />
        {/* Info */}
        <Box sx={{ mt: 6, textAlign: "center", px: 2 }}>
          <Typography fontWeight={600} fontSize={18}>
            Albert Flores
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 0.5,
              lineHeight: 1.3,
              fontSize: 14,
              fontWeight: 400,
              whiteSpace: "pre-line",
            }}
          >
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.5, fontSize: 13 }}
          >
            Clinton, Maryland
          </Typography>
        </Box>
      </Paper>

      {/* Stats Card */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          bgcolor: "#fff",
          p: 0,
        }}
      >
        <List disablePadding>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1.5,
              px: 2,
            }}
          >
            <ListItemText
              primary={
                <Typography fontSize={15}>Profile Visitors</Typography>
              }
            />
            <Typography color="#2563eb" fontWeight={600} fontSize={15}>
              140
            </Typography>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1.5,
              px: 2,
            }}
          >
            <ListItemText
              primary={
                <Typography fontSize={15}>Resume Viewers</Typography>
              }
            />
            <Typography color="#2563eb" fontWeight={600} fontSize={15}>
              20
            </Typography>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1.5,
              px: 2,
            }}
          >
            <ListItemText
              primary={<Typography fontSize={15}>My Jobs</Typography>}
            />
            <Typography color="#2563eb" fontWeight={600} fontSize={15}>
              88
            </Typography>
          </ListItem>
        </List>
      </Paper>

      {/* Calendar Card */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          bgcolor: "#fff",
          p: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 1.5,
            cursor: "pointer",
            justifyContent: "space-between",
          }}
          onClick={() => setOpen((o) => !o)}
        >
          <Typography fontWeight={600} fontSize={16}>
            My calendar       <br/>
             <Typography fontWeight={500} fontSize={14} color="#737A91">
              Upcoming Interviews
             </Typography>
          </Typography>
          <br/>
          <IconButton size="small" sx={{ ml: 1 }}>
            <ExpandMoreIcon
              sx={{
                transition: "0.2s",
                transform: open ? "rotate(180deg)" : "none",
              }}
            />
          </IconButton>
        </Box>
        <Collapse in={open}>
          <Box sx={{ px: 2, pb: 1.5 }}>
            <Link
              href="#"
              underline="hover"
              color="#2563eb"
              fontWeight={500}
              fontSize={15}
            >
              Upcoming Interviews
            </Link>
          </Box>
        </Collapse>
      </Paper>
    </Box>
  );
};

export default Sidebar;