import {Box, Card, Link, Typography} from "@mui/material";
import controllerImg from "../assets/controller.webp"
import {useEffect, useState} from "react";
import {Link as RouterLink, useParams} from "react-router-dom";
import config from "../config.js";
import getFlagSvg from "../utils/getFlagSvg.js";
import ListOfCategories from "./ListOfCategories.jsx";

const DeveloperInfoCard = ({dev_name, dev_id, founding_year, company_type}) => {
    const {country} = useParams();

    return (
        <Card sx={{width: "280px", height: '500px'}}>
            <Box component="img" src={controllerImg} sx={{width: '100%'}}/>
            <Box sx={{display: "flex", padding: "8px"}}>
                <Box sx={{width: "60%", display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <Link component={RouterLink} to={`/developer/${country}/${dev_id}`} sx={{ fontWeight: 'bold', textDecoration: 'none' }}>{dev_name}</Link>
                    <Box>
                        <Typography>founding year:</Typography>
                        <Typography>{founding_year}</Typography>
                    </Box>
                    <Box>
                        <Typography>company type:</Typography>
                        <Typography>{company_type}</Typography>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
};

const DeveloperListPage = () => {
    const [developers, setDevelopers] = useState([]);
    const {country} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = `${config.uri}/api/developers/${country}`;
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDevelopers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const flagPath = getFlagSvg(country);


    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', gap: "32px"}}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", padding: "16px"}}>
                <Box component={"img"} className="flag" src={flagPath}/>
                <Typography>Support the domestic video game industry. Buy these games! 🕹️</Typography>
            </Box>
            <ListOfCategories/>
            <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", width: "992px", gap: "16px"}}>
                {developers.map((devinfo, i) => <DeveloperInfoCard {...devinfo} key={i}/>)}
            </Box>
        </Box>
    );
};

export default DeveloperListPage;