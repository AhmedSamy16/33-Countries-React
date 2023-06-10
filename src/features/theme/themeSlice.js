import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkTheme: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state) {
            state.darkTheme = !state.darkTheme
        }
    }
})

export const selectTheme = (state) => state.theme.darkTheme

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer