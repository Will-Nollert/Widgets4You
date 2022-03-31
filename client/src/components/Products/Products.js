import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import SingleProduct from "./SingleProduct/SingleProduct";
import useStyles from "./styles";

const Products = ({ setCurrentId }) => {
  const products = useSelector((state) => state.products);
  console.log(products);
  const classes = useStyles();

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {products.map((product) => (
        <Grid key={product._id} item xs={12} sm={6} md={6}>
          <SingleProduct product={product} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
