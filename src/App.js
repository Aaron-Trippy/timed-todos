import React from "react";
import Playlist from "./components/Playlist";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AppBar position="static" style={{ marginBottom: 20 }}>
        <Toolbar>
          <Typography variant="h6">Task Management App</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Playlist />
      </Container>
    </div>
  );
}
