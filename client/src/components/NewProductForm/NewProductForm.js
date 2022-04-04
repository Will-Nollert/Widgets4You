import React, { useState, useEffect } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createProduct } from "../../actions/products";
import { useSelector } from "react-redux";
import { updateProduct } from "../../api";

const Form = ({ currentId, setCurrentId }) => {
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    brand: "",
    category: "",
    description: "",
    price: "",
    countInStock: "",
  });
  const product = useSelector((state) =>
    currentId ? state.products.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) setProductData(product);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateProduct(currentId, productData));
    } else {
      dispatch(createProduct(productData));
    }
  };

  const clear = () => {
    //setCurrentId(null);
    setProductData({
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
          {currentId ? "Editing" : "Upload"} A Product
        </Typography>
        <TextField
          name="productName"
          variant="outlined"
          label="Product Name"
          fullWidth
          value={productData.name}
          onChange={(e) =>
            //spreads in the change that way the text field is not over written every time there is a submission
            setProductData({ ...productData, name: e.target.value })
          }
        />
        <TextField
          name="price"
          variant="outlined"
          label="Price"
          fullWidth
          value={productData.price}
          onChange={(e) =>
            //spreads in the change that way the text field is not over written every time there is a submission
            setProductData({ ...productData, price: e.target.value })
          }
        />
        <TextField
          name="brand"
          variant="outlined"
          label="Brand"
          fullWidth
          value={productData.brand}
          onChange={(e) =>
            //spreads in the change that way the text field is not over written every time there is a submission
            setProductData({ ...productData, brand: e.target.value })
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
          label="categories: 'Fitness,Formal,Sleep...'"
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
