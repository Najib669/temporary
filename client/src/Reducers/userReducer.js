import { ADD_USER, GET_USER, GET_USERS } from "../Actions/Types";

const userReducer = (state = { users: [] }, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return { ...state, users: [...state.users, payload] };
    case GET_USERS:
      return { ...state, users: payload };
    case GET_USER: 
      return { ...state, user: payload };
    default:
      return state;
  }
};
export default userReducer;
