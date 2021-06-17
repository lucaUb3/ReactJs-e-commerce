import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import {itemStyle} from "./ItemStyle.js";

const useStyle = makeStyles((theme) => itemStyle(theme));

export const Item = props => {
    const {id,title,description,price,pictureUrl} = props;
    const classes = useStyle();

    return <>
    <Card className = {classes.root}>
        <CardActionArea className = {classes.cardAction}>
        <CardMedia 
            component = 'img'
            image = {pictureUrl}
            width ="50%"
            title = {title} 
            />
        <CardContent className = {classes.CardContent}>
            <Typography className = {classes.titulo} component = "h2" >{title}</Typography>
            <Typography className = {classes.description} component = "p" >{description}</Typography>
            <Typography className = {classes.price}>${price}</Typography>
            <Typography className = {classes.id}component = "p" >{id}</Typography>
        </CardContent>
        </CardActionArea>
    </Card>

</>
    

};