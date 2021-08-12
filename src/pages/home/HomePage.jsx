import React from "react";

import ShowNewProduct from "../../layout/home-layout/show-new-product/ShowNewProduct";
import ShowCategories from "../../layout/home-layout/show-categories/ShowCategories";

const HomePage = () => {
  return (
    <div>
      <ShowNewProduct />
      <ShowCategories />
    </div>
  );
};

export default HomePage;
