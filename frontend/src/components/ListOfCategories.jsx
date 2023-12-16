import {Link as RouterLink, useParams} from "react-router-dom";
import {Box, Link} from "@mui/material";

const ListOfCategories = () => {
    const {country} = useParams();
    return (
        <Box sx={{display: 'flex', gap: '32px'}}>
            <Link to={`/games/${country}`} component={RouterLink} variant="h6" color="inherit" textAlign="center">
                Games
            </Link>
            <Link to={`/developers/${country}`} component={RouterLink} variant="h6" color="inherit" textAlign="center">
                Developers
            </Link>
            <Link to={`/publishers/${country}`} component={RouterLink} variant="h6" color="inherit" textAlign="center">
                Publishers
            </Link>
        </Box>
    )
}

export default ListOfCategories;