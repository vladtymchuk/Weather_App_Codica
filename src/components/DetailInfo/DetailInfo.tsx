import React, { FC } from 'react';
import { Grid, Box, Typography } from "@material-ui/core"

import { IHourlyInfo } from '../../models/IHourlyInfo';
import { temperatureToCelsium } from '../../helpers/text';

interface DetailInfoProps {
    cityHourlyRes: IHourlyInfo
}

export const DetailInfo: FC<DetailInfoProps> = ({cityHourlyRes}) => {
    const {current} = cityHourlyRes

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography variant='h6' component='p' sx={{color: "#000"}}>
                    Temp: {temperatureToCelsium(current.temp)}
                </Typography>
                <Typography variant='h6' component='p' sx={{color: "#000"}}>
                    Feels Like: {temperatureToCelsium(current.feels_like)}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h6' component='p' sx={{color: "#000"}}>
                    Wind Speed: {current.wind_speed}
                </Typography>
                <Typography variant='h6' component='p' sx={{color: "#000"}}>
                    Wind Deg: {current.wind_deg}
                </Typography>
            </Grid>
            <Grid item 
                justifyContent={'center'} 
                alignItems={'flex-end'}
                xs={5}
            >
                <Typography color='textSecondary'>
                Sunrise
                </Typography>
            </Grid>
                <Grid item 
                justifyContent={'flex-end'} 
                alignItems={'flex-start'}
                xs={5}>Sunrise</Grid>
                
                    
                
                <Grid item xs={12}>

                </Grid>
        </Grid>
    )
}