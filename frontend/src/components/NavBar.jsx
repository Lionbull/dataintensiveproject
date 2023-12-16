import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Link} from "@mui/material";
import {Link as RouterLink } from "react-router-dom";

export default function NavBar() {
  return (
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Link to="/" component={RouterLink} variant="h6" color="inherit" textAlign="center">
            Nordic Game Information -site
          </Link>
        </Toolbar>
      </AppBar>
  );
}
