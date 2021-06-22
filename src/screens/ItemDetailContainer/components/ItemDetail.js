import React from 'react';
import {ItemDetailContainer} from '../ItemDetailContainer.js';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {ItemDetailStyle} from './ItemDetailStyle.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, Grid,Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import IconButton from '@material-ui/core/IconButton';


const useStyle = makeStyles((theme) => ItemDetailStyle(theme));


export const ItemDetail = props => {
    const {sampleData} = props;
    const classes = useStyle();
     const theme = useTheme();
    return <>
       <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid className = {classes.paperContainer} container spacing={2}>
          <Grid item>
            <CardActionArea className = {classes.cardAction}>
              <CardMedia 
               component = 'img'
               image = {sampleData.picture.pictureUrl}
               width ="50%"
               title = {sampleData.title}/>
             </CardActionArea>
          </Grid>
          <Grid item xs container direction="column" spacing={2}>
            <Grid className = {classes.info}  item xs>
              <Typography gutterBottom variant="subtitle1">
                {sampleData.title} 
              </Typography>
              <div className = {classes.detalle}>
              <Typography variant="body2" gutterBottom>
                 Detalle
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {sampleData.description}
              </Typography>
              </div>
            </Grid>
            <Grid item className= {classes.reproductor}>
              <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
              </IconButton>
              <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">${sampleData.price}</Typography>
          </Grid>
      </Grid>
    
   </Paper>
      
    </div>
    </>
};
