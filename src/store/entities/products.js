import { createSlice } from '@reduxjs/toolkit';
import * as apiACtions from '../apiActions';

const { apiCallBegan, apiCallSucces, apiCallFailed } = apiACtions;

const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: {}
    },
    reducers: {
        productsRecieved: (products, action) => {
            products.list = action.payload;
        },
        quantityIncreased: (products, action) => {
            let index = action.payload;
            products.list.byId[index].count += 1;
        },
        quantityDecreased: (products, action) => {
            let index = action.payload;
            if (products.list.byId[index].count === 0) return;
            products.list.byId[index].count -= 1;
        }
    }
})

const { productsRecieved } = productsSlice.actions;

export const loadPrducts = () => apiCallBegan({
    onSuccess: productsRecieved.type,
    currentType: 'products'
})

// export const increaseQuantity = (index) => apiCallBegan({

// })

// export const decreaseQuantity = (index) => apiCallBegan({

// })

export default productsSlice.reducer;
