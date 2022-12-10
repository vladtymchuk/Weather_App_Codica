import React, { FC, useEffect, useState } from 'react'
import {Container, Grid, Typography, Box} from '@material-ui/core'
import {useParams} from 'react-router-dom'

import { ICityWeather } from '../models/ICityWeather'
import { useAppSelector } from '../hooks/redux'
import { getCustomHours, temperatureToCelsium } from '../helpers/text'


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
                console.log(JSON.stringify(response));
                setCityHourlyRes(response)
            } catch ({message}) {
                console.log(message);
            }
        })()
    }, [cities]);

    return (
        <Container>
            <Typography variant='h3' sx={{m:1}} textAlign='left'>
                {city?.name}
            </Typography>
            <Grid container spacing={1}>
                {cityHourlyRes && cityHourlyRes.hourly.slice(0,12).map((item: any, index: number) => {
                    return (
                        <Grid item xs={1}>
                            <Box justifyContent='center' alignItems='center'>
                                <Typography variant='h5' textAlign='center'>
                                    {getCustomHours(item.dt)}
                                 </Typography>
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather" />
                                <Typography variant='h5' textAlign='center'>
                                    {temperatureToCelsium(item.temp)}
                                </Typography>  
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
