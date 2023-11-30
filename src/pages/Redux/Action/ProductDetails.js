import { productDetailsApi } from "../Api";
import { PRODUCT_DETAILS_ERROR, PRODUCT_DETAILS_SUCCESS } from "../Types";

const ProductDetailsSuccess = (res) => {
  return {
    type: PRODUCT_DETAILS_SUCCESS,
    payload: res,
  };
};
const ProductDetailsError = (error) => {
  return {
    type: PRODUCT_DETAILS_ERROR,
    error: error,
  };
};
const ProductDetailsActionHandler = (url) => {
  return async (dispatch) => {
    try {
      const jsonData = await productDetailsApi(url);
      dispatch(ProductDetailsSuccess(jsonData));
    } catch (error) {
      dispatch(ProductDetailsError(error.message));
    }
  };
};
export default {
  ProductDetailsSuccess,
  ProductDetailsError,
  ProductDetailsActionHandler,
};
