import React, {FC} from 'react';
import {Card, Grid, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { Update, MoreHoriz, DeleteForever } from '@material-ui/icons'
import styles from './CityCard.module.css'
import { useNavigate } from 'react-router-dom'

import { ICityWeather } from '../../models/ICityWeather';
import { capitalize, temperatureToCelsium } from '../../helpers/text';
import { useAppDispatch } from '../../hooks/redux';
import { removeCity, updateCity } from '../../store/slices/citySlice';
import { useGetCityWeatherMutation } from '../../store/services/cityWeatherAPI'
import { removeLocalStorage } from '../../helpers/localStorage';
 
interface CityCardProps {
    data: ICityWeather
}

export const CityCard: FC<CityCardProps> = ({data}) => {
    const {
        sys,
        name,
        main,
        weather,
        id
    } = data
    const [getCityWeather] = useGetCityWeatherMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const updateHandler = async () => {
        const res: any = await getCityWeather(name);
        console.log(JSON.stringify(res, null, 3));
        
        dispatch(updateCity(res))
    }

    const deleteHandler = () => {
        dispatch(removeCity(id))
        removeLocalStorage(name)
    }

  return (
    <Card sx={{ p: 3, backgroundColor: '#e4562e' }}>
      <CardContent>
        
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <div className={styles.cardContentLeft}>
                <Typography variant="h4" component="h2" sx={{color: '#fff'}}>
                    {name}, {sys.country}
                </Typography>
                    <Typography variant='h6' color="textSecondary" sx={{color: '#fff'}}>
                        {capitalize(weather[0].description)}
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className={styles.cardContentRight}>
                    <img 
                        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
                        alt="weather-icon" 
                    />
                    <Typography variant='h5' component='span' sx={{color: '#fff'}}>
                        {temperatureToCelsium(main.temp)}
                    </Typography>
                </div>
            </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" color='warning' variant='contained'
            onClick={updateHandler}
        >
            <Update sx={{fontSize: 16, mr: 1}}/>
            Update
        </Button>
        <Button size="small" color='primary' variant='contained'
            onClick={() => navigate(`/details/${name}`)}
        >
            <MoreHoriz sx={{fontSize: 16, mr: 1}}/>
            Details
        </Button>
        <Button size="small" color='error' variant='contained'
            onClick={deleteHandler}
        >
            <DeleteForever sx={{fontSize: 16, mr: 1}}/>
            Delete
        </Button>
      </CardActions>
    </Card>
  );
}
