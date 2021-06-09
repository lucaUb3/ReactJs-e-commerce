import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { counterStyle } from './CounterStyle.js';
import moment from 'moment';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => counterStyle(theme));

export const Counter = props => {
  const classes = useStyles();
  const [count, setCount] = useState(0);


  const handleChange = () => {
    setCount(count + 1);
  }
  return <div className={classes.container}>
    <h4>Le diste click {count} veces </h4>
    {count > 0 && <h5>El día {moment().format('DD-MM-YYYY HH:mm:ss ')}</h5>}
    <Button variant = "contained" color = "Primary" onClick={e => handleChange()}>Click! </Button>
  </div>
}