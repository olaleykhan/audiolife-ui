import React from "react";
import BigShowcaseCard from "../../../components/big-showcase-card/BigShowcaseCard";

import "./ShowNewProduct.scss";

const ShowNewProduct = () => {
  return (
    <div className="show-new-product ">
      {/* appearance is the kind of theme for the card */}
      <BigShowcaseCard extraClass="container" appearance="dark" />
    </div>
  );
};

export default ShowNewProduct;
