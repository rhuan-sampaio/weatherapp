import { ADD_LIST, EXCLUDE_ITEM } from './actionTypes';
export const addList = (content) => ({
  type: ADD_LIST,
  payload: {
    id: Date.now(),
    content,
  },
});

export const excludeItem = (content) => ({
  type: EXCLUDE_ITEM,
  payload: { content },
});
