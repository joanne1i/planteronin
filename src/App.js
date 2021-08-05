import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CurrentPlants from "./components/pages/CurrentPlants";
import Blog from "./components/pages/Blog";
import Sidebar from "./components/Sidebar";
import About from "./components/pages/About";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/current-plants" component={CurrentPlants} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>

      {/* <ScrollLink
        to="example-destination"
        spy={true}
        smooth={true}
        duration={500}
        className="some-class"
        activeClass="some-active-class"
      >
        Link Text Goes Here
      </ScrollLink> */}
    </>
  );
}

export default App;
