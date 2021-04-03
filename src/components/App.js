import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import CategoryPage from "./CategoryPage/CategoryPage";

class App extends Component {
  state = { socials: ["facebook", "instagram"] };

  render() {
    return (
      <BrowserRouter>
        <>
          <Menu />
          <Route path="/" exact component={HomePage} />
          <Route path="/category/:name" exact component={CategoryPage} />
          <Footer sites={this.state.socials} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
