import { ADD_NEWS, GET_NEWS, GET_NEWSS } from "../Actions/Types";

const newsReducer = (state = { news: [] }, { type, payload }) => {
  switch (type) {
    case ADD_NEWS:
      return { ...state, news: [...state.news, payload] };
    case GET_NEWS:
      return { ...state, news: payload };
    case GET_NEWSS:
      return { ...state, newss: payload };
    default:
      return state;
  }
};
export default newsReducer;
