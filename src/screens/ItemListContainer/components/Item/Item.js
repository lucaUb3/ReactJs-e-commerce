import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import {itemStyle} from "./ItemStyle.js";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

const useStyle = makeStyles((theme) => itemStyle(theme));

export const Item = props => {
    const element = props;
    const classes = useStyle();

    return <>
    <Card className = {classes.root}>
        <Link to = {`/item/${element.id}` }>
        <CardActionArea className = {classes.cardAction}>
        <CardMedia className = {classes.CardMedia}
            component = 'img'
            image = {element.picture.pictureUrl}
            width ="100%"
            title = {element.title} 
            />
        <CardContent className = {classes.CardContent}>
            <Typography className = {classes.titulo} component = "h2" >{element.title}</Typography>
            <Typography className = {classes.description} component = "p" >{element.description}</Typography>
            <Typography className = {classes.price}>${element.price}</Typography>
            <Typography className = {classes.id}component = "p" >{element.id}</Typography>
        </CardContent>
        </CardActionArea>
        </Link>
    </Card>

</>
    

};
