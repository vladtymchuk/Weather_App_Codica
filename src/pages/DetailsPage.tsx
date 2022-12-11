import React, { FC, useEffect, useState } from 'react'
import {Container, Grid, Typography, Box} from '@material-ui/core'
import {useParams} from 'react-router-dom'

import { ICityWeather } from '../models/ICityWeather'
import { useAppSelector } from '../hooks/redux'
import { HourlyList } from '../components/HourlyList/HourlyList'
import { DetailInfo } from '../components/DetailInfo/DetailInfo'


export const DetailsPage: FC = () => {
    const {name} = useParams()
    const { cities } = useAppSelector(state => state.cities)
    const [city, setCity] = useState<ICityWeather | null | undefined>(null)
    const [cityHourlyRes, setCityHourlyRes] = useState<any>(null) 

    const getByName = () => {
        let temp: ICityWeather | undefined = cities.find(city => city.name === name)
        setCity(temp)
        return temp
    }

    useEffect(() => {
        const city= getByName();
        
        (async () => {
            try {
                const response: any = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city?.coord.lat}&lon=${city?.coord.lon}&exclude=minutely,daily&appid=${process.env.REACT_APP_API_KEY}`).then(res => res.json())
                console.log("RS",JSON.stringify(response));
                setCityHourlyRes(response)
            } catch ({message}) {
                console.log(message);
            }
        })()
    }, [cities]);

    return (
        <Container>
            <Typography variant='h3' sx={{mb: 2, ml: 0, mt: 2}} textAlign='left'>
                {city?.name}, {city?.sys.country}
            </Typography>
            {cityHourlyRes && <DetailInfo cityHourlyRes={cityHourlyRes}/>}
            <Grid container spacing={1}>
                {cityHourlyRes && <HourlyList cityHourlyRes={cityHourlyRes}/>}
            </Grid>
        </Container>
    )
}
