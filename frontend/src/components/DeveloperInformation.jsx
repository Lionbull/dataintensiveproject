import {Box, Card, Typography} from "@mui/material";
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import config from "../config.js";
import controllerImg from "../assets/controller.webp";

function DeveloperInformation() {
    const [developerData, setDeveloperData] = useState(null);
    const {country, id} = useParams();

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
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: '80%'}}>
            {developerData ? (
                <Card sx={{width: "768px", boxShadow: 3, padding: '16px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Box component="img"
                             src={controllerImg}
                             sx={{width: '100%', height: "360px", objectFit: "cover"}}/>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                        <Box>
                            <Typography variant="h2">
                                {developerData.dev_name}
                            </Typography>
                            <Typography variant="h5">
                                {developerData.dev_description}
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Box>
                                <Typography variant="body1">Website: <a
                                    href={developerData.website}>{developerData.website}</a></Typography>
                                <Typography variant="body1">Founding
                                    year: {developerData.founding_year}</Typography>
                                <Typography variant="body1">Revenue 2022: {developerData.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1">Company type: {developerData.company_type}</Typography>
                                <Typography variant="body1">Number of
                                    employees: {developerData.number_of_employees}</Typography>
                                <Typography variant="body1">Country: {developerData.country}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            ) : (
                <Typography>Loading...</Typography>
            )}
        </Box>
    )
}

export default DeveloperInformation
  