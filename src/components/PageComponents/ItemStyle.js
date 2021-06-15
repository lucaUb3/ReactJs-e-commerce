import { CardContent } from "@material-ui/core"

export const itemStyle = theme => {
    return ({
        root: {
            maxWidth: '20%',
            margin: '10px',
            backgroundColor: 'black',
            
        },
        
        titulo:{
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '20px',
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