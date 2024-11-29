// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5', // Customize primary color
    },
    secondary: {
      main: '#ff4081', // Customize secondary color
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Use a modern font
  },
});

export default theme;
