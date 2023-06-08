

import './Card.css'

import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Card = ({data}) => {

    


    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data.avatar_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.html_url}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      );
}

export default Card