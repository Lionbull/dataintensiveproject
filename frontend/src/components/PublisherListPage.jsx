import {Box, Card, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";
import fiFlag from "../assets/fi.svg";
import controllerImg from "../assets/controller.webp"
import mockData from "../mock-data/developerinformation.json";

// ! ! NOTE ! !
// ADD REAL DATA + SORT BY YEAR?

const DeveloperInfoCard = ({name, founding_year, website}) => {
    return(
        <Card sx={{width: "256px"}}>
            <Box component="img" src={controllerImg} sx={{width: '100%'}}/>
            <Box sx={{display: "flex", padding: "8px"}}>
                <Box sx={{width: "60%"}}>
                    <Typography>{name}</Typography>
                    <Typography>{founding_year}</Typography>
                </Box>
                <Box sx={{width: "40%", display: "flex", flexDirection: "column-reverse", alignItems: "flex-start"}}>
                    <Typography><a href={website}>{website}</a></Typography>
                </Box>
            </Box>
        </Card>
    );
};

const DeveloperListPage = () => {

    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px"}}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", padding: "16px"}}>
                <img className="flag" src={fiFlag}/>
                <Typography>Support the domestic video game industry. Buy these games! 🕹️</Typography>
            </Box>
            
            <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", width: "992px", gap: "16px"}}>
                {mockData.map((devinfo, i) => <DeveloperInfoCard {...devinfo} key={i}/>)}
            </Box>
        </Box>

    );
};

export default DeveloperListPage;