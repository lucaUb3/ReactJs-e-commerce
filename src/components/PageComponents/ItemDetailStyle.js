import React from 'react';

export const ItemDetailStyle = theme => {
return({
        root: {
            display: 'flex',
            '& > * + *': {
              marginLeft: theme.spacing(2),
              
            },
        },
        GridConteiner : {
            height: "100%",
            paddingTop: 5,
            justifyContent: 'start',
        }
        
    })
}