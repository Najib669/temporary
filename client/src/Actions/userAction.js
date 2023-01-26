import { ADD_USER, GET_USER, GET_USERS } from "./Types";
import axios from "axios";
import { useDispatch } from "react-redux";

export const addUser = (newuser) => (dispatch) => {
  axios
    .post("http://localhost:8080/users/newuserba", newuser)
    .then(({ data }) =>
      dispatch({
        type: ADD_USER,
        payload: data,
      })
    )
    .catch((err) => alert("ERROR IN ADD NEW USER"));
};

export const getUsers = () => (dispatch) => {
  axios.get("http://localhost:8080/users/").then(({ data }) =>
    dispatch({
      type: GET_USERS,
      payload: data,
    })
   // .catch((err) => alert("ERROR IN GET USERS"))
  );
};
// get user by id
export const getUser = (id) => (dispatch) => {
  axios.get(`http://localhost:8080/users/${id}`).then(({ data }) =>
    dispatch({
      type: GET_USER,
      payload: data,
    })
    // .catch((err) => {
    //   alert("ERROR IN GET USERS");
    // })
  );
};
export const deleteUser = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/users/${id}`);
  dispatch({
    type: "DELETE",
  });

  dispatch(getUsers());
};
export const edditUserById = (id, editUser) => (dispatch) => {
  axios
    .put(`http://localhost:8080/updateUser/${id}`, editUser)
    .then((re) => dispatch(getUser(id)));
};
