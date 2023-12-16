import {Box, Card, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import "../styles/gameinformation.css"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//TEST DATA BELOW - REPLACE WITH DATABASE PROPS DATA
import mockData from "../mock-data/gameinformation.json";
import config from "../config.js";

// ! ! NOTE ! !
// ADD props AND REMOVE 'mockData.' from the variables

function GameInformation() {
  const [gameData, setGameData] = useState(null);

  const { country, id } = useParams();
  console.log(country, id)
  useEffect(() => {
      
      const apiUrl = `${config.uri}/api/game/${country}/${id}`
      console.log(apiUrl)
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          console.log('Fetched data:', data);
          setGameData(data);
          console.log(gameData)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
      <>
      {gameData ? (
        <div>
          <Box className="game-outer" >
            <Card sx={{width: "1200px"}}>
                <Box className="game-wrapper-outer">

                    <Box className="game-wrapper-left">
                        <Box component="img" src={"https://media.istockphoto.com/id/1439837596/photo/blank-tv-or-picture-frame-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=OZmkq3tJ1nXJ_DzOsTHQlnMi8VVZX6EZrJP8Mb1V844="} sx={{width: '250px', height: "auto"}}/>
                    </Box>
                    
                    <Box className="game-wrapper-right">
                        <Box className="game-wrapper-right-inner">
                            <Typography variant="h2">{gameData.name}</Typography>
                            <Typography variant="h5">{gameData.vg_description}</Typography>
                        </Box>
                        
                        <Box className="game-wrapper-right-wrapper-inner">
                            <Box className="game-wrapper-right-inner">
                                <Typography variant="body1">Release year: {gameData.release_year}</Typography>
                                <Typography variant="body1">Genre: {gameData.genre}</Typography>
                                <Typography variant="body1">Age limit: {gameData.age_limit}</Typography>
                            </Box>
                            <Box className="game-wrapper-right-inner">
                                <Typography className="price">Budget: {gameData.budget}</Typography>
                                <Typography>Engine: {gameData.engine}</Typography>
                                <Typography>Country: {gameData.country}</Typography>
                            </Box>
                            <Box className="game-wrapper-right-inner">
                                <Typography className="price">Price: {gameData.price}</Typography>
                                <Typography>Store links</Typography>
                                <Typography>Platforms:</Typography>
                                <div>
                                  {gameData.platform.map((platform, index) => (
                                  <Typography key={index}>{platform}</Typography>
                                ))}
                                </div>
                                
                            </Box>
                        </Box>
                
                    </Box>
                    
                </Box>
            </Card>
        </Box>
        </div>
      ) : (
        <Typography variant="subtitle1">Loading...</Typography>
      )}
        
      </>
    )
}
  
export default GameInformation
  