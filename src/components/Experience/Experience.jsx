import React from 'react'

import { Box, Divider, Chip, Typography } from "@mui/material";
import { styled } from '@mui/material';
import companies from "../../data/experience.json";
import WorkIcon from '@mui/icons-material/Work';

import Company from './Company';

const ExperienceContainer = styled(Box)(({ theme}) => ({
   background: "#fff",
   minHeight: "100vh",
}));

const CompaniesContainer = styled(Box)(({ theme}) => ({
    display: "grid",
    justifyContent: "space-around",
}));

export default function Experience() {

  const { experience } = companies;

  return (
    <ExperienceContainer id="experience" marginBottom="3rem">
         <Box sx={{ background: "#f4f4f4", textAlign: "center", marginTop: "5rem", padding: "2rem", height: "20rem", alignItems: "center", justifyContent: "center", 
      display: "flex", flexDirection: "column", margin: "auto"}}>
           <WorkIcon sx={{ fontSize: "5rem", margin: "1rem 0", color: "#333"}} />
          <Typography fontSize="2rem" color="#333">Experience</Typography>
        </Box>
        <CompaniesContainer sx={{ paadding: { lg: "10rem"}, 
            gridTemplateColumns: { lg: "repeat(2, 1fr)", xs: "1fr", sm: "1fr", md: "1f" }, margin: { xs: "0", sm: "0", md: "0", lg: "2rem 5rem"}, justifyContent: { xs: "unset"} }}>
            {experience.map((experience) => {
                return (
                    <Company {...experience} key={experience.id}/>
                )
            })}
        </CompaniesContainer>
    </ExperienceContainer>
  )
}
