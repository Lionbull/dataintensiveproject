import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Link} from "@mui/material";
import {Link as RouterLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ display: "flex", justifyContent:"center", alignItems:"center", flexGrow: 1, width:"100vw" }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/" component={RouterLink} variant="h6" color="inherit" textAlign="center">
            Nordic Game Information -site
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
