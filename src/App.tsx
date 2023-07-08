import  { useMemo, useState } from "react";
import {
  Box,
  createTheme,
  CssBaseline,
  IconButton,
  PaletteMode,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Brightness7";
import { blue, orange, pink, red } from "@mui/material/colors";

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: blue,
    secondary: pink,
  },
};

const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: red,
    secondary: orange,
  },
};

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {theme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
          </IconButton>
        </Box>
      </ThemeProvider>
  );
}

export default App;