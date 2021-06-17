import React from 'react';
import {ItemDetailContainer} from './ItemDetailContainer.js';
import {makeStyles} from "@material-ui/core/styles";
import {ItemDetailStyle} from './ItemDetailStyle.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyle = makeStyles((theme) => ItemDetailStyle(theme));

export const ItemDetail = props => {
    const {SampleData} = props;
    const classes = useStyle();

    return <> 
        <Card className = {classes.root}>
        <CardActionArea className = {classes.cardAction}>
        <CardMedia 
            component = 'img'
            image = {SampleData.pictureUrl}
            width ="50%"
            title = {SampleData.title} 
            />
        <CardContent className = {classes.CardContent}>
            <Typography className = {classes.titulo} component = "h2" >{SampleData.title}</Typography>
            <Typography className = {classes.description} component = "p" >{SampleData.description}</Typography>
            <Typography className = {classes.price}>${SampleData.price}</Typography>
            <Typography className = {classes.id}component = "p" >{SampleData.id}</Typography>
        </CardContent>
        </CardActionArea>
    </Card>
              
       
   
    </>
 };