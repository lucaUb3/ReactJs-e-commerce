import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import RemoveCircleSharpIcon from '@material-ui/icons/RemoveCircleSharp';
import {itemCounterStyle} from './ItemCounterStyle'


const useStyles = makeStyles((theme) => itemCounterStyle(theme));


export const ItemCount = (props) => {
  const classes = useStyles(); 
  const {stock, initial} = props;
  const [count, setCount] = useState(initial);
  const [buttonState, setButtonState] = useState(false);

  const onAdd = (e) => {
    if (count > 0 && count <= stock) {
    console.log ('Tenes ' + count + ' samples en tu carrito')
    }
  }

  const addItem = (e) => {if (count == stock){

  }
  else (setCount(count +1))
}

  const removeItem = (e) => {if (count == 0){

  }
  else (setCount(count-1))
}
return <section>
           <div>
            <div className={classes.buttonplus}>
              <button onClick={e => removeItem()}>
               <RemoveCircleSharpIcon fontSize='small'/>
              </button>
              </div>

              <h1 className ={classes.screen}>{count}</h1>

              <div className={classes.buttonminus}>
                  <button onClick={e => addItem() }>
                   <AddCircleSharpIcon fontSize='small' />
                  </button>
              </div>
          </div>
      
    <button disabled={buttonState} onClick={e => count === 0 ? undefined : onAdd()}>
      <AddShoppingCartSharpIcon />
          AÑADIR AL CARRITO
    </button>
  {count == stock && <h5>Stock Maximo</h5>}
 
</section>
}