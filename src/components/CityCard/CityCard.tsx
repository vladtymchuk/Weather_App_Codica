import React, {FC} from 'react';
import {Card, Grid, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { Update, MoreHoriz, DeleteForever } from '@material-ui/icons'
import styles from './CityCard.module.css'

import { ICityWeather } from '../../models/ICityWeather';
import { capitalize } from '../../helpers/text';

interface CityCardProps {
    data: ICityWeather
}

export const CityCard: FC<CityCardProps> = ({data}) => {
    const {
        sys,
        name,
        main,
        weather
    } = data

    let temperatureToCelsium = (temp: number): string => {
        return `${Math.floor(temp - 273.15)}°C`;
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
        <Button size="small" color='warning' variant='contained'>
            <Update sx={{fontSize: 16, mr: 1}}/>
            Update
        </Button>
        <Button size="small" color='primary' variant='contained'>
            <MoreHoriz sx={{fontSize: 16, mr: 1}}/>
            Details
        </Button>
        <Button size="small" color='error' variant='contained'>
            <DeleteForever sx={{fontSize: 16, mr: 1}}/>
            Delete
        </Button>
      </CardActions>
    </Card>
  );
}
