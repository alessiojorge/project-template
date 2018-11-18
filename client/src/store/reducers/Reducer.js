import * as actions from '../actions/Actions';

const initialState = {
  base: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BASE_ACTION:
      return {
        ...state,
        base: { Hello: 'hello' }
      };

    default:
      return state;
  }
};

export default reducer;
