import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../actions/products";

import useStyles from "./style";

const SingleProduct = ({ product, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{product.name}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "black" }}
          size="small"
          onClick={() => setCurrentId(product._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {product.category.map((category) => `#${category} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5">
        {product.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterbottom="true"
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteProduct(product._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleProduct;
