const { PRODUCT_SUCCESS, PRODUCT_ERROR } = require("../Types");

const initialState = {
  error: "",
  ProductData: "",
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SUCCESS:
      return {
        error: "",
        ProductData: action.payload,
      };
    case PRODUCT_ERROR:
      return {
        error: action.error,
        ProductData: "",
      };
    default:
      return state;
  }
};
export default ProductReducer;
