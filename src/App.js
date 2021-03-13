import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import Image from "./assets/fingerpori.png";

import { ThemeProvider } from "@blend-ui/core";

import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Graphs from "./pages/Graphs";
import Error from "./pages/Error";

export const App = () => {
  return (
    <React.Fragment>
      <Router>
        <ThemeProvider>
          <Navbar />
          <Sidebar />
          <Switch>
            <Route exact path="/" exact component={Dashboard} />
            <Route path="/graphs" exact component={Graphs} />
            <Route component={Error} />
          </Switch>
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
};
