import {Box, Card, Typography} from "@mui/material";
import fiFlag from "../assets/fi.svg";
import controllerImg from "../assets/controller.webp"

const mockData = [
    {
        title: "Game 1",
        releaseYear: "2001",
        developer: "Developer 1",
        publisher: "Publisher 1"
    },
    {
        title: "Game 2",
        releaseYear: "2002",
        developer: "Developer 2",
        publisher: "Publisher 2"
    },
    {
        title: "Game 3",
        releaseYear: "2003",
        developer: "Developer 3",
        publisher: "Publisher 3"
    },
    {
        title: "Game 4",
        releaseYear: "2004",
        developer: "Developer 4",
        publisher: "Publisher 4"
    },
    {
        title: "Game 5",
        releaseYear: "2005",
        developer: "Developer 5",
        publisher: "Publisher 5"
    },
    {
        title: "Game 6",
        releaseYear: "2006",
        developer: "Developer 6",
        publisher: "Publisher 6"
    },
    {
        title: "Game 7",
        releaseYear: "2007",
        developer: "Developer 7",
        publisher: "Publisher 7"
    },
    {
        title: "Game 8",
        releaseYear: "2008",
        developer: "Developer 8",
        publisher: "Publisher 8"
    },
    {
        title: "Game 9",
        releaseYear: "2009",
        developer: "Developer 9",
        publisher: "Publisher 9"
    },
]

const GameInfoCard = ({title, releaseYear, developer, publisher}) => {
    return(
        <Card>
            <img src={controllerImg}/>
            <Box sx={{display: "flex", padding: "8px"}}>
                <Box sx={{width: "60%"}}>
                    <Typography>{title}</Typography>
                    <Typography>{releaseYear}</Typography>
                    <Typography>{developer}</Typography>
                    <Typography>{publisher}</Typography>
                </Box>
                <Box sx={{width: "40%", display: "flex", flexDirection: "column-reverse", alignItems: "flex-end"}}>
                    <Typography>Price</Typography>
                </Box>
            </Box>
        </Card>
    )
}

const GamesListPage = ({country}) => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px"}}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", padding: "16px"}}>
                <img className="flag" src={fiFlag}/>
                <Typography>Support the domestic video game industry. Buy these games! 🕹️</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", width: "768px", gap: "16px"}}>
                {mockData.map((game, i) => <GameInfoCard {...game} key={i}/>)}
            </Box>
        </Box>

    )
}

export default GamesListPage;