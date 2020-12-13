import types from "../../redux/types";

const initialState = {
  isLoading: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
  
    default:
      return state;
  }
}