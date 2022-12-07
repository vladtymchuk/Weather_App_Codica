import React, {useEffect, useState} from 'react'
import { useGetCityWeatherMutation } from '../store/services/cityWeatherAPI'
import {Container, TextField, Grid} from '@material-ui/core'

import { Banner } from '../components/Banner'
import { ICityWeather } from '../models/ICityWeather'
import { CityCard } from '../components/CityCard/CityCard'

export const MainPage = () => {
  const [cityName, setCityName] = useState<string>('')
  const [data, setData] = useState<ICityWeather | null>(null)
  const [getCityWeather] = useGetCityWeatherMutation()

  useEffect(() => {
    (async () => {
      const res: any = await getCityWeather('london')  
      setData(res.data)
    })()
  }, [getCityWeather]);

  const searchCity = async (name: string) => {
    const res: any = await getCityWeather(name)  
    setData(res.data)
  }

  const searchHandler = (e: any) => {
    searchCity(e.target.value)
    setCityName(e.target.value)
  }

  return (
    <Container>
      <TextField
              type='search'
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              fullWidth
              variant='standard'
              sx={{mt: 3, mb: 3}}
              value={cityName}
              onChange={searchHandler}
            />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {data && <CityCard data={data}/>}
          </Grid>
        </Grid>
    </Container>
  )
}