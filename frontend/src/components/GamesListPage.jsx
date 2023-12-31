import {Box, Card, FormControl, InputLabel, MenuItem, Select, Typography, Link} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {useEffect, useState} from "react";
import controllerImg from "../assets/controller.webp"
import filter from "../utils/filter.js";
import config from "../config.js";
import {useParams} from "react-router-dom";
import getFlagSvg from "../utils/getFlagSvg.js";
import ListOfCategories from "./ListOfCategories.jsx";

const emptyFilters = {
    vg_name: "",
    release_year: "",
    price: "",
    dev_name: "",
    pub_name: ""
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
            <DropdownFilter property="dev_name" name="Developer" filters={filters} setFilters={setFilters}/>
            <DropdownFilter property="pub_name" name="Publisher" filters={filters} setFilters={setFilters}/>
            <DropdownFilter property="price" name="Price" filters={filters} setFilters={setFilters}/>
        </Box>
    );
};

const GameInfoCard = ({vg_name, vg_id, release_year, dev_name, dev_id, pub_name, pub_id, price}) => {
    const {country} = useParams();
    return (
        <Card sx={{width: "280px", height: '530px'}}>
            <Box component="img" src={controllerImg} sx={{width: '100%'}}/>
            <Box sx={{display: "flex", padding: "8px"}}>
                <Box sx={{width: "60%", display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <Box>
                        <Link component={RouterLink} to={`/game/${country}/${vg_id}`} sx={{ fontWeight: 'bold', textDecoration: 'none' }}>{vg_name}</Link>
                    </Box>
                    <Box>
                        <Typography>release year: </Typography>
                        <Typography>{release_year}</Typography>
                    </Box>
                    <Box>
                        <Typography>developer:</Typography>
                        <Link component={RouterLink} to={`/developer/${country}/${dev_id}`} sx={{ fontWeight: 'bold', textDecoration: 'none' }}>{dev_name}</Link>
                    </Box>
                    <Box>
                        <Typography>publisher:</Typography>
                        <Link component={RouterLink} to={`/publisher/${country}/${pub_id}`} sx={{ fontWeight: 'bold', textDecoration: 'none'  }}>{pub_name}</Link>
                    </Box>
                </Box>
                <Box sx={{width: "40%", display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
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
    const flagPath = getFlagSvg(country);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${config.uri}/api/games/${country}`)
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const filteredData = filter(games, filters);

    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', gap: "32px"}}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", padding: "16px"}}>
                <Box component={"img"} className="flag" src={flagPath}/>
                <Typography>Support the domestic video game industry. Buy these games! 🕹️</Typography>
            </Box>
            <ListOfCategories/>
            <Filters filters={filters} setFilters={setFilters}/>
            <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", width: "992px", gap: "16px"}}>
                {filteredData.map((game, i) => <GameInfoCard {...game} key={i}/>)}
            </Box>
        </Box>
    );
};

export default GamesListPage;