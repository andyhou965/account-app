import React from "react";
import "./Card.css";

// 创建Warpper Component
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
