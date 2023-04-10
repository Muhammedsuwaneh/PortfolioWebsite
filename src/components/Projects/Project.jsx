import React from 'react'
import { Box, styled, Typography, Divider, Stack, Chip, Link } from "@mui/material"
import LinkIcon from "@mui/icons-material/Link"

const ProjectContainer = styled(Box)(() => ({
     display:"flex",
     flexDirection: "column",
     color: "#000",
     borderBottom: "1px solid #eee",
     margin: "2rem 0",
}));

export default function Project({ title, image, description, source, stack }) {
  return (
    <ProjectContainer sx={{ textAlign: { xs: "center"}}}>
        <Divider sx={{ padding: "1rem", margin: "2rem"}}>
            <Chip label={title} />
        </Divider>
        <img src={image} alt={title} sx={{ width: { xs: "200px", sm: "200px"} }}/>
        <Stack sx={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Typography variant="p" sx={{ fontSize: "1.2rem", lineHeight: "2rem"}}>
                {description}
            </Typography>
            <Box>
                <Typography textAlign="center" sx={{ margin: "1rem 0"}}>
                    Stack
                </Typography>
                {stack.map((item) => {
                    return <img src={item} alt="item" width="50px" height="50px" sx={{ margin: "1rem"}}/>
                })}
            </Box>
            <Link href={source} target="_blank" sx={{ textDecoration: "none", marginTop: "2rem"}}>
              Explore <LinkIcon />
            </Link>
        </Stack>
    </ProjectContainer>
  )
}
