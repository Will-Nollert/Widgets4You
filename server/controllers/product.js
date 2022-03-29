import ProductItem from "../models/productItem.js";

export const getProduct = async (req, res) => {
  try {
    const productItem = await ProductItem.find();
    res.status(200).json(productItem);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new ProductItem(product);

  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.ststus(409).json({ message: error.message });
  }
};
