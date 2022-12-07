import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICityWeather } from '../../models/ICityWeather'

// https://api.openweathermap.org/data/2.5

export const cityWeatherAPI = createApi({
    reducerPath: 'cityWeatherAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
    }),
    endpoints: (builder) => ({
        getCityWeather: builder.mutation<ICityWeather, string>({
            query: (name) => ({
                url: `?q=${name}&appid=${process.env.REACT_APP_API_KEY}`,
                method: 'GET'
            })
        })
    })
})

export const { useGetCityWeatherMutation } = cityWeatherAPI