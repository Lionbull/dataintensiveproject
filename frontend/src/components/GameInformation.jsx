import {Box, Card, Typography} from "@mui/material";
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import controllerImg from "../assets/controller.webp"
import config from "../config.js";

function GameInformation() {
    const [gameData, setGameData] = useState(null);
    const {country, id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${config.uri}/api/game/${country}/${id}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setGameData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: '80%'}}>
            {gameData ? (
                <Card sx={{width: "768px", boxShadow: 3, padding: '16px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Box component="img" src={controllerImg} sx={{width: '100%', height: "360px", objectFit: "cover"}}/>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <Typography variant="h2">{gameData.vg_name}</Typography>
                            <Typography variant="h5">{gameData.vg_description}</Typography>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Box>
                                <Typography variant="body1">Release year: {gameData.release_year}</Typography>
                                <Typography variant="body1">Genre: {gameData.genre}</Typography>
                                <Typography variant="body1">Age limit: PG-{gameData.age_limit}</Typography>
                            </Box>
                            <Box>
                                <Typography className="price">Budget: {gameData.budget}€</Typography>
                                <Typography>Engine: {gameData.engine}</Typography>
                                <Typography>Country: {gameData.country}</Typography>
                            </Box>
                            <Box>
                                <Typography className="price">Price: {gameData.price}€</Typography>
                                <Typography>Store links</Typography>
                                <Typography style={{marginTop: "5px"}}>Platforms:</Typography>
                                <Box sx={{display: "flex", flexDirection: "row", gap: "10px"}}>
                                    {gameData.platform.map((platform, index) => (
                                        <Typography key={index}>{platform}</Typography>
                                    ))}
                                </Box>
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

export default GameInformation
  