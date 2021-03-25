import "./App.scss";
import Nav from "./Components/Nav/index";
import React from "react";
import { Route } from "react-router-dom";

function App() {
  return (
    <section className="app">
      <section className="nav-section">
        <Nav />
      </section>
      <section className="main-container"></section>
    </section>
  );
}

export default App;
