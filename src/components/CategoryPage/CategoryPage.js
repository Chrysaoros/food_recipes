import React, { Component } from "react";

import "./CategoryPage.css";
import ImageCard from "../ImageCard/ImageCard";

class CategoryPage extends Component {
  state = {
    categoryName: "",
    recommendedMeal: { id: null, name: "", imgSrc: "" },
  };

  componentDidMount() {
    const category = window.location.pathname.split("/")[2];
    this.setState({ categoryName: category });

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        const {
          idMeal: id,
          strMeal: name,
          strMealThumb: imgSrc,
        } = data.meals[0];

        this.setState({ recommendedMeal: { id, name, imgSrc } });
      });
  }

  render() {
    return (
      <>
        <section className="header recommendation">
          <h1>{this.state.categoryName}</h1>
          <p>Our Recommendation</p>
          <ImageCard src={this.state.recommendedMeal.imgSrc} />
          <p>{this.state.recommendedMeal.name}</p>
        </section>
      </>
    );
  }
}

export default CategoryPage;
