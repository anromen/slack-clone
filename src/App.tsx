import React from "react";
import Chat from "./containers/Chat/Chat";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(53, 13, 54)",
    },
    secondary: {
      light: "#FFF",
      main: "#D5D3D2",
    },
  },

  typography: {
    fontFamily: "Lato",
    fontSize: 12,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Chat />
    </ThemeProvider>
  );
}

export default App;
