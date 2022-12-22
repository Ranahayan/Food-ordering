import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        list: {},
        totalItems: 0,
        cartPrice: 0
    },
    reducers: {
        itemAdded: (cart, action) => {
            let requestObjcet = { ...action.payload.product };
            cart.totalItems += 1;
            if (!cart.list[action.payload.key]) {
                console.log('helo');
                cart.list[action.payload.key] = requestObjcet;
                cart.cartPrice += cart.list[action.payload.key].basePrice;
                return;
            }
            cart.list[action.payload.key].count += 1;
            cart.cartPrice += cart.list[action.payload.key].basePrice;
            cart.list[action.payload.key].totalPrice += cart.list[action.payload.key].basePrice;;

        },
        itemRemoved: (cart, action) => {
            if (cart.list[action.payload.key].count === 0) return;
            cart.totalItems -= 1;
            if (cart.list[action.payload.key].count === 1) {
                delete cart.list[action.payload.key];
                return
            };

            cart.list[action.payload.key].count -= 1;
            cart.list[action.payload.key].totalPrice -= cart.list[action.payload.key].basePrice;
            cart.cartPrice -= cart.list[action.payload.key].basePrice;
        }
    }

})

const { itemAdded, itemRemoved } = cartSlice.actions;
export default cartSlice.reducer;