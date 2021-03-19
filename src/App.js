import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



// components
import Navibar from "./components/Navibar";
import Footer from "./components/Footer";

import Home from "./Home";
import Contacts from "./Contacts";
import News from "./New";
import Products from "./Products";
import Services from "./Services";

function App() {
  return (
    <>
      <Router>
        <Navibar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
