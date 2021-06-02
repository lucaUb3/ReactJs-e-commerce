import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles,
    ListItem, ListItemText, List, Button} from '@material-ui/core';
import {navBarStyle} from './NavBarStyle.js';

const commonStyles = {
    display: 'flex',
    alignSelf: 'center',

}   
const useStyles = makeStyles ((theme) => navBarStyle (theme));
    
   

export const NavBar = props => {
        
    const classes = useStyles();

    return <AppBar position ="fixed" className = {classes.navStyle}>
        <Toolbar>
            <div className = {classes.leftContainer}>
                <Typography variant = "h5" className = {classes.brand}>
                   Samplecity 
                </Typography>
                <div className = {classes.centerConteiner}>
                <Button className = {classes.buttonStyle}>sonidos</Button>
                <Button className = {classes.buttonStyle}>iniciar sesion</Button>
                </div> 
                
                    </div>
                    </Toolbar>
         </AppBar>

    };


