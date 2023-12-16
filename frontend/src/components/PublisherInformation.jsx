import {Box, Card, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import "../styles/publisherinformation.css"

// TEST DATA BELOW - REPLACE WITH DATABASE PROPS DATA
import mockData from "../mock-data/publisherinformation.json";
import config from "../config.js";


function PublisherInformation() {
  const [publisherData, setPublisherData] = useState(null);


  const { country, id } = useParams();
  console.log(country, id)
  useEffect( () => {
      const apiUrl = `${config.uri}/api/publisher/${country}/${id}`;
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          console.log('Fetched data:', data);
          setPublisherData(data);
          console.log(publisherData)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
      <>
      {publisherData ? (
        <div>
          <Card className="publisher-outer" sx={{width: "1200px"}}>
            <Box className="publisher-wrapper-outer">

                <Box className="publisher-wrapper-left">
                <Box component="img" src={"https://media.istockphoto.com/id/1439837596/photo/blank-tv-or-picture-frame-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=OZmkq3tJ1nXJ_DzOsTHQlnMi8VVZX6EZrJP8Mb1V844="} sx={{width: '250px'}}/>
                </Box>
                
                <Box className="publisher-wrapper-right">
                    <Box className="publisher-wrapper-right-inner">
                        <Typography variant="h2">{publisherData.pub_name}</Typography>
                        <Typography variant="h5" className="publisher-description">{publisherData.pub_description}</Typography>
                    </Box>
                    <Box className="publisher-wrapper-right-inner">
                        <Typography variant="body1">Website: <a href={publisherData.website}>{publisherData.website}</a></Typography>
                        <Typography variant="body1">Founding year: {publisherData.founding_year}</Typography>
                        <Typography variant="body1">Revenue 2022: {publisherData.revenue}</Typography>
                    </Box>
                    <Box className="publisher-wrapper-right-inner">
                        <Typography variant="body1">Company type: {publisherData.company_type}</Typography>
                        <Typography variant="body1">Number of employees: {publisherData.number_of_employees}</Typography>
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
  
export default PublisherInformation
  