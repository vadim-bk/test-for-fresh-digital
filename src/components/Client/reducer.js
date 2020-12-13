import types from "../../redux/types";

const initialState = {
  clients: [],
  filteredClients: []
}

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CLIENTS:
    return {...state, clients: action.payload}   
    
    case types.SET_FILTERED_CLIENTS:
      return {...state, filteredClients: action.payload}    
    
    default:
      return state;
  }
}