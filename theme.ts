import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            outline: "1px solid slategrey",
          },
          background: "url(/assets/images/backgrpund.png)",
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "black",
            opacity: 0.8,
            zIndex: -1,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
          color: "#fff",
        },
        h4: {
          fontWeight: "bold",
          color: "#fff",
          textTransform: "uppercase",
          lineHeight: 1,
          fontSize: 32,
        },
        h5: {
          fontWeight: "bold",
          color: "#fff",
        },
        h6: {
          fontWeight: "bold",
        },
        subtitle2: {
          fontSize: "16px",
        },
      },
    },
  },
});

export default theme;
