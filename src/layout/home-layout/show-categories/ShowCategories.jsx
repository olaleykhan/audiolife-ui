import React from "react";
import FloatingProductCard from "../../../components/floating-product-card/FloatingProductCard";

import "./ShowCategories.scss";

const ShowCategories = () => {
  return (
    <div className="show-categories container">
      <FloatingProductCard />
      <FloatingProductCard />
      <FloatingProductCard />
    </div>
  );
};

export default ShowCategories;
