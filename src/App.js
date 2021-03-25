import "./App.scss";
import Nav from "./Components/Nav/index";
import React from "react";
import { Route } from "react-router-dom";
import Announcement from "./Components/Announcement";

function App() {
  return (
    <section className="app">
      <Route exact path="/">
        <section className="nav-section">
          <Nav />
        </section>
        <section className="main-container">
          <Announcement />
        </section>
      </Route>
      <Route exact path="/integration">
        <section className="nav-section">
          <Nav />
        </section>
      </Route>
      <Route exact path="/contact">
        <section className="nav-section">
          <Nav />
        </section>
      </Route>
    </section>
  );
}

export default App;
