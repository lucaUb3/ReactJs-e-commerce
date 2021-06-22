import React, { useState, useEffect } from "react";
import {Item} from "../Item/Item.js"
import {makeStyles} from "@material-ui/core/styles";
import {itemListStyles} from "./ItemListStyles.js";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ItemListContainer from '../../ItemListContainer.js';


const useStyle = makeStyles((theme) => itemListStyles(theme));

export const ItemList = props => {
  const classes = useStyle();
  const samplesData = props
  console.log(props)

  return <> 
        
      {samplesData.length === 0 ? (
        <div className={classes.root}>
       <CircularProgress color="secondary"/>
      </div>
      ) : (<Grid  container className = {classes.GridConteiner1}>
          <Grid item xs = {12} className = {classes.GridContainer2}>
         <Grid className = {classes.GridConteiner} container justify ="center">
          {props.samplesData.map((element) => {
          return <div> <Item {...element} key = {element.id}/> </div> })}
          </Grid>
      </Grid>
      </Grid>)
       }
   
    </>
 };

