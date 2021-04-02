import React, { Component } from "react";

import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import About from "../About/About";
import Contact from "../Contact/Contact";

class HomePage extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data.categories }));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Categories categories={this.state.categories} />
        <About />
        <Contact />
      </React.Fragment>
    );
  }
}

export default HomePage;
