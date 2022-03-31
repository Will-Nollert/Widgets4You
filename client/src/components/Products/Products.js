import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct/SingleProduct";
import useStyles from "./styles";

const Products = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.products);
  console.log(products);

  return (
    <>
      <div>Products</div>
      <SingleProduct />
      <SingleProduct />
    </>
  );
};

export default Products;
