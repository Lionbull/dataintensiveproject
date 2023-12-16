// Flag image source: https://www.sciencekids.co.nz/pictures/flags.html
import {Paper, Stack, Grid, ButtonBase, Typography, Box} from '@mui/material';
import {Link} from 'react-router-dom';
import flagFi from '../assets/fi_vertical.jpg';
import flagSe from '../assets/se_vertical.jpg';
import flagNo from '../assets/no_vertical.jpg';
import flagDk from '../assets/dk_vertical.jpg';
import flagEe from '../assets/ee_vertical.jpg';

const paperContainer = (img) => ({
    height: "40vh",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 1.0)), url(${img})`,
    backgroundSize: "cover",
    marginTop: "5rem"
});

const flagButton = (title, img) => {
    return <Paper style={paperContainer(img)}>
        <ButtonBase variant="outlined" component={Link} to={"/games/" + title} sx={{width: "100%", height: "100%"}}>
            <Stack sx={{alignItems: "center", justifyContent: "center"}}>
                <Typography sx={{position: "absolute", bottom: "0.3rem", textAlign: "center"}} variant="button"
                            fontSize="1rem">{title}</Typography>
            </Stack>
        </ButtonBase>
    </Paper>
}

const CountrySelectionPage = () => {
    return (
        <div>
            <Typography variant="h2" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "4rem",
                width: "100%"
            }} marginTop="4rem">
                Select country
            </Typography>
            <Box sx={{display: "flex", justifyContent: "center", width: "100vw"}}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80vw",
                    height: "100vh"
                }}>
                    <Grid container spacing={{xs: 4, md: 5}} columns={{xs: 1, sm: 3, md: 5}} alignItems="center"
                          justifyContent="center">
                        <Grid item xs={1} align="center">
                            {flagButton("finland", flagFi)}
                        </Grid>
                        <Grid item xs={1} align="center">
                            {flagButton("sweden", flagSe)}
                        </Grid>
                        <Grid item xs={1} align="center">
                            {flagButton("norway", flagNo)}
                        </Grid>
                        <Grid item xs={1} align="center">
                            {flagButton("denmark", flagDk)}
                        </Grid>
                        <Grid item xs={1} align="center">
                            {flagButton("estonia", flagEe)}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default CountrySelectionPage;