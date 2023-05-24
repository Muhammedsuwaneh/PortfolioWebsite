import React from 'react'
import { Stack, Box, Typography } from "@mui/material"
import DataArrayIcon from '@mui/icons-material/DataArray';

import Project from './Project';
import selectedProjects from "../../data/projects.json";

export default function Projects() {

  const { projects } = selectedProjects;

  return (
    <>
      <Box sx={{ background: "#F4F8FA", textAlign: "center", marginTop: "5rem", padding: "2rem", height: "20rem", alignItems: "center", justifyContent: "center", 
      display: "flex", flexDirection: "column", margin: "auto"}}>
           <DataArrayIcon sx={{ fontSize: "5rem", margin: "1rem 0", color: "#FAB93C"}} />
          <Typography fontSize="2rem" color="#333" fontWeight="bold">Projects</Typography>
      </Box>
      <Stack id="projects" sx={{ padding: {lg: "10rem", md: "5rem", sm: "1rem", xs: "1rem"}}}>
          {projects.map((project) => {
              return <Project {...project} key={project.id} />
          })}
      </Stack>
    </>
  )
}
