import "./App.scss";
import Nav from "./Components/Nav/index";
import React from "react";
import { Route } from "react-router-dom";
import Announcement from "./Components/Announcement";
import MainImage from "./Components/MainImage/index";
function App() {
  return (
    <section className="App">
      <section className="nav-section">
        <Nav />
      </section>
      <section className="main-container">
        <Route exact path="/">
          <Announcement />
          <MainImage />
        </Route>
      </section>
    </section>
  );
}

export default App;
