import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../consants/actionTypes.js";
import * as api from "../api/index";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(product);
    dispatch({ type: CREATE, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};

export const updateProduct = (id, Product) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, Product);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
