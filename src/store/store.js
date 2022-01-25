import { createStore } from "redux";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      users: [...state.users, action.payload],
    };
  }
  return state;
};

const usersStore = createStore(userReducer);

export default usersStore;
