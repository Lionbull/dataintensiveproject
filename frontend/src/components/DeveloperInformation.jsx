import {Box, Card, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import "../styles/developerinformation.css"

//TEST DATA BELOW - REPLACE WITH DATABASE PROPS DATA
import mockData from "../mock-data/developerinformation.json";
// ADD props AND REMOVE 'mockData.' from the variables

function DeveloperInformation() {

    return (
      <>
        <Card className="developer-outer" sx={{width: "1200px"}}>
            <Box className="developer-wrapper-outer">

                <Box className="developer-wrapper-left">
                    <Box component="img" src={"https://media.istockphoto.com/id/1439837596/photo/blank-tv-or-picture-frame-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=OZmkq3tJ1nXJ_DzOsTHQlnMi8VVZX6EZrJP8Mb1V844="} sx={{width: '250px'}}/>
                </Box>
                
                <Box className="developer-wrapper-right">
                    <Box className="developer-wrapper-right-inner">
                        <Typography variant="h2">{mockData.name}</Typography>
                        <Typography variant="h5" className="developer-description">{mockData.description}</Typography>
                    </Box>
                    <Box className="developer-wrapper-right-inner">
                        <Typography variant="body1">Website: <a href={mockData.website}>{mockData.website}</a></Typography>
                        <Typography variant="body1">Founding year: {mockData.founding_year}</Typography>
                        <Typography variant="body1">Revenue 20xx: {mockData.revenue}</Typography>
                    </Box>
                    <Box className="developer-wrapper-right-inner">
                        <Typography variant="body1">Company type: {mockData.company_type}</Typography>
                        <Typography variant="body1">Number of employees: {mockData.number_of_employees}</Typography>
                    </Box>
            
                </Box>
                
            </Box>
        </Card>
      </>
    )
  }
  
export default DeveloperInformation
  