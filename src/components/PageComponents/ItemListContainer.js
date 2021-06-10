import React from 'react';
import {PageStyle} from './PageStyle.js';
import {makeStyles,Typography} from '@material-ui/core';
import { ItemCount } from '../Counter/ItemCounter.js';

const useStyles = makeStyles ((theme) => PageStyle (theme));
const ItemListContainer = ({titulo,render}) => {
const classes = useStyles();
    return <div className = {classes.Page}>
    <h1>
     
     <ItemCount stock = {10} initial = {1}/>
    </h1>
    </div>
};

export default ItemListContainer;