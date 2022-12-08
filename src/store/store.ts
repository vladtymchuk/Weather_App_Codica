import {configureStore} from '@reduxjs/toolkit'
import { cityWeatherAPI } from './services/cityWeatherAPI'
import cityReducer from './slices/citySlice'

export const store = configureStore({
    reducer: {
        [cityWeatherAPI.reducerPath]: cityWeatherAPI.reducer,
        cities: cityReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cityWeatherAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch