import "./App.scss";
import Nav from "./Components/Nav/index";
import React from "react";
import { Route } from "react-router-dom";
import Announcement from "./Components/Announcement";
import Descriptive from "./Components/Descriptive";
import ScreenDemoLeft from "./Components/ScreenDemoLeft";
import ScreenDemoRight from "./Components/ScreenDemoRight";
import registerScreen from "./Assets/register-placeholder.png";
import paymentUpload from "./Assets/payment-upload-placeholder.png";
import browseScreen from "./Assets/browse-placeholder.png";
import orderScreen from "./Assets/order-placeholder.png";
import splitScreen from "./Assets/split-screen.png";
import payAloneScreen from "./Assets/pay-alone-screen.png";
import Contact from "./Components/Contact";

function App() {
  return (
    <section className="app">
      <Route exact path="/">
        <section className="nav-section">
          <Nav />
        </section>
        <section className="main-container">
          <Announcement />
          <Descriptive />
          <ScreenDemoLeft
            header="Register"
            contents="Download our app and register."
            image={registerScreen}
            position={"150vh"}
          />
          <ScreenDemoRight
            header="Upload Your Form of Payment"
            contents="In a few easy steps, you will be able to close out seamlessly from your favorite venues"
            image={paymentUpload}
            position={"225vh"}
          />
          <ScreenDemoLeft
            header="Browse Your Local Venues"
            contents="Don't let heavy crowds get in your way."
            image={browseScreen}
            position={"300vh"}
          />
          <ScreenDemoRight
            header="Order for your party"
            contents="Order ahead. Order as you go. Poppn is your personal barback."
            image={orderScreen}
            position={"375vh"}
          />
          <ScreenDemoLeft
            header="Split Your Tab"
            contents="Easily divide your tab amongst your friends."
            image={splitScreen}
            position={"450vh"}
          />
          <ScreenDemoRight
            header="Pay Alone"
            contents="Or... Make Kevin pay it."
            image={payAloneScreen}
            position={"525vh"}
          />
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
    </section>
  );
}

export default App;
