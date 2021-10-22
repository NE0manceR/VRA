import { ENTITY_FETCH } from '../constants/actionType';

let initialState = {
  headersData: [],
  selectedItem: {
    product: {},
  },
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
  state = state || initialState;
  let newState;

  switch (action.type) {
    case ENTITY_FETCH:
      newState[action.entity] = Object.assign({}, state, action.data);

      return newState;

    default:
      return state;
  }
}
