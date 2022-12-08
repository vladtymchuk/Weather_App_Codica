import React, { FC, useEffect } from 'react'
import {Container, Grid} from '@material-ui/core'
import {useParams} from 'react-router-dom'

import { ICityWeather } from '../models/ICityWeather'
import { useAppSelector } from '../hooks/redux'


export const DetailsPage: FC = () => {
    const {name} = useParams()
    const { cities } = useAppSelector(state => state.cities)

    const getByName = () => {
        return cities.find(city => city.name === name)
    }

    useEffect(() => {
        const city= getByName();
        
        (async () => {
            try {
                const response: any = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city?.coord.lat}&lon=${city?.coord.lon}&exclude=minutely,daily&appid=${process.env.REACT_APP_API_KEY}`).then(res => res.json())
                console.log(JSON.stringify(response));
            } catch ({message}) {
                console.log(message);
            }
        })()
    }, [cities]);

    return (
        <Container>
            DetailsPage
        </Container>
    )
}
