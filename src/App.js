import "./App.scss";
import Nav from "./Components/Nav/index";
import React from "react";
import { Route } from "react-router-dom";
import Announcement from "./Components/Announcement";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <section className="app">
      <div className="background-gradient-container">
        <Route exact path="/">
          <section className="nav-section">
            <Nav />
          </section>
          <section className="main-container">
            <div className="openning-container">
              <Announcement />
            </div>
            <section className="footer-container">
              <Footer />
            </section>
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
          <section className="main-container-contact">
            <Contact />
          </section>
        </Route>
      </div>
    </section>
  );
}

export default App;
