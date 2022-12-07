import React from 'react'
import {Typography, Box} from "@material-ui/core"

import styles from './Banner.module.css'



export const Banner = () => {
  return (
    <Box className={styles.container}>
        <Typography
            variant='h4'
            sx={{textAlign: 'center', color: '#B12F2F', p: 10, fontWeight: 500}}
        >
            CODICA WEATHER - search your city and know about weather
        </Typography>
    </Box>
  )
}

