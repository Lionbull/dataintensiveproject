import {Box, Card, Typography} from "@mui/material";
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import config from "../config.js";
import controllerImg from "../assets/controller.webp";

function PublisherInformation() {
    const [publisherData, setPublisherData] = useState(null);
    const {country, id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${config.uri}/api/publisher/${country}/${id}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setPublisherData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: '80%'
        }}>
            {publisherData ? (
                <Card sx={{width: "768px", boxShadow: 3, padding: '16px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Box component="img"
                             src={controllerImg}
                             sx={{width: '100%', height: "360px", objectFit: "cover"}}/>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                        <Box>
                            <Typography variant="h2">
                                {publisherData.pub_name}
                            </Typography>
                            <Typography variant="h5">
                                {publisherData.pub_description}
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Box>
                                <Typography variant="body1">
                                    Website:
                                    <a href={publisherData.website}>
                                        {publisherData.website}
                                    </a>
                                </Typography>
                                <Typography variant="body1">
                                    Founding year: {publisherData.founding_year}
                                </Typography>
                                <Typography variant="body1">
                                    Revenue 2022: {publisherData.revenue}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1">
                                    Company type:
                                    {publisherData.company_type}
                                </Typography>
                                <Typography variant="body1">
                                    Number of employees:
                                    {publisherData.number_of_employees}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            ) : (
                <Typography variant="subtitle1">Loading...</Typography>
            )}
        </Box>
    )
}

export default PublisherInformation
  