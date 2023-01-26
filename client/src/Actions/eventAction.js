import { ADD_EVENT, GET_EVENT, ADD, GET_EVENTS } from "./Types";
import { useDispatch } from "react-redux";
import axios from "axios";


export const addEvent = (newevent) => (dispatch) => {
    axios
      .post("http://localhost:8080/events/newevent", newevent)
      .then(({ data }) =>
        dispatch({
          type: ADD,
          payload: data,
        })
      )
      .catch((err) => alert("ERROR IN ADD NEW USER"));
  };



export const getEvents = () => (dispatch) => {
  axios.get("http://localhost:8080/events/").then(
    ({ data }) =>
      dispatch({
        type: GET_EVENTS,
        payload: data,
      })
    //.catch((err)=>{alert("ERROR IN GET USERS")})
  );
};
// get event by id
export const getEvent = (id) => (dispatch) => {
  axios.get(`http://localhost:8080/events/${id}`).then(({ data }) =>
    dispatch({
      type: GET_EVENT,
      payload: data,
    })
  );
};
//delete product by id
export const deleteEvent = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/events/${id}`);
  dispatch({
    type: "DELETE",
  });

  dispatch(getEvents());
};