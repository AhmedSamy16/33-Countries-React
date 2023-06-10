import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCountries, fetchCountryByCode, fetchCountryByRegion } from "./countriesActions"

const initialState = {
    loading: false,
    countriesData: [],
    countrySearch: [],
    error: false,
    success: false,
    message: '',
    region: '',
    searchTerm: ''
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false,
            state.success = false
            state.error = false
            state.message = ''
            state.countrySearch = []
        },
        setRegion: (state, action) => {
            state.region = action.payload
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchAllCountries.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchAllCountries.fulfilled, (state, action) => {
            state.loading = false
            state.countriesData = action.payload
            state.success = true
        })
        .addCase(fetchAllCountries.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.message = action.payload
            state.countriesData = []
        })
        .addCase(fetchCountryByCode.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchCountryByCode.fulfilled, (state, action) => {
            state.loading = false
            state.countrySearch = action.payload
            state.success = true
        })
        .addCase(fetchCountryByCode.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.message = action.payload
            state.countrySearch = []
        })
        .addCase(fetchCountryByRegion.pending, (state) => {
            state.loading = true
            state.countriesData = []
        })
        .addCase(fetchCountryByRegion.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.countriesData = action.payload
        })
        .addCase(fetchCountryByRegion.rejected, (state, action) => {
            state.loading = false
            action.error = true
            state.message = action.payload
            state.countrySearch = []
        })
    }
})

export const selectCountriesState = (state) => state.countries

export const { reset, setRegion, setSearchTerm } = countriesSlice.actions

export default countriesSlice.reducer