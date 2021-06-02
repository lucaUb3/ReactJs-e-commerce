import React from 'react';
import {makeStyes} from '@material-ui/core';




const commonStyles = {
    display: 'flex',
    alignSelf: 'center',

};

export const navBarStyle = theme => {
    return({
    
    
    navStyle: {
    display: 'flex',
    background: 'linear-gradient(45deg, black 70%,#7D0C32 90%)',
    
    
  },
  leftContainer:{
    display: 'flex',
    width: '100%',
    justifyContent: 'rigth',
    columnGap: '2em',
      },
    brand: {
      
      color : '#FFFCFC',
      fontFamily: 'roboto',
      fontWeight: 'bold',
      alignSelf: 'normal',
      '@media (max-width:600px)':{
        alignSelf: 'center',
        
    },
      
    },

  buttonStyle:{
      display: 'flex',
      alignSelf: 'center',
      flexDirection: 'row',      
     
      color: '#E4E8FE',
      flexGrow: 1,
      '&:hover':{ background: 'black',
      color: '#FFFCFC',
      }
  },
      centerConteiner: {
       display: 'flex',
       columnGap: '1em'
},
  
      
      
  
})}; 

