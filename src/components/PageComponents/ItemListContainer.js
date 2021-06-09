import React from 'react';
import {PageStyle} from './PageStyle.js';
import {makeStyles,Typography} from '@material-ui/core';
import { Counter } from '../Counter/Counter.js';

const useStyles = makeStyles ((theme) => PageStyle (theme));
const ItemListContainer = ({titulo,render}) => {
const classes = useStyles();
    return <div className = {classes.Page}>
    <h1>
     
     <Counter/>
    </h1>
    </div>
};

export default ItemListContainer;