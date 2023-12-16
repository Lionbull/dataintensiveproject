import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, width:"100vw" }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Nordic Game Information -site
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
