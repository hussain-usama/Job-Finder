import React from "react";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchArea from "./components/SearchArea";
import JobSection from "./components/JobSection";
import "./App.css";

function App() {
  return (
    <Box sx={{ bgcolor: "#f5f6fa", minHeight: "100vh" }}>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "flex-start",
            gap: 3,
            padding:'0 1rem'
          }}
        >
          {/* Sidebar: fixed width on desktop, full width on mobile */}
          <Box sx={{ flex: "0 0 280px", minWidth: 0, width: { xs: "100%", md: 280 } }}>
            <Sidebar />
          </Box>
          {/* Main content: fills remaining space */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <SearchArea />
            <JobSection title="Featured Jobs" jobCount={4} />
            <JobSection title="Recommended Jobs" jobCount={8} />
            <JobSection title="Latest Jobs" jobCount={8} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;