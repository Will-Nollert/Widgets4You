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
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../actions/products";

import useStyles from "./style";

const SingleProduct = ({ product, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2">
          {moment(product.createdAt).fromNow()}
        </Typography>
      </div>

      <div className={classes.overlay2}></div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          categories: {product.category.map((category) => `${category} `)}
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
        {(user?.result?.googleId === product?.creator ||
          user?.result?._id === product?.creator) && (
          <div className={classes.overlay2}>
            <Button
              onClick={() => setCurrentId(product._id)}
              style={{ color: "black" }}
              size="small"
            >
              <MoreHorizIcon fontSize="small" />
            </Button>
          </div>
        )}
        {(user?.result?.googleId === product?.creator ||
          user?.result?._id === product?.creator) && (
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deleteProduct(product._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default SingleProduct;
