import React, { useState, useContext } from "react";
import Layout from "./containers/Layout/Layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Channel from "./containers/Channel/Channel";
import Login from "./containers/Login/Login";
import { StateContext } from "./context/StateProvider";

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
  const {
    state: { user },
  } = useContext(StateContext);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {user ? (
            <Layout>
              <Route path="/room/:roomId">
                <Channel />
              </Route>
            </Layout>
          ) : (
            <>
              <Route path="/">
                <Redirect to="/login" />{" "}
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
