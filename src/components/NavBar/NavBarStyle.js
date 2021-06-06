import React from 'react';
import {makeStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';




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
      rigthConteiner : {
        display: 'flex',
        alignSelf: 'rigth',

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
  CartWidget :{
    color: '#FFFCFC',
  }
      
      
  
})}; 

