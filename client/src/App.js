import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getProducts } from "./actions/products";
import Products from "./components/Products/Products";
import NewProductForm from "./components/NewProductForm/NewProductForm";
import logo from "./images/logo.png";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} varaint="h2" align="center">
          Product Website
        </Typography>
        <img
          className={classes.image}
          src={logo}
          alt="Company-Logo"
          height="60"
          width="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Products />
            </Grid>
            <Grid item xs={12} sm={4}>
              <NewProductForm />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
