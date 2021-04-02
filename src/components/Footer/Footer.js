import React, { Component } from "react";

import ImageCard from "../ImageCard/ImageCard";
import SocialFollow from "../SocialFollow/SocialFollow";

class Footer extends Component {
  render() {
    console.log("Footer: ", this.props);
    return (
      <footer className="footer">
        <div className="logo">
          <ImageCard />
        </div>
        <div className="social-links">
          <SocialFollow sites={this.props.sites} />
        </div>
      </footer>
    );
  }
}

export default Footer;
