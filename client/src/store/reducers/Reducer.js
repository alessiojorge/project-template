import * as actions from '../actions/Actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BASE_ACTION:
      return {
        ...state,
        base: null
      };
    default:
      return state;
  }
};

export default reducer;
