import React from "react";
import SingleProduct from "./SingleProduct/SingleProduct";
import useStyles from "./styles";

const Products = () => {
  const classes = useStyles();

  return (
    <>
      <div>Products</div>
      <SingleProduct />
      <SingleProduct />
    </>
  );
};

export default Products;
