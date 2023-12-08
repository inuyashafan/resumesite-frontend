import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        city: "City",
        country: "Country",
        details: "Details",
        report_date: "Date",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseCity: (state, action) => { state.city = action.payload},
        chooseCountry: (state, action) => { state.country = action.payload},
        chooseDetails: (state, action) => { state.details = action.payload},
        chooseDate: (state, action) => { state.report_date = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseCity, chooseCountry, chooseDetails, chooseDate} = rootSlice.actions