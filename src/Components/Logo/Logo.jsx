import { Box, Container, Typography } from "@mui/material";
import React from "react";
import './Logo.css';

function Logo() {
    return (
        <Container className="LogoContainer">
            <Box className="ImageContainer">
                <img src='https://cdn-icons-png.flaticon.com/512/599/599161.png?w=996&t=st=1675870383~exp=1675870983~hmac=805563768a15481a3cf96d75a206e11405eb8d736d605192925bca6db1ab5b61' alt="icon"/>
            </Box>
            <Typography className="TextLogoHome" variant="h1" color="initial">TO DO MACHINE</Typography>
        </Container>
    )
}

export { Logo };