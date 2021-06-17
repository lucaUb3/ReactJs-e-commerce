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
  const [SampleData, setSampleData] = useState([]);
  

  const ejecutarSeleccion = () => {
    promiseItemDetail().then((data) => {
      const dataFiltrada = data.filter((element) => element.destacado);
      setSampleData(dataFiltrada);
    });
  };

  useEffect(() => {
    ejecutarSeleccion();
  }, []);

  return <> 
        
      {SampleData.length === 0 ? (
        <div className={classes.root}>
        <CircularProgress />
        <CircularProgress color="secondary"/>
      </div>
      ) : (<Grid container>
          <Grid item xs = {12}>
         <Grid className = {classes.GridConteiner} container justify ="center">
          {SampleData.map((element) => <ItemDetail key = {element.id}
          id={element.id} 
          title={element.title} 
          description={element.description}
          price={element.price}
          pictureUrl={element.picture.pictureUrl} 
          />)}
          </Grid>
      </Grid>
      </Grid>)
       }
   
    </>
 };