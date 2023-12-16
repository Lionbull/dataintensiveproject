// Flag image source: https://www.sciencekids.co.nz/pictures/flags.html
import { Paper, Stack, Grid, ButtonBase, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import flagFi from '../assets/fi_vertical.jpg';
import flagSe from '../assets/se_vertical.jpg';
import flagNo from '../assets/no_vertical.jpg';
import flagDk from '../assets/dk_vertical.jpg';
import flagEe from '../assets/ee_vertical.jpg';

import "../styles/countryselectionpage.css"

const paperContainer = (img) => ({
    height: "40vh",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 1.0)), url(${img})`,
    backgroundSize: "cover",
    marginTop: "5rem"
});

const flagButton = (title, img) => {
    return <Paper style={paperContainer(img)}>
        <ButtonBase variant="outlined" component={Link} to={"/games?country=" + title} sx={{ width: "100%", height: "100%" }}>
            <Stack sx={{ alignItems: "center", justifyContent: "center" }}>      
                <Typography className="country-title" variant="button" fontSize="1rem">{title}</Typography>
            </Stack>
        </ButtonBase>
    </Paper>
}

const CountrySelectionPage = () => {
    return (
        <div>
            <Typography variant="h2" className='title' marginTop="4rem">Select country</Typography>
            <div className="flag-box-wrapper-outer">
                <div className="flag-box-wrapper">
                    <Grid container spacing={{ xs: 4, md: 5 }} columns={{ xs: 1, sm: 3, md: 5 }} alignItems="center" justifyContent="center">
                        <Grid item xs={1} align="center">
                            {flagButton("Finland", flagFi)}
                        </Grid>
                        <Grid item xs={1} align="center">
                            {flagButton("Sweden", flagSe)}
                        </Grid>
                        <Grid item xs={1} align="center">
                            {flagButton("Norway", flagNo)}
                        </Grid>
                        <Grid item xs={1} align="center">
                            {flagButton("Denmark", flagDk)}
                        </Grid>
                        <Grid item xs={1} align="center">
                            {flagButton("Estonia", flagEe)}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default CountrySelectionPage;