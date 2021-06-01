import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles,
    ListItem, ListItemText, List, Button} from '@material-ui/core';
//import {NavBarStyle} from './NavBarStyle.js';
   
const useStyles = makeStyles ((theme) => ({
    root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navStyle: {
    background: 'linear-gradient(45deg, black 30%, #D6540F 90%)',
    
  },
  leftContainer:{
      

  },

  brand: {
      color : '#FFFCFC',
      fontFamily: 'roboto',
    },
  list : {

  },
  menuText : {
      alignContent : 'right'
      
  },
  buttonStyle:{
      background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: '#FFFCFC',
      flexGrow: 1,
      alignSelf: 'right',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
      
      
  
})); 

export const NavBar = props => {
        
    const classes = useStyles();

    return <AppBar position ="fixed" className = {classes.navStyle}>
        <Toolbar>
            <div className = {classes.leftContainer}>
                <Typography variant = "h5" className = {classes.brand}>
                   Samplecity 
                </Typography>
                <List className = {classes.list}>
                    <ListItem button> 
                    <ListItemText className = {classes.menuText} primary = {'Sonidos'} />
                    
                    </ListItem>
                   
                </List>
                <Button className = {classes.buttonStyle}>sonidos</Button>
                <Button className = {classes.buttonStyle}>iniciar sesion</Button>
                    </div>

        </Toolbar>
        


    </AppBar>

    };


