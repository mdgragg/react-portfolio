import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Navigation from "./components/Navigation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
          <Navigation />
          <Switch>
            <Route path="/react-portfolio" component={Home} exact />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/skills" component={Skills} />
          </Switch>
          <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
