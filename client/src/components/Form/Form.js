import React, { useState, useEffect } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";

const Form = ({ currentId, setCurrentId }) => {
  const [productData, setProductData] = useState({
    user: "",
    name: "",
    image: "",
    brand: "",
    category: "",
    description: "",
    price: "",
    countInStock: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setProductData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, productData));
    } else {
      dispatch(createPost(productData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setProductData({
      user: "",
      name: "",
      image: "",
      brand: "",
      category: "",
      description: "",
      price: "",
      countInStock: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Submit"} A Product
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={productData.user}
          onChange={(e) =>
            //spreads in the change that way the text field is not over written every time there is a submission
            setProductData({ ...productData, user: e.target.value })
          }
        />
        <TextField
          name="product_title"
          variant="outlined"
          label="Product_Title"
          fullWidth
          value={productData.title}
          onChange={(e) =>
            //spreads in the change that way the text field is not over written every time there is a submission
            setProductData({ ...productData, title: e.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="description"
          fullWidth
          value={productData.description}
          onChange={(e) =>
            //spreads in the change that way the text field is not over written every time there is a submission
            setProductData({ ...productData, description: e.target.value })
          }
        />
        <TextField
          name="category"
          variant="outlined"
          label="category"
          fullWidth
          value={productData.category}
          onChange={(e) =>
            //spreads in the change that way the text field is not over written every time there is a submission
            setProductData({
              ...productData,
              category: e.target.value.split(","),
            })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setProductData({ ...productData, image: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
