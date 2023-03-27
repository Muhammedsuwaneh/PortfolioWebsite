import React from 'react'
import avatar from "../../assets/avatar.jpg";

import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material';

const AboutContainer = styled(Grid)(({ theme}) => ({
   margin: "auto",
   padding: "7rem 3rem",
   justifyContent: "center",
   alignItems: "center",
   flexWrap: "wrap",
}));

export default function About() {
  return (
   <div id="about">
    <AboutContainer container id='#about'>
        <Grid xs={12} sm={4} sx={{ alignContent: { sm: "right", xs: "center" }, justifyContent: "center", margin: "auto", display: "flex" }}>
            <img src={avatar} alt="avatar" style={{ width: "25rem", height: "25rem", margin: "auto" }}/> 
        </Grid>
        <Grid xs={12} sm={7} sx={{ padding: { sm: "3rem", xs: "1rem" }, textAlign: { sm: "left", xs: "center"} }}>
            <Typography variant="p">
                Hi There, I am
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { sm: "3rem", xs: "1.5rem"}, fontWeight: "bold", margin: "1.5rem 0"}}>
                Muhammed Suwaneh
            </Typography>
            <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold", color: "#7218DC", margin: "1.5rem 0" }}>
                Full stack Software Engineer, specialized in designing, developing and deploying both static and dynamic Web applications
            </Typography>
            <Typography sx={{ lineHeight: "2rem"}}>
            I use solid contemporary technologies such as JavaScript with it's related libraries ReactJS-NextJS and Typescript and other user interface designer and developer tools such as 
            Material UI, Bootstrap and Figma. I write APIs to be consumed by these static and dynamic applications using ASP.NET Core Web API, Entity Framework and Microsoft SQL Server. Got introduced 
            to these technologies while working as an intern in various establishments
            </Typography>
        </Grid>
    </AboutContainer>
   </div>
  )
}
