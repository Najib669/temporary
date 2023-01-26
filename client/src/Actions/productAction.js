import { ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCT } from "./Types";
import { useDispatch } from "react-redux";
import axios from "axios";

export const addProduct = (newproduct) => (dispatch) => {
  axios
    .post("http://localhost:8080/products/newproduct", newproduct)
    .then(({ data }) =>
      dispatch({
        type: ADD_PRODUCT,
        payload: data,
      })
    )
    .catch((err) => alert("ERROR IN ADD NEW USER"));
};

export const getProducts = () => (dispatch) => {
  axios.get("http://localhost:8080/products/").then(
    ({ data }) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      })
    //.catch((err)=>{alert("ERROR IN GET USERS")})
  );
};

//get one product
export const getProduct = (id) => (dispatch) => {
  axios.get(`http://localhost:8080/products/${id}`).then(({ data }) =>
    dispatch({
      type: GET_PRODUCT,
      payload: data,
    })
  );
};
//delete product by id
export const deleteProduct = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/products/${id}`);
  dispatch({
    type: "DELETE",
  });

  dispatch(getProducts());
};