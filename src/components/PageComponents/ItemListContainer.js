import React from 'react';
import {PageStyle} from './PageStyle.js';
import {makeStyles,Typography} from '@material-ui/core';

const useStyles = makeStyles ((theme) => PageStyle (theme));
const ItemListContainer = ({titulo,children}) => {
const classes = useStyles();
    return <div className = {classes.Page}>
    <h1>
     {titulo} 
     {children}  
    </h1>
    </div>
};

export default ItemListContainer;