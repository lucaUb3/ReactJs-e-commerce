import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import {navBarStyle} from './NavBarStyle.js';
import {makeStyles} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import { Counter } from '../Counter/Counter.js';

const useStyles = makeStyles ((theme) => navBarStyle (theme));

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
  

    

  export const CartWidget = () => {
    const classes = useStyles();
    
    

    return (
        <IconButton >
          <StyledBadge badgeContent={1} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        
      );
    }