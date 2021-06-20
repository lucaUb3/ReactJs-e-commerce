import React, { useState, useEffect } from "react";
import {Item} from "./Item.js"
import {makeStyles} from "@material-ui/core/styles";
import {itemListStyles} from "./ItemListStyles.js";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ItemListContainer from './ItemListContainer.js';


const useStyle = makeStyles((theme) => itemListStyles(theme));

export const ItemList = props => {
  const classes = useStyle();
  const itemsData = props
  console.log(props)

  return <> 
        
      {itemsData.length === 0 ? (
        <div className={classes.root}>
       <CircularProgress color="secondary"/>
      </div>
      ) : (<Grid container>
          <Grid item xs = {12}>
         <Grid className = {classes.GridConteiner} container justify ="center">
          {itemsData.map((element) => {
          return <div> <Item {...itemsData} key = {itemsData.id}
          /></div>}
          )}
          </Grid>
      </Grid>
      </Grid>)
       }
   
    </>
 };

