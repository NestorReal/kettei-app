import { CALCULATE_SUCCESS} from '../constants/actionTypes';

const initialState = {
    calculations: {},
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case CALCULATE_SUCCESS:
    return {
        ...state,
        calculations: action.response,
      };
    default:
      return state;
  }
};

export default events;