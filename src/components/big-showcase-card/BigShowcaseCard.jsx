import React from "react";

import Btn from "../ui/btn/Btn";
import "./BigShowcaseCard.scss";

const BigShowcaseCard = (props) => {
  return (
    <div
      className={`big-showcase-card ${props.appearance} ${props.extraClass}`}
    >
      <div className="content">
        <span> NEW PRODUCT</span>
        <h2> {props.title ? props.title : "title is missing"} title is here</h2>
        <p>
          {props.children
            ? props.children
            : "na here the description suppose dey, but you no pass anything in. no be me cause am na here the description suppose dey, but you no pass anything in. no be me cause am"}
        </p>
        <Btn type="orange"> SEE PRODUCTS</Btn>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1612444530582-fc66183b16f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=" New product"
        />
      </div>
    </div>
  );
};

export default BigShowcaseCard;
