import mongoose from "mongoose";
import productItem from "../models/productItem.js";

export const getProduct = async (req, res) => {
  try {
    const productItems = await productItem.find();
    //console.log(productItem);
    res.status(200).json(productItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new productItem({
    ...product,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newProduct.save();
    console.log(newProduct);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.params))
    return res.status(404).send("No post with that id");

  const updatedProduct = await productItem.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(req.params))
    return res.status(404).send("No product with that id");

  await productItem.findByIdAndRemove(id);

  res.json({ message: "product deleted" });
};
