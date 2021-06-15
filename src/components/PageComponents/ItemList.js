import React, { useState, useEffect } from "react";
import {Item} from "./Item.js"
import {makeStyles} from "@material-ui/core/styles";
import {itemListStyles} from "./ItemListStyles.js";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyle = makeStyles((theme) => itemListStyles(theme));

const promiseItems = () => {
  return new Promise((resolve, reject) => {
    
    setTimeout(
      () =>
        resolve([
            { id: 1, 
              destacado: true, 
              title: "Index of Metals",
              description: 'Brass Sounds and Sounds FX',
              price: 170,
              picture: {
                  pictureUrl:"https://i1.wp.com/touchloops.com/wp-content/uploads/2020/07/Motor-City-Brass_NEW_1000x.jpg?fit=1000%2C1000&ssl=1"
                  },
             },
             { id: 2, 
                destacado: true, 
                title: "Woods Strings",
                description: 'String Sounds and Sounds FX',
                price: 150,
                picture: {
                    pictureUrl:"https://cdn-resources.ableton.com/resources/public/2012/12/11/orchestral-strings.png"
                    },
               },,
               { id: 3, 
                destacado: true, 
                title: "CreepBeat",
                description: 'Dark Beats and Sounds FX',
                price: 70,
                picture: {
                    pictureUrl:"https://cdn.sanity.io/images/e5dtp8wy/production/N1YHPMlZ3Vn5IB19AiHzhgE7-2817x2583.tiff?w=300"
                    },
               },
               { id: 4, 
                destacado: true, 
                title: "Desert",
                description: 'Ambient Sounds and foleys',
                price: 90,
                picture: {
                    pictureUrl:"https://cdna.artstation.com/p/assets/images/images/003/394/744/large/muhammad-iqbal-ridzuan-red-desert.jpg?1473244057"
                    },
               },
               { id: 5, 
                destacado: true, 
                title: "NeoTokyo",
                description: 'Brass Sounds and Sounds FX',
                price: 200,
                picture: {
                    pictureUrl:"https://i0.wp.com/touchloops.com/wp-content/uploads/2019/06/Download-Lo-Fi-Hip-Hop-Loops_700.jpg?fit=700%2C700&ssl=1"
                    },
               },
           ]),
      2000
    );
  });
};

export const ItemList = () => {
  const classes = useStyle();
  const [ItemsData, setItemsData] = useState([]);
  

  const ejecutarSeleccion = () => {
    promiseItems().then((data) => {
      const dataFiltrada = data.filter((element) => element.destacado);
      setItemsData(dataFiltrada);
    });
  };

  useEffect(() => {
    ejecutarSeleccion();
  }, []);

  return <> 
        
      {ItemsData.length === 0 ? (
        <div className={classes.root}>
        <CircularProgress />
        <CircularProgress color="secondary"/>
      </div>
      ) : (<Grid container>
          <Grid item xs = {12}>
         <Grid className = {classes.GridConteiner} container justify ="center">
          {ItemsData.map((element) => <Item key = {element.id}
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

