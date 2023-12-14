import {Box, Card, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import "../styles/gameinformation.css"

//TEST DATA BELOW - REPLACE WITH DATABASE PROPS DATA
import mockData from "../mock-data/gameinformation.json";
// ADD props AND REMOVE 'mockData.' from the variables

function gameInformation() {

    return (
      <>
        <Box className="game-outer" >

            <Card sx={{width: "1200px"}}>
                <Box className="game-wrapper-outer">

                    <Box className="game-wrapper-left">
                        <Box component="img" src={"https://media.istockphoto.com/id/1439837596/photo/blank-tv-or-picture-frame-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=OZmkq3tJ1nXJ_DzOsTHQlnMi8VVZX6EZrJP8Mb1V844="} sx={{width: '250px', height: "auto"}}/>
                    </Box>
                    
                    <Box className="game-wrapper-right">
                        <Box className="game-wrapper-right-inner">
                            <Typography variant="h2">{mockData.name}</Typography>
                            <Typography variant="h5">{mockData.description}</Typography>
                        </Box>
                        
                        <Box className="game-wrapper-right-wrapper-inner">
                            <Box className="game-wrapper-right-inner">
                                <Typography variant="body1">Release year: {mockData.release_year}</Typography>
                                <Typography variant="body1">Genre: {mockData.genre}</Typography>
                                <Typography variant="body1">Age limit: {mockData.age_limit}</Typography>
                            </Box>
                            <Box className="game-wrapper-right-inner">
                                <Typography className="price">Budget: {mockData.budget}</Typography>
                                <Typography>Engine: {mockData.engine}</Typography>
                                <Typography>Country: {mockData.country}</Typography>
                            </Box>
                            <Box className="game-wrapper-right-inner">
                                <Typography className="price">Price: {mockData.price}</Typography>
                                <Typography>Store links</Typography>
                            </Box>
                        </Box>
                
                    </Box>
                    
                </Box>
            </Card>
        </Box>
      </>
    )
  }
  
export default gameInformation
  