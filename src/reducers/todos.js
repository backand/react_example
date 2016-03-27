import {TODO_GET_ITEMS_SUCCESS, TODO_POST_ITEM_SUCCESS} from 'constants/action-types';

const initialState = [];

export function todos(state = initialState, action) {

  switch (action.type) {
    case TODO_GET_ITEMS_SUCCESS:
      return [...action.payload.data];

    case TODO_POST_ITEM_SUCCESS:
      return [action.payload.todo, ...state];
  }

  return state;
}
