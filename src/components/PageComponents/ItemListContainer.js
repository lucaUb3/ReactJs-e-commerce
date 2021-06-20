import React, {useState, useEffect } from 'react';
import {PageStyle} from './PageStyle.js';
import {makeStyles,Typography} from '@material-ui/core';
import {ItemCount } from '../Counter/ItemCounter.js';
import {ItemList} from './ItemList.js';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import {itemListContainerStyles} from './ItemListContainerStyles.js'

const useStyle = makeStyles((theme) => itemListContainerStyles(theme));

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

const ItemListContainer = () => {
const classes = useStyle();

  const [itemsData, setItemsData] = useState([]);
  
  const ejecutarSeleccion = () => {
    promiseItems().then((data) => {
      const dataFiltrada = data.filter((element) => element.destacado);
      setItemsData(dataFiltrada);
    });
  };

  useEffect(() => {
    ejecutarSeleccion();
  }, []);

    return <div>
    <h1>
     <ItemList itemsData = {itemsData}  />
    </h1>
    </div>
};

export default ItemListContainer;