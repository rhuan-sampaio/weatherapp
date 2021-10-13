import { ADD_LIST, EXCLUDE_ITEM } from '../actionTypes';

const initialState = {
  list: [],
};

export default function List(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST: {
      const { id, content } = action.payload;
      return {
        list: [...state.list, { id, content }],
      };
    }
    case EXCLUDE_ITEM: {
      const { index } = action.payload;
      const newState = { ...state };
      newState.list.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
}
