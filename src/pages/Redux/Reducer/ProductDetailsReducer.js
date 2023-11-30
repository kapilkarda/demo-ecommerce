const { PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_ERROR } = require("../Types");

const initialState = {
  error: "",
  ProductDetails: "",
};

const ProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_SUCCESS:
      return {
        error: "",
        ProductDetails: action.payload,
      };
    case PRODUCT_DETAILS_ERROR:
      return {
        error: action.error,
        ProductDetails: "",
      };
    default:
      return state;
  }
};
export default ProductDetailsReducer;
