import {
  ADD_TO_CART,
  FETCH_CART_ITEMS,
  REMOVE_FROM_CART,
  UPDATE_QTY,
} from "../Types";

const InitialState = {
  items: [],
};
const cartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_QTY:
      const { itemId, quantity } = action.payload;
      const updatedItems = state.items.map((item) =>
        item.id === itemId ? { ...item, quantity: quantity } : item
      );
      return { ...state, items: updatedItems };

    case FETCH_CART_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
};
export default cartReducer;
