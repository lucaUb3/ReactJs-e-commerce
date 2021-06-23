import React from 'react';

export const ItemDetailStyle = theme => {
return({
    root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    marginTop: '1em',
    
  },
  paper: {
    display: 'flex',
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 400,
   
  },
  paperContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
     
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  info : {
   display: 'flex',
   flexDirection: 'column',
  },
  detalle: {
    display: 'flex',
    flexDirection: 'column',
  },
  counter: {
    alignItems: 'end'
  }
  
    })
}
