import React, {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Grid } from "@material-ui/core"

import { CityCard } from '../CityCard/CityCard'
import { ICityWeather } from '../../models/ICityWeather'
import { fetchCitiesFromLocalStorage } from '../../store/slices/citySlice'

export const CardList = () => {
    const {cities} = useAppSelector(state => state.cities)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('cities') !== null){
            fetchCities(JSON.parse(localStorage.cities))
        }
      }, [])

    const fetchCities = async (cities: string[] | null) => {
        try {
            const urls = cities?.map((city: string) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    
            urls && Promise.all(urls.map(u => fetch(u))).then(responses =>
                Promise.all(responses.map(res => res.json()))
            ).then((json : Awaited<ICityWeather>[]) => {
                let resultInfo: ICityWeather[] = json
                dispatch(fetchCitiesFromLocalStorage(resultInfo))
            })
        } catch ({message}) {
            console.log(typeof message)
        }
    }

    const renderCards = () => {
        return cities && cities.map(city => {
            return (
                <Grid item xs={12}>
                    {city && <CityCard key={city.id} data={city}/>}
                </Grid>
            )
        })
    }

    return (
        <>{renderCards()}</>
    )
}
