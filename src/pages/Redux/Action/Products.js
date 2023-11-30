import { PRODUCT_ERROR, PRODUCT_SUCCESS } from "../Types";
import { fetchApi } from "../Api";
const ProductSuccess = (res) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: res,
  };
};
const ProductError = (error) => {
  return {
    type: PRODUCT_ERROR,
    error: error,
  };
};
const ProductActionHandler = () => {
  return async (dispatch) => {
    try {
      const jsonData = await fetchApi();
      dispatch(ProductSuccess(jsonData));
    } catch (error) {
      dispatch(ProductError(error.message));
    }
  };
};

export default { ProductSuccess, ProductError, ProductActionHandler };
