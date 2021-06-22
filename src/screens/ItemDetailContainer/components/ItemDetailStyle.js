import React from 'react';

export const ItemDetailStyle = theme => {
return({
        root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    marginTop: '1em',
  },
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 400,
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
  }
    })
}
