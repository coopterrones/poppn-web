import "./App.scss";
import Nav from "./Components/Nav/index";
import React from "react";
import { Route } from "react-router-dom";
import Announcement from "./Components/Announcement";

function App() {
  return (
    <section className="app">
      <section className="nav-section">
        <Nav />
      </section>
      <section className="main-container">
        <Announcement />
      </section>
    </section>
  );
}

export default App;
