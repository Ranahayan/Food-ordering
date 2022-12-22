import { createSlice } from "@reduxjs/toolkit";
import * as apiActions from '../apiActions';

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        list: []
    },
    reducers: {
        categoriesRecieved: (categories, action) => {
            categories.list = action.payload;
        }
    }
}
)
const { categoriesRecieved } = categoriesSlice.actions;

export const loadCategoried = () => apiActions.apiCallBegan({
    onSuccess: categoriesRecieved.type,
    currentType: 'categories'
})

export default categoriesSlice.reducer;