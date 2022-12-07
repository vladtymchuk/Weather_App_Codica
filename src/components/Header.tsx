import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import {Update} from '@material-ui/icons'

export const Header = () => {
  return (
    <AppBar position="static" sx={{backgroundColor: '#a80017'}}>
        <Toolbar>
            <Typography 
                variant="h6" 
                style={{
                    flexGrow: 1
                }}
            >
                CODICA Weather
            </Typography>
            <IconButton 
                color='inherit'
            >
                <Update />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
