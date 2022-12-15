import React, { FC, useEffect, useState } from 'react'
import {Container, Grid, Typography} from '@material-ui/core'
import {useParams} from 'react-router-dom'

import { ICityWeather } from '../models/ICityWeather'
import { IHourlyInfo } from '../models/IHourlyInfo'
import { useAppSelector } from '../hooks/redux'
import { HourlyList } from '../components/HourlyList/HourlyList'
import { DetailInfo } from '../components/DetailInfo/DetailInfo'
import { useGetCityWeatherMutation } from '../store/services/cityWeatherAPI'


export const DetailsPage: FC = () => {
    const {name} = useParams()
    const { cities } = useAppSelector(state => state.cities)
    const [getCityWeather] = useGetCityWeatherMutation()
    const [city, setCity] = useState<ICityWeather | null | undefined>(null)
    const [cityHourlyRes, setCityHourlyRes] = useState<Awaited<IHourlyInfo> | null>(null) 

    const getByName = async () => {
        let temp: ICityWeather | undefined = cities.find(city => city.name === name)
        if (temp) {
            setCity(temp)
        } else if (name) {
            const res: any = await getCityWeather(name)
            if (res.data) {
                setCity(res.data)
            }
        }
        return temp
    }

    useEffect(() => {
        (async () => {
            const city = await getByName();
            try {
                const response: Awaited<IHourlyInfo> = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city?.coord.lat}&lon=${city?.coord.lon}&exclude=minutely,daily&appid=${process.env.REACT_APP_API_KEY}`).then((res) => res.json())
                setCityHourlyRes(response)
            } catch ({message}) {
                console.log(message);
            }
        })()
    }, [cities]);

    return (
        <Container >
            <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3' sx={{mb: 2, ml: 0, mt: 2}} textAlign='left'>
                        {city?.name}, {city?.sys.country}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {cityHourlyRes && <DetailInfo cityHourlyRes={cityHourlyRes}/>}
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        {cityHourlyRes && <HourlyList cityHourlyRes={cityHourlyRes}/>}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
