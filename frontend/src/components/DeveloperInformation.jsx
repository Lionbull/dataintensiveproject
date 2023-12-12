import {Box, Card, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import "../styles/developerinformation.css"

function DeveloperInformation() {

    return (
      <>
        <Card className="developer-outer" sx={{width: "1200px"}}>
            <Box className="developer-wrapper-outer">

                <Box className="developer-wrapper-left">
                    <Box component="img" src={"https://media.istockphoto.com/id/1439837596/photo/blank-tv-or-picture-frame-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=OZmkq3tJ1nXJ_DzOsTHQlnMi8VVZX6EZrJP8Mb1V844="} sx={{width: '100%'}}/>
                </Box>
                
                <Box className="developer-wrapper-right">
                    <Box className="developer-wrapper-right-inner">
                        <Typography variant="h2">Developer Title</Typography>
                        <Typography variant="h5" className="developer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet convallis metus, sit amet faucibus metus condimentum bibendum. Vivamus blandit at urna eu tincidunt.</Typography>
                    </Box>
                    <Box className="developer-wrapper-right-inner">
                        <Typography variant="body1">Website: 'url here'</Typography>
                        <Typography variant="body1">Founding year: 20XX</Typography>
                        <Typography variant="body1">Revenue 20xx: 1 000 000 €</Typography>
                    </Box>
                    <Box className="developer-wrapper-right-inner">
                        <Typography variant="body1">Company type: Indie / AAA</Typography>
                        <Typography variant="body1">Number of employees: 100500 </Typography>
                    </Box>
            
                </Box>
                
            </Box>
        </Card>
      </>
    )
  }
  
export default DeveloperInformation
  