import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menuSlice",
    initialState: {
        restaurantMenus: {}
    },
    reducers: {

        setMenu: (state, action) => {
            const { restaurantId, menu } = action.payload;

            state.restaurantMenus[restaurantId] = menu;
        }

    }
})

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;