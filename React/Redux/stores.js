import { configureStore } from "@reduxjs/toolkit";
import reactslicer from "./slicer1"

const stores = configureStore({
    reducer:{
        slice1: reactslicer
    }
})

export default stores;