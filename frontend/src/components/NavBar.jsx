import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Link} from "@mui/material";
import {Link as RouterLink, useParams} from "react-router-dom";

export default function NavBar() {
    const {country} = useParams();

    return (
        <AppBar position="sticky">
            <Toolbar variant="dense" sx={{gap: '16px'}}>
                <Link to="/" component={RouterLink} variant="h6" color="inherit" textAlign="center">
                    Nordic Game Information -site
                </Link>
            </Toolbar>
        </AppBar>
    );
}
