import { ADD_NEWS, GET_NEWS, GET_NEWSS } from "./Types";
import { useDispatch } from "react-redux";
import axios from "axios";

export const addNews = (newnews) => (dispatch) => {
  axios
    .post("http://localhost:8080/news/newnews", newnews)
    .then(({ data }) =>
      dispatch({
        type: ADD_NEWS,
        payload: data,
      })
    )
    .catch((err) => alert("ERROR IN ADD NEW NEWS"));
};

export const getNews = () => (dispatch) => {
  axios.get("http://localhost:8080/news/").then(
    ({ data }) =>
      dispatch({
        type: GET_NEWS,
        payload: data,
      })
    //.catch((err)=>{alert("ERROR IN GET USERS")})
  );
};
// get news by id
export const getNewss = (id) => (dispatch) => {
  axios.get(`http://localhost:8080/news/${id}`).then(({ data }) =>
    dispatch({
      type: GET_NEWSS,
      payload: data,
    })
  );
};

//delete product by id
export const deleteNews = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/news/${id}`);
  dispatch({
    type: "DELETE",
  });

  dispatch(getNews());
};