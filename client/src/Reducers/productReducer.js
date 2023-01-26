import { ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCT } from "../Actions/Types";

const productReducer = (state = { products: [] }, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, payload] };
    case GET_PRODUCTS:
      return { ...state, products: payload };
    case GET_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};
export default productReducer;
