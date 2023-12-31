import {Box, Card, Link, Typography} from "@mui/material";
import controllerImg from "../assets/controller.webp"
import {useEffect, useState} from "react";
import {Link as RouterLink, useParams} from "react-router-dom";
import config from "../config.js";
import getFlagSvg from "../utils/getFlagSvg.js";
import ListOfCategories from "./ListOfCategories.jsx";

const PublisherInfoCard = ({pub_name, pub_id, founding_year, company_type}) => {
    const {country} = useParams();

    return(
        <Card sx={{width: "280px", height: '530px'}}>
            <Box component="img" src={controllerImg} sx={{width: '100%'}}/>
            <Box sx={{display: "flex", padding: "8px"}}>
                <Box sx={{width: "60%", display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <Link component={RouterLink} to={`/publisher/${country}/${pub_id}`} sx={{ fontWeight: 'bold', textDecoration: 'none' }}>{pub_name}</Link>
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

const PublisherListPage = () => {
    const [publishers, setPublishers] = useState([]);
    const {country} = useParams();
    const flagPath = getFlagSvg(country);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${config.uri}/api/publishers/${country}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setPublishers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', gap: "32px"}}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", padding: "16px"}}>
                <Box component={"img"} className="flag" src={flagPath}/>
                <Typography>Support the domestic video game industry. Buy these games! 🕹️</Typography>
            </Box>
            <ListOfCategories/>
            <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", width: "992px", gap: "16px"}}>
                {publishers.map((pubinfo, i) => <PublisherInfoCard {...pubinfo} key={i}/>)}
            </Box>
        </Box>
    );
};

export default PublisherListPage;