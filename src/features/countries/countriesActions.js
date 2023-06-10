import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllCountries = createAsyncThunk('countries/fetchAll', async (_, thunkAPI) => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        return data
    } catch (error) {
        const message = (error.response && error.response.data) || error.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchCountryByCode = createAsyncThunk('countries/fetchCountryByCode', async (code, thunkAPI) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        const data = await res.json()
        return data
    } catch (error) {
        const message = (error.response && error.response.data) || error.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchCountryByRegion = createAsyncThunk('countries/fetchCountriesByRegion', async (region, thunkAPI) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
        const data = await res.json()
        return data
    } catch (error) {
        const message = (error.response && error.response.data) || error.message
        return thunkAPI.rejectWithValue(message)
    }
})