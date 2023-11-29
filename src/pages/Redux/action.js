import {
  ADD_TO_CART,
  FETCH_CART_ITEMS,
  REMOVE_FROM_CART,
  UPDATE_QTY,
} from "./types";

export const addToCartItem = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
export const updateQty = (itemId, quantity) => ({
  type: UPDATE_QTY,
  payload: { itemId, quantity },
});
export const removeFromCartItem = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});
export const fetchCartItems = (item) => {
  return {
    type: FETCH_CART_ITEMS,
    payload: item,
  };
};
