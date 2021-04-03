import React, { Component } from "react";

import "./Footer.css";
import ImageCard from "../ImageCard/ImageCard";
import SocialFollow from "../SocialFollow/SocialFollow";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="logo">
          <ImageCard />
        </div>
        <div className="copyright">Copyright 2020 - Stefan Stojanović</div>
        <div className="social-links">
          <SocialFollow sites={this.props.sites} />
        </div>
      </footer>
    );
  }
}

export default Footer;
