import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../consants/actionTypes.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default (products = [], action) => {
  switch (action.type) {
    case DELETE:
      return products.filter((product) => product._id !== action.payload);
    case UPDATE:
    case LIKE:
      return products.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...products, action.payload];
    default:
      return products;
  }
};
