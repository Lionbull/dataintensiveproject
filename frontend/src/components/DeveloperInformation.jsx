import {Box, Card, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import "../styles/developerinformation.css"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//TEST DATA BELOW - REPLACE WITH DATABASE PROPS DATA
import mockData from "../mock-data/developerinformation.json";
import config from "../config.js";

// ! ! NOTE ! !
// ADD props AND REMOVE 'mockData.' from the variables

function DeveloperInformation() {
    const [developerData, setDeveloperData] = useState(null);

    const { country, id } = useParams();
    console.log(country, id)
    useEffect(() => {
        
        const apiUrl = `${config.uri}/api/developer/${country}/${id}`;
        console.log(apiUrl)
        const fetchData = async () => {
          try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('Fetched data:', data);
            setDeveloperData(data)
            console.log(developerData)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
      <>
      {developerData ? (
        <div>
          <Card className="developer-outer" sx={{width: "1200px"}}>
            <Box className="developer-wrapper-outer">

                <Box className="developer-wrapper-left">
                    <Box component="img" src={"https://media.istockphoto.com/id/1439837596/photo/blank-tv-or-picture-frame-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=OZmkq3tJ1nXJ_DzOsTHQlnMi8VVZX6EZrJP8Mb1V844="} sx={{width: '250px'}}/>
                </Box>
                
                <Box className="developer-wrapper-right">
                    <Box className="developer-wrapper-right-inner">
                        <Typography variant="h2">{developerData.dev_name}</Typography>
                        <Typography variant="h5" className="developer-description">{developerData.dev_description}</Typography>
                    </Box>
                    <Box className="developer-wrapper-right-inner">
                        <Typography variant="body1">Website: <a href={developerData.website}>{developerData.website}</a></Typography>
                        <Typography variant="body1">Founding year: {developerData.founding_year}</Typography>
                        <Typography variant="body1">Revenue 2022: {developerData.revenue}</Typography>
                    </Box>
                    <Box className="developer-wrapper-right-inner">
                        <Typography variant="body1">Company type: {developerData.company_type}</Typography>
                        <Typography variant="body1">Number of employees: {developerData.number_of_employees}</Typography>
                        <Typography variant="body1">Country: {developerData.country}</Typography>
                    </Box>
            
                </Box>
                
            </Box>
        </Card>
        </div>
      ) : (
        <p>Loading...</p>
      )}
        
      </>
    )
  }
  
export default DeveloperInformation
  