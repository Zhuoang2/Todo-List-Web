import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          To-Do List
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="toggle dark mode"
        >
          {darkMode ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


