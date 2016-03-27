import {
  TODO_GET_ITEMS,
  TODO_POST_ITEM,
  TODO_GET_ITEMS_SUCCESS,
  TODO_POST_ITEM_SUCCESS
} from 'constants/action-types';

export function getItems() {
  return { type: TODO_GET_ITEMS };
}

export function getItemsSuccess(payload) {
  return { type: TODO_GET_ITEMS_SUCCESS, payload };
}

export function postItem(todo) {
  return { type: TODO_POST_ITEM, payload: { todo } }
}

export function postItemSuccess({ id, description }) {
  const todo = { id, description };
  return { type: TODO_POST_ITEM_SUCCESS, payload: { todo } };
}
