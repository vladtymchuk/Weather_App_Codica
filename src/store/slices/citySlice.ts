import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICityWeather } from '../../models/ICityWeather';

interface CityState {
    cities: ICityWeather[]
}

const initialState: CityState = {
    cities: [] 
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        addCity: (state, action: PayloadAction<ICityWeather>) => {
            if (!state.cities.map(city => city.name).includes(action.payload.name)) state.cities.unshift(action.payload)
        },
        removeCity: (state, action: PayloadAction<number>) => {
            state.cities = state.cities.filter(city => city.id !== action.payload)
        },
        updateCity: (state, action: PayloadAction<ICityWeather>) => {
            state.cities.forEach((city, index) => {
                if (city.id === action.payload.id) {
                    state.cities[index] = action.payload
                }
            })
        },
        fetchCitiesFromLocalStorage: (state, action: PayloadAction<ICityWeather[]>) => {
            state.cities = action.payload
        },
    }
})

export const { addCity, removeCity, updateCity, fetchCitiesFromLocalStorage } = citySlice.actions

export default citySlice.reducer