import React, {useState} from 'react'
import { useGetCityWeatherMutation } from '../store/services/cityWeatherAPI'
import {Container, TextField, Grid, Button, Typography} from '@material-ui/core'
import { Add } from '@material-ui/icons';


import { CardList } from '../components/CardList/CardList';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addCity } from '../store/slices/citySlice';
import { addToLocalStorage } from '../helpers/localStorage';

export const MainPage = () => {
  const [cityName, setCityName] = useState<string>('')
  const [getCityWeather] = useGetCityWeatherMutation()
  const dispatch = useAppDispatch()
  

  const searchHandler = (e: any) => {
    setCityName(e.target.value)
  }

  const addCityHandler = async () => {
    const res: any = await getCityWeather(cityName);
    if (res.data){
      dispatch(addCity(res.data))
      addToLocalStorage(res.data.name)
    }
  }

  return (
    <Container>
      <Grid container sx={{mt: 3, mb: 3}}>
        <Grid item xs={11}>
          <TextField
            type='search'
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            color='warning'
            fullWidth
            variant='outlined'
            value={cityName}
            onChange={searchHandler}
            sx={{p: '0'}}
          />
        </Grid>
        <Grid item xs={1}>
          <Button color='warning' variant='contained' fullWidth sx={{height: "100%"}}
            onClick={addCityHandler}
          >
            <Typography component='span'>
              <Add sx={{ fontSize: 32, mt: "5px" }}/>
            </Typography>
          </Button>
        </Grid>
      </Grid>
      
      <Grid container spacing={2}>
        <CardList />
      </Grid>
    </Container>
  )
}