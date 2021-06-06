import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import {navBarStyle} from './NavBarStyle.js';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles ((theme) => navBarStyle (theme));

export const CartWidget = props => {
    const classes = useStyles();

return <>
<IconButton className = {classes.CartWidget} >
<ShoppingCartIcon/>
</IconButton>
</>

};