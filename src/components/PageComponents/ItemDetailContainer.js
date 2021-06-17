import React, { useState, useEffect } from 'react';
import {ItemDetail} from './ItemDetail';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from "@material-ui/core/styles";
import {itemListStyles} from "./ItemListStyles.js";

const useStyle = makeStyles((theme) => itemListStyles(theme));

const promiseItemDetail = () => {
  return new Promise((resolve, reject) => {
    
    setTimeout( () =>
        resolve(
               {id: 5, 
                destacado: true, 
                title: "NeoTokyo",
                description: 'Brass Sounds and Sounds FX',
                price: 200,
                picture: {
                pictureUrl:"https://i0.wp.com/touchloops.com/wp-content/uploads/2019/06/Download-Lo-Fi-Hip-Hop-Loops_700.jpg?fit=700%2C700&ssl=1"
                    },
               },
           ),
      2000
    );
  });
}; 

export const ItemDetailContainer = () => {
  const classes = useStyle();
  const [sampleData, setSampleData] = useState(undefined);
  

  const ejecutarSeleccion = () => {
    promiseItemDetail().then((data) => {
    setSampleData(data);
    });
  };

  useEffect(() => {
    ejecutarSeleccion();
  }, []);

  return <> 
        
      {sampleData ? 
         <ItemDetail element = {sampleData}/>
        : <div className={classes.root}>
        
        <CircularProgress color="secondary"/>
          </div>};
   
    </>
 };
