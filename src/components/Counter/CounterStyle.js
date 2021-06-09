
export const counterStyle = theme => {
    return ({
      container: {
        display: 'flex',
        padding: '1em',
        
        alignItems: 'baseline',
        '& > h4': {
          fontSize: '1em',
          color: 'Black',
          marginBottom: '0.2em'
        },
        '& > h5': {
          fontSize: '1em',
          color: 'Black',
          marginBottom: '0.3em',
          alignSelf: 'top',
        }
      }
    })
  };