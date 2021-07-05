import React, {useState, useEffect } from 'react';
import {PageStyle} from '../../styles/PageStyle.js';
import {makeStyles,Typography} from '@material-ui/core';
import {ItemCount } from '../../components/Counter/ItemCounter.js';
import {ItemList} from './components/ItemList/ItemList.js';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import {itemListContainerStyles} from './ItemListContainerStyles.js'
import {useParams} from "react-router-dom";
import {data} from "../../services/Data.js";



const useStyle = makeStyles((theme) => itemListContainerStyles(theme));

const promiseItems = () => {
  return new Promise((resolve, reject) => {
    
    setTimeout(
      () =>
        resolve(data),
      2000
    );
  });
};

const ItemListContainerCategory = () => {
const classes = useStyle();
const {Categoryid} = useParams ();


  const [samplesData, setSamplesData] = useState([]);
  
  const ejecutarSeleccion = () => {
    promiseItems().then((sample) => {
      const dataFiltrada = sample.filter((element) => element.categoria == Categoryid);
      setSamplesData(dataFiltrada);
    });
  };

  useEffect(() => {
    ejecutarSeleccion();
  }, [Categoryid]);

    return <div>
    <h1>
     <ItemList samplesData = {samplesData} key = {samplesData.id}/>
    </h1>
    </div>
};

export default ItemListContainerCategory;