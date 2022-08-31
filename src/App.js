import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components/export";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
      <p
        style={{
          textAlign: "center",
          fontSize: "14px",
          color: "grey",
          fontFamily: "sans-serif",
        }}
      >
        Made by <a href="www.dmalvi2002.com">Dmalvi2002.</a> Still in
        development.
      </p>
    </BrowserRouter>
  );
};

export default App;
