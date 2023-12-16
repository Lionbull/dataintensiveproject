import {Box, Card, FormControl, InputLabel, MenuItem, Select, Typography, Link} from "@mui/material";
import {useEffect, useState} from "react";
import controllerImg from "../assets/controller.webp"
import mockData from "../mock-data/games.json";
import filter from "../utils/filter.js";
import config from "../config.js";
import {useParams} from "react-router-dom";
import getFlagSvg from "../utils/getFlagSvg.js";

const emptyFilters = {
    vg_name: "",
    release_year: "",
    price: ""
};

const DropdownFilter = ({property, name, filters, setFilters}) => {
    const handleChange = (event) => {
        setFilters({...emptyFilters, [property]: event.target.value});
    };

    return (
        <FormControl sx={{width: "150px"}}>
            <InputLabel>{name}</InputLabel>
            <Select label={name} value={filters[property]} onChange={handleChange}>
                <MenuItem value="">Not selected</MenuItem>
                <MenuItem value="Ascending">Ascending</MenuItem>
                <MenuItem value="Descending">Descending</MenuItem>
            </Select>
        </FormControl>
    );
};

const Filters = ({filters, setFilters}) => {
    return (
        <Box sx={{display: "flex", justifyContent: "center", gap: "16px"}}>
            <DropdownFilter property="vg_name" name="Name" filters={filters} setFilters={setFilters}/>
            <DropdownFilter property="release_year" name="Release Year" filters={filters} setFilters={setFilters}/>
            <DropdownFilter property="price" name="Price" filters={filters} setFilters={setFilters}/>
        </Box>
    );
};

const GameInfoCard = ({vg_name, vg_id, release_year, developer, publisher, price}) => {
    const {country} = useParams();
    return(
        <Card sx={{width: "256px"}}>
            <Box component="img" src={controllerImg} sx={{width: '100%'}}/>
            <Box sx={{display: "flex", padding: "8px"}}>
                <Box sx={{width: "60%"}}>
                    <Link href={`/game/${country}/${vg_id}`} sx={{ fontWeight: 'bold' }}>{vg_name}</Link>
                    <Typography>{release_year}</Typography>
                    <Typography>{developer}</Typography>
                    <Typography>{publisher}</Typography>
                </Box>
                <Box sx={{width: "40%", display: "flex", flexDirection: "column-reverse", alignItems: "flex-end"}}>
                    <Typography>{price} €</Typography>
                </Box>
            </Box>
        </Card>
    );
};

const GamesListPage = () => {
    const [filters, setFilters] = useState(emptyFilters);
    const [games, setGames] = useState([]);
    const {country} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = `${config.uri}/api/games/${country}`;

            try {
                const response = await fetch(apiUrl)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const filteredData = filter(games, filters);

    const flagPath = getFlagSvg(country);

    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px"}}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", padding: "16px"}}>
                <img className="flag" src={flagPath}/>
                <Typography>Support the domestic video game industry. Buy these games! 🕹️</Typography>
            </Box>
            <Filters filters={filters} setFilters={setFilters}/>
            <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", width: "992px", gap: "16px"}}>
                {filteredData.map((game, i) => <GameInfoCard {...game} key={i}/>)}
            </Box>
        </Box>

    );
};

export default GamesListPage;