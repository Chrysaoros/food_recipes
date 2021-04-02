import React from "react";

import "./ImageCard.css";
import foodImage from "../../food-image.jpg";

const ImageCard = (props) => {
  return (
    <div className="card">
      <img
        src={props.src ? props.src : foodImage}
        alt="various food on a table"
      ></img>
    </div>
  );
};

export default ImageCard;
