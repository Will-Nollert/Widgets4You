import axios from "axios";

const url = "http://localhost:5000/products";
//change URL to "https://widgets4you.herokuapp.com/products" and then deploy the react app on Nelify when done

export const fetchProducts = () => axios.get(url);
export const createProduct = (newProduct) => axios.post(url, newProduct);
export const updateProduct = (id, updatedProduct) =>
  axios.patch(`${url}/${id}`, updatedProduct);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);
export const likeProduct = (id) => axios.patch(`${url}/${id}/likeProduct`);
