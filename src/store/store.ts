import {configureStore} from '@reduxjs/toolkit'
import { cityWeatherAPI } from './services/cityWeatherAPI'

export const store = configureStore({
    reducer: {
        [cityWeatherAPI.reducerPath]: cityWeatherAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cityWeatherAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch