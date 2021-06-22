import React, { useState, useEffect } from 'react';
import {ItemDetail} from './components/ItemDetail';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from "@material-ui/core/styles";
import {itemListStyles} from "../ItemListContainer/components/ItemList/ItemListStyles.js";
import {useParams} from "react-router-dom";
import {data} from "../../services/Data.js"
const useStyle = makeStyles((theme) => itemListStyles(theme));

const promiseItemDetail = () => {
  return new Promise((resolve, reject) => {
    
    setTimeout( () =>
        resolve(data),
      2000
    );
  });
}; 

export const ItemDetailContainer = () => {
  const classes = useStyle();
  const [sampleData, setSampleData] = useState(undefined);
  const {itemid} = useParams()
  

  const ejecutarSeleccion = () => {
    promiseItemDetail().then((sample) => {
      const dataFiltrada = sample.find((element) => element.id == itemid);
      setSampleData(dataFiltrada);
    });
  };

  useEffect(() => {
    ejecutarSeleccion();
  }, [itemid]);

  return <> 
        
      {sampleData ? 
         <ItemDetail sampleData = {sampleData}/>
        : <div className={classes.root}>
        
        <CircularProgress color="secondary"/>
          </div>};
   
    </>
 };
