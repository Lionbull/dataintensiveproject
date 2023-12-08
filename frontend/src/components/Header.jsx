import {Paper, Typography} from "@mui/material";

const Header = () => {
    return (
        <Paper sx={{width: '100%', boxSizing: 'border-box', position: 'sticky'}}>
            <Typography>Countries</Typography>
        </Paper>
    )
}

export default Header;