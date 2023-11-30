// rootReducer.js
import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import cartReducer from "./CartReducer";
import ProductDetailsReducer from "./ProductDetailsReducer";

const rootReducer = combineReducers({
  product_data: ProductReducer,
  product_details_data: ProductDetailsReducer,
  cart_data: cartReducer,
});

export default rootReducer;
