import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  brand: {
    type: String,
    //required: true,
  },
  category: [String],
  description: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    //required: true,
    default: 0,
  },
});

const productItem = mongoose.model("productItem", productSchema);

export default productItem;
