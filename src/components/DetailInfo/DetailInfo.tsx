import React, { FC } from 'react';
import { Grid, Card, CardContent, Typography } from "@material-ui/core"

import { IHourlyInfo } from '../../models/IHourlyInfo';
import { getCustomHours, temperatureToCelsium } from '../../helpers/text';
import { TempIcon } from '../../assets/TempIcon'
import { DegreesIcon } from '../../assets/DegreesIcon';
import { WindIcon } from '../../assets/WindIcon';
import { SunriseIcon } from '../../assets/SunriseIcon';
import { SunsetIcon } from '../../assets/SunsetIcon';


interface DetailInfoProps {
    cityHourlyRes: IHourlyInfo
}

export const DetailInfo: FC<DetailInfoProps> = ({cityHourlyRes}) => {
    const {current} = cityHourlyRes

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Card sx={{ p: 0, backgroundColor: '#e4562e', borderRadius: 5 }}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <TempIcon width='30px'/>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Temperature
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    {temperatureToCelsium(current.temp)}
                                </Typography>
                            </Grid>
                        </Grid>
                        
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                
                <Card sx={{ p: 0, backgroundColor: '#e4562e', borderRadius: 5 }}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <TempIcon width='30px'/>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Feels like
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    {temperatureToCelsium(current.feels_like)}
                                </Typography>
                            </Grid>
                        </Grid>
                        
                    </CardContent>
                </Card>

            </Grid>


            <Grid item xs={2}>
                <Card sx={{ p: 0, backgroundColor: '#e4562e', borderRadius: 5 }}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <WindIcon width='30px'/>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Wind speed
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    {current.wind_speed}
                                </Typography>
                            </Grid>
                        </Grid>
                        
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2}>
                <Card sx={{ p: 0, backgroundColor: '#e4562e', borderRadius: 5 }}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <DegreesIcon width='30px'/>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Wind degree
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    {current.wind_deg}
                                </Typography>
                            </Grid>
                        </Grid>
                        
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2}>
                <Card sx={{ p: 0, backgroundColor: '#e4562e', borderRadius: 5 }}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <SunriseIcon width='30px'/>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Sunrise
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    {getCustomHours(current.sunrise)}
                                </Typography>
                            </Grid>
                        </Grid>
                        
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2}>
                <Card sx={{ p: 0, backgroundColor: '#e4562e', borderRadius: 5 }}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <SunsetIcon width='30px'/>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Sunset
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    {getCustomHours(current.sunset)}
                                </Typography>
                            </Grid>
                        </Grid>
                        
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}