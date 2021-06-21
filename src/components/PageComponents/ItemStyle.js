import { CardContent } from "@material-ui/core"

export const itemStyle = theme => {
    return ({
        root: {
            maxWidth: 300,
            minWidth: 300,
            margin: '10px',
            backgroundColor: 'black',
            
        },
        cardContent: {
             
            
          },

        
        titulo:{
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: 'white',
            
        },

       description: {
        color: 'white',
       },
       price: {
        color: 'white',
       },
       id: {
        color: 'white',
       }
        
    })
}