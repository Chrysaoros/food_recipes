import React from "react";

import "./About.css";
import foodImage from "../../food-image.jpg";
const About = () => {
  return (
    <section className="about">
      <h1 className="about-title">About Us</h1>
      <div className="team-container">
        <p className="team-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt beatae
          vero eum. Voluptates nobis dignissimos tempore ipsam obcaecati
          reiciendis saepe, eligendi aperiam officiis iure veniam, odit magni
          minus praesentium dolores enim sed nisi aliquam sint itaque dicta
          totam architecto? Accusantium error omnis at iste distinctio, itaque
          dolor ullam corporis totam, laborum ab aliquid voluptatum non aliquam
          voluptas, soluta numquam veritatis id vel nisi iure cum eius iusto.
          Enim eaque qui veritatis voluptatum quasi, corrupti hic assumenda
          dolores, asperiores ipsam ea ut ex sapiente! Dolorum, ullam corporis
          nam voluptatem corrupti necessitatibus animi quae porro id ex enim
          provident voluptates, rem autem?
        </p>
        <div className="team-image">
          <img src={foodImage} alt=""></img>
        </div>
      </div>
    </section>
  );
};

export default About;
