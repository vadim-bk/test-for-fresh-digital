import types from '../../redux/types';

const initialState = {
  filteredClients: [],
  applicants: [],
  clienId: '',
  applicantsIds: [],
  newApplicants: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTERED_CLIENTS:
      return { ...state, filteredClients: action.payload };

    case types.SET_APPLICANTS:
      return { ...state, applicants: action.payload };

    case types.SET_CLIENT_ID:
      return { ...state, clienId: action.payload };

    case types.SET_APPLICANTS_IDS:
      return { ...state, applicantsIds: action.payload };

    case types.SET_NEW_APPLICANTS:
      return { ...state, newApplicants: action.payload };

    case types.CLEAR_ORDER_STATE:
      return initialState;

    default:
      return state;
  }
};
