import { configureStore } from '@reduxjs/toolkit';
import slice1reducer from "./slicer1"

const stores = configureStore({
    reducer: {
        slice1: slice1reducer,
    }
})

export default stores;