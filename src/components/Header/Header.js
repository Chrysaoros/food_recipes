import React from "react";

import ImageCard from "../ImageCard/ImageCard";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section className="section header">
        <div className="app-description">
          <h1>Food recipes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            quisquam quam esse fuga eum expedita suscipit facilis. Corporis,
            officiis optio.
          </p>
          <a href="#categories" className="category-link">
            Categories
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>

        <div className="food-image">
          <ImageCard />
        </div>
      </section>
    </div>
  );
};

export default Header;
