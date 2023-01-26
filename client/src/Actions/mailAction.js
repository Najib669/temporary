import {GET_MAILS, GET_MAIL } from "./Types";
import { useDispatch } from "react-redux";
import axios from "axios";



export const getMails = () => (dispatch) => {
  axios.get("http://localhost:8080/mails/").then(
    ({ data }) =>
      dispatch({
        type: GET_MAILS,
        payload: data,
      })
    //.catch((err)=>{alert("ERROR IN GET USERS")})
  );
};

//get one product
export const getMail = (id) => (dispatch) => {
  axios.get(`http://localhost:8080/mails/${id}`).then(({ data }) =>
    dispatch({
      type: GET_MAIL,
      payload: data,
    })
  );
};
//delete product by id
export const deleteMail = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/mails/${id}`);
  dispatch({
    type: "DELETE",
  });

  dispatch(getMails());
};