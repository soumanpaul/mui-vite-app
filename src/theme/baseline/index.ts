import { Components, Theme } from "@mui/material/styles";

const baselineTheme: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
    },
  },
};
