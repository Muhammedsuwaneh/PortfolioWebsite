import React from 'react'
import { Stack, Divider, Chip } from "@mui/material"

import Project from './Project';
import selectedProjects from "../../data/projects.json";

export default function Projects() {

  const { projects } = selectedProjects;

  return (
    <Stack id="projects" sx={{ padding: { sm: "10rem", xs: "2rem"}}}>
        <Divider sx={{ padding: "1rem", textTransform: "uppercase", fontSize: "1.2rem"}}>
            <Chip label="Projects" />
        </Divider>
        {projects.map((project) => {
            return <Project {...project} key={project.id} />
        })}
    </Stack>
  )
}
