import {Box, Card, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";
import fiFlag from "../assets/fi.svg";
import controllerImg from "../assets/controller.webp"
import mockData from "../mock-data/games.json";
import filter from "../utils/filter.js";

const emptyFilters = {
    title: "",
    releaseYear: "",
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
            <DropdownFilter property="title" name="Title" filters={filters} setFilters={setFilters}/>
            <DropdownFilter property="releaseYear" name="Release Year" filters={filters} setFilters={setFilters}/>
            <DropdownFilter property="price" name="Price" filters={filters} setFilters={setFilters}/>
        </Box>
    );
};

const GameInfoCard = ({title, releaseYear, developer, publisher, price}) => {
    return(
        <Card sx={{width: "256px"}}>
            <Box component="img" src={controllerImg} sx={{width: '100%'}}/>
            <Box sx={{display: "flex", padding: "8px"}}>
                <Box sx={{width: "60%"}}>
                    <Typography>{title}</Typography>
                    <Typography>{releaseYear}</Typography>
                    <Typography>{developer}</Typography>
                    <Typography>{publisher}</Typography>
                </Box>
                <Box sx={{width: "40%", display: "flex", flexDirection: "column-reverse", alignItems: "flex-end"}}>
                    <Typography>{price}</Typography>
                </Box>
            </Box>
        </Card>
    );
};

const GamesListPage = ({country}) => {
    const [filters, setFilters] = useState(emptyFilters);

    const filteredData = filter(mockData, filters);

    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px"}}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", padding: "16px"}}>
                <img className="flag" src={fiFlag}/>
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