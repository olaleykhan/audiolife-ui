import React from "react";
import { Link } from "react-router-dom";

import "./FloatingProductCard.scss";

const FloatingProductCard = () => {
  return (
    <div className="floating-product-card">
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1561175915-509343c39f6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRwaG9uZSUyMG5vJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=" product name"
        />{" "}
      </div>
      <p> HEADPHONES</p>
      <Link to="/shop/headphones">
        SHOP <span className="text-primary"> {`>`}</span>{" "}
      </Link>
    </div>
  );
};

export default FloatingProductCard;
