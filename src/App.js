import "./App.scss";
import Nav from "./Components/Nav/index";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <section className="App">
        <section className="nav-section">
          <Nav />
        </section>
      </section>
    </BrowserRouter>
  );
}

export default App;
