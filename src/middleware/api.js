import { categories, products } from '../service/products-categories';
import * as apiACtions from '../store/apiActions';

const api = ({ dispatch, getState }) => next => async action => {
    if (action.type !== apiACtions.apiCallBegan.type) return next(action);
    const { onSuccess, currentType } = action.payload;

    try {
        let responseData = null;
        if (currentType === 'categories') responseData = categories;
        else responseData = products;
        dispatch(apiACtions.apiCallSucces(responseData));
        if (onSuccess) dispatch({
            type: onSuccess,
            payload: responseData
        });
    }
    catch (error) {
        dispatch(apiACtions.apiCallFailed(error.message))
    }
}

export default api;