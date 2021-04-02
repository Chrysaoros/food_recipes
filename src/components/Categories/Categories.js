import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Categories.css";
import ImageCard from "../ImageCard/ImageCard";

class Categories extends Component {
  render() {
    console.log("Categories: ", this.props);
    const categoryArr = this.props.categories.map(
      ({
        idCategory: id,
        strCategory: category,
        strCategoryThumb: thumbnail,
      }) => {
        return (
          <Link to={`/category/${category}`} key={id}>
            <ImageCard src={thumbnail} />
            <h3 className="category-name">{category}</h3>
          </Link>
        );
      }
    );

    return (
      <section id="categories" className="section category">
        {categoryArr}
      </section>
    );
  }
}

export default Categories;
