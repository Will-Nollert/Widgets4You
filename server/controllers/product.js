import productItem from "../models/productItem.js";

export const getProduct = async (req, res) => {
  try {
    const productItems = await productItem.find();
    console.log(productItem);
    res.status(200).json(productItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new productItem(product);

  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.ststus(409).json({ message: error.message });
  }
};
