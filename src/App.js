import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchArea from "./components/SearchArea"; // New: combines welcome, search bar, tags
import JobSection from "./components/JobSection";
import "./App.css";

function App() {
  return (
    <Box>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={3} sx={{ padding: '1rem' }}>
          {/* Sidebar and SearchArea side by side */}
          <Grid item xs={12} md={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={10}>
            <SearchArea />
            <JobSection title="Featured Jobs" />
          </Grid>
        </Grid>
        {/* Job sections below */}
        {/* <Box sx={{ mt: 3,padding: '1rem' }} >
          <JobSection title="Featured Jobs" />
          <JobSection title="Recommended Jobs" />
          <JobSection title="Latest Jobs" />
        </Box> */}
      </Container>
    </Box>
  );
}

export default App;