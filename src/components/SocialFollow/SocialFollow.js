import React from "react";

import "./SocialFollow.css";

const SocialFollow = (props) => {
  console.log(props);
  const sites = props.sites.map((site) => {
    return (
      <div key={site} className={`${site} social`}>
        <a href="/" target="_blank">
          <i className={`fab fa-${site} fa-2x`}></i>
        </a>
      </div>
    );
  });

  return <div className="socials-container">{sites}</div>;
};

export default SocialFollow;
