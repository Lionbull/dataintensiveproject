import {Box, Card, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import "../styles/gameinformation.css"

function gameInformation() {

    return (
      <>
        <Box className="game-outer" >

            <Card sx={{width: "1200px"}}>
                <Box className="game-wrapper-outer">

                    <Box className="game-wrapper-left">
                        <Box component="img" src={"https://media.istockphoto.com/id/1439837596/photo/blank-tv-or-picture-frame-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=OZmkq3tJ1nXJ_DzOsTHQlnMi8VVZX6EZrJP8Mb1V844="} sx={{width: '100%'}}/>
                    </Box>
                    
                    <Box className="game-wrapper-right">
                        <Box className="game-wrapper-right-inner">
                            <Typography variant="h2">Game Title</Typography>
                            <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet convallis metus, sit amet faucibus metus condimentum bibendum. Vivamus blandit at urna eu tincidunt.</Typography>
                        </Box>
                        
                        <Box className="game-wrapper-right-wrapper-inner">
                            <Box className="game-wrapper-right-inner">
                                <Typography variant="body1">20XX</Typography>
                                <Typography variant="body1">Genre</Typography>
                                <Typography variant="body1">Age limit</Typography>
                            </Box>
                            <Box className="game-wrapper-right-inner">
                                <Typography className="price">Price</Typography>
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
  