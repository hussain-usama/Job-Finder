import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  "Find Jobs",
  "Top Companies",
  "Job Tracker",
  "My Calendar",
  "Documents",
  "Messages",
  "Notifications",
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: "#eee" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="https://i.imgur.com/6VBx3io.png" alt="Logo" style={{ width: 36, marginRight: 16 }} />
            {/* Desktop Nav */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#222", textTransform: "none", fontWeight: 500, mx: 0.5 }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Search bar: show on md+ */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", bgcolor: "#f5f6fa", px: 2, borderRadius: 2, mr: 2 }}>
              <InputBase placeholder="Search…" sx={{ ml: 1, flex: 1 }} />
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            </Box>
            <Button variant="contained" sx={{ bgcolor: "#2563eb", mr: 2, textTransform: "none" }}>
              Resume Builder
            </Button>
            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
            {/* Hamburger menu: show on xs/sm */}
            <IconButton
              sx={{ ml: 1, display: { xs: "inline-flex", md: "none" } }}
              onClick={handleDrawerToggle}
              aria-label="open navigation"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for mobile nav */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <Box sx={{ width: 240 }} role="presentation" onClick={handleDrawerToggle}>
          <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <img src="https://i.imgur.com/6VBx3io.png" alt="Logo" style={{ width: 36, marginRight: 8 }} />
            <Typography variant="h6" fontWeight={700}>Menu</Typography>
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem button key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;