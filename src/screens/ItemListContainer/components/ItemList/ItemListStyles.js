export const itemListStyles = theme => {
    return({
        root: {
            display: 'flex',
            '& > * + *': {
              marginLeft: theme.spacing(2),
              
            },

        },
       

        GridConteiner : {
            display: 'flex',
            alignItems: 'start',
            height: "100%",
            paddingTop: 40,
            justifyContent: 'start',
        }
        
    })
}