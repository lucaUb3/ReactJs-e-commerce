import React, {useState, useEffect } from 'react';
import {PageStyle} from '../../styles/PageStyle.js';
import {makeStyles,Typography} from '@material-ui/core';
import {ItemCount } from '../../components/Counter/ItemCounter.js';
import {ItemList} from './components/ItemList/ItemList.js';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import {itemListContainerStyles} from './ItemListContainerStyles.js'
import {data} from '../../services/Data.js';
import {dataBase} from '../../Firebase/firebase';

/*useEfectt (() => {
  setLoading (true);
  const itemCollection = dataBase.collection ("productos");
  itemCollection.get().then((querySnapshot)=>{
    if(querySnapshot.size === 0) {
      console.log ('No results!');
    }
    setItems (querySnapshot.docs.map (doc => doc.data()));
  }).catch ((error) => {
    console.log ("error searching productos"),error)
  }).finally (()=> {
    setLoading(false);
  });

},[]);*/



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

const ItemListContainer = () => {
const classes = useStyle();

  const [samplesData, setSamplesData] = useState([]);
  
  const ejecutarSeleccion = () => {
    promiseItems().then((sample) => {
      const dataFiltrada = sample.filter((element) => element.destacado);
      setSamplesData(dataFiltrada);
    });
  };

  useEffect(() => {
    ejecutarSeleccion();
  }, []);

    return <div>
    <h1>
     <ItemList samplesData = {samplesData} key = {samplesData.id}/>
    </h1>
    </div>
};

export default ItemListContainer;