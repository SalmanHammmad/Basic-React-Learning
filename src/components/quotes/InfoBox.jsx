import React from 'react';
import { useState } from 'react';
import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const InfoBox = ({ info }) => {
  const { quote, name, house } = info;
  
  const getImagePath = (characterName) => {

    const formattedName = characterName.toLowerCase().split(' ')[0]; 
    return `./public/got/${formattedName}.jpg`; 
  };
  
  
  const imagePath = getImagePath(name); 
  

  return (
   

<Card variant="outlined" sx={{ maxWidth: 345 ,    backgroundColor:'rgb(68, 16, 16)'}}>
      
      
      <CardMedia
        sx={{ height: 140 }}
        image={imagePath}
        title={name}
      />

      <CardContent className='CardContents'>
        
        <Typography className='Name' gutterBottom variant="h5" sx={{ color: 'white' }} component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'skyblue' }}>
          {house}
        </Typography>
        <Typography variant="body2" sx={{ color: 'gold' }}>
          <br/>
          " {quote} "
        </Typography>

      </CardContent>
    </Card>
    
  );
};

export default InfoBox;
