import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import countriesReducer from "../features/countries/countriesSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        countries: countriesReducer
    }
})

export default store