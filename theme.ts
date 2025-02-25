import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A7FBE", // Mediterranean blue
      light: "#4FA3D1",
      dark: "#125C8C",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F2A65A", // Warm sunset orange
      light: "#F5BC85",
      dark: "#D98A3B",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0, 0, 0, 0.05)",
    "0px 4px 8px rgba(0, 0, 0, 0.05)",
    // ... (other shadow values)
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
          borderRadius: 8,
        },
      },
    },
  },
})

export default theme

