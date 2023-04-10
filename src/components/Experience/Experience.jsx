import React from 'react'

import { Box, Divider, Chip } from "@mui/material";
import { styled } from '@mui/material';
import companies from "../../data/experience.json";

import Company from './Company';

const ExperienceContainer = styled(Box)(({ theme}) => ({
   background: "#E5E5E7",
   minHeight: "100vh",
   padding: "3rem",
}));

const CompaniesContainer = styled(Box)(({ theme}) => ({
    display: "grid",
    justifyContent: "space-around",
}));

export default function Experience() {

  const { experience } = companies;

  return (
    <ExperienceContainer id="experience" sx={{ padding: { xs: "1rem"}}}>
         <Divider sx={{ padding: "1rem", textTransform: "uppercase", fontSize: "1.2rem"}}>
            <Chip label="Experience" />
        </Divider>
        <CompaniesContainer sx={{ gridTemplateColumns: { lg: "repeat(2, 1fr)", xs: "1fr", sm: "1fr", md: "1f" }, margin: { xs: "0", sm: "0", md: "0", lg: "2rem auto"}, justifyContent: { xs: "unset"} }}>
            {experience.map((experience) => {
                return (
                    <Company {...experience} key={experience.id}/>
                )
            })}
        </CompaniesContainer>
    </ExperienceContainer>
  )
}
