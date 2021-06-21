import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles,
ListItem, ListItemText, List, Button} from '@material-ui/core';
import {navBarStyle} from './NavBarStyle.js';
import {CartWidget} from './CartWidget.js';
import {Link} from "react-router-dom";

const commonStyles = {
    display: 'flex',
    alignSelf: 'center',

}   
const useStyles = makeStyles ((theme) => navBarStyle (theme));
    
   

export const NavBar = props => {
     
    const classes = useStyles();
    const beats = "beats";
    const samples = "samples"

    return <div>
    <AppBar position ="fixed" className = {classes.navStyle}>
        <Toolbar>
            <div className = {classes.leftContainer}>
                <Link to = {'/'}> <Typography variant = "h5" className = {classes.brand}> 
                Samplecity 
                </Typography>
                </Link> 
                <div className = {classes.centerConteiner}>
                <Link to = {`/category/${beats}`}>
                <Button className = {classes.buttonStyle}>Beats</Button>
                </Link>
                 <Link to = {`/category/${samples}`}>
                <Button className = {classes.buttonStyle}>Samples</Button>
                </Link>
                </div> 
                
                </div>
                <CartWidget/>
                </Toolbar>
         </AppBar>
         
         </div>
    };


