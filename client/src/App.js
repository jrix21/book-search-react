import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

//Main Page Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

//Other Pages
import Saved from "./pages/Saved";
import Books from "./pages/Books";

//App Starts
function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/Books" component={Books} />
        <Route path="/Saved" component={Saved} />
        <Redirect from="/" exact to="/search" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
