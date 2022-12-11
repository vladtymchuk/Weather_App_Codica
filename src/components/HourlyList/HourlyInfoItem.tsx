import React, { FC } from "react";
import {Grid, Box, Typography} from "@material-ui/core"

import { IWeatherForHour } from "../../models/IHourlyInfo";
import {getCustomHours, temperatureToCelsium} from '../../helpers/text'

interface HourlyInfoItemProps {
    item: IWeatherForHour
}

export const HourlyInfoItem: FC<HourlyInfoItemProps> = ({item}) => {
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
}